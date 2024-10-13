---
title: IRC Bouncer Setup With Soju, Gamja, Caddy and Docker
date: 2023-12-24T12:33:29Z
categories:
  - articles
syndication:
  - https://fosstodon.org/@hacdias/111635436784320724
tags:
  - caddy
  - docker
  - irc
---

Around a week ago, I decided to take a look at <abbr title="Internet Relay Chat">IRC</abbr> again, and setup an IRC bouncer. After some search, I settled on going with [soju](https://soju.im/) as my IRC bouncer, and [gamja](https://git.sr.ht/~emersion/gamja) as a nice web frontend. Since I use [Caddy](https://caddyserver.com/) and Docker in my server, but neither provides a Dockerfile, I thought sharing my setup with the world could be useful.

<!--more-->

In this tutorial, we will be building our own soju and Caddy Docker images. Then, configure soju with Caddy to reverse proxy the IRC traffic with TLS encryption, as well as a WebSocket for gamja. I assume that you have knowledge of Docker and Caddy.

## The soju Dockerfile

The Dockerfile for soju is quite simple, and is based on Alpine[^sojumusl]. It just installs some dependencies since soju with SQLite requires a CGO build - Go and C. Then it clones the repository, builds the binaries - yes, there are three! -, and copies them to a base Alpine image.

```dockerfile
FROM golang:1.21-alpine3.18

ENV SOJU_VERSION v0.7.0

RUN apk update && apk add --no-cache git make build-base
  
WORKDIR /

RUN git clone https://git.sr.ht/~emersion/soju && \
  cd soju && \
  git checkout $SOJU_VERSION && \
  make soju

FROM alpine:3.18

COPY --from=0 /soju/soju /usr/bin/soju
COPY --from=0 /soju/sojudb /usr/bin/sojudb
COPY --from=0 /soju/sojuctl /usr/bin/sojuctl

RUN mkdir -p /run/soju/

VOLUME /var/lib/soju/
VOLUME /etc/soju/

CMD ["soju"]
```

[^sojumusl]: We're building soju with an older version of Alpine because there are incompatibilities between one of its dependencies and the newer version of the `musl` compiler. A patch has already been [merged](https://git.sr.ht/~emersion/soju/commit/c5d07658aba786d449f4db9a2ef28f3e24465e00), and will go with the next version of soju.

## The Caddy Dockerfile

Now, Caddy. Caddy is interesting. Caddy is not able to reverse proxy non-HTTP traffic by default. But there's a nifty [`caddy-l4`](https://github.com/mholt/caddy-l4) experimental plugin that opens the Caddy world to pure TCP and UDP handling. We're going to use it[^caddyproxy]. But there's a slight issue: it does not support the Caddyfile format.

Since I don't want to convert my quite large Caddyfile into Caddy's JSON format, I will be using a lazy strategy based on [Andrew's](https://drew.onl/posts/caddyfile-with-json/) post. In this strategy, we will have an entrypoint script that converts a Caddyfile into a JSON configuration file, and mashes it together with a `layer4.json` file that contains the `caddy-l4` configuration.

Here's the Dockerfile:

```dockerfile
FROM golang:1.21-bookworm

ENV CADDY_VERSION v2.7.6

# Builds Caddy with all the plugins you need. I fixed caddy-l4 into a
# specific commit to avoid breaking changes without noticing. Add other
# plugins you might need.
RUN go install github.com/caddyserver/xcaddy/cmd/xcaddy@latest; \
  xcaddy build $CADDY_VERSION \
    --with github.com/mholt/caddy-l4@71bb90d; \
  mv caddy /usr/bin/caddy

FROM alpine:3.19

RUN apk add --no-cache ca-certificates mailcap jq

COPY --from=0 /usr/bin/caddy /usr/bin/caddy

RUN chmod +x /usr/bin/caddy; \
	caddy version

# See https://caddyserver.com/docs/conventions#file-locations for details
ENV XDG_CONFIG_HOME /config
ENV XDG_DATA_HOME /data

VOLUME /config
VOLUME /data

EXPOSE 80
EXPOSE 443

COPY ./entrypoint.sh /srv/entrypoint.sh
WORKDIR /srv

CMD ["/srv/entrypoint.sh"]
```

And now the `entrypoint.sh` script, which should be in the same directory as the Dockerfile:

```shell
#!/usr/bin/env sh

set -eou pipefail

echo "Removing existing caddy.json file"
rm -f ./caddy.json

echo "Formatting Caddyfile"
caddy fmt --overwrite /etc/caddy/Caddyfile

echo "Generating caddy.json file"
caddy adapt --config /etc/caddy/Caddyfile --pretty --validate > caddy.json

if [ -f /etc/caddy/layer4.json ]; then
	echo "Reading /etc/caddy/layer4.json"
	layer4_content=$(cat /etc/caddy/layer4.json)

	echo "Embedding layer4 content into caddy.json"
	jq --argjson layer4 "$layer4_content" '.apps.layer4 = $layer4' ./caddy.json > ./temp.json
	mv ./temp.json ./caddy.json
fi

echo "Starting Caddy"
caddy run --config ./caddy.json
```

Notice that it checks for the `layer4.json` file. My goal was to make this image reusable in case I want to use for other purposes that do not have the layer 4 proxying requirements.

[^caddyproxy]: Another option would be to leverage the fact that the Caddy provisioned TLS certificates are present on disk. Then, share a Docker volume between Caddy's and soju's container. Then [configure](https://soju.im/doc/soju.1.html) soju's TLS option to use the Caddy certificates. With this strategy, you'd need to make sure soju would refresh the configuration when Caddy updates the certificates. This could potentially be done with [`caddy-events-exec`](https://github.com/mholt/caddy-events-exec) plugin.

## Building gamja

gamja does not provide already built files. However, building them is quite easy, but you need Node.js for this. Just clone the repository, install the dependencies, and build the minified version of the frontend. The built files are just static HTML, CSS and JS files. Copy them into a directory that you will attach to the Caddy container to serve.

```bash
git clone https://git.sr.ht/~emersion/gamja
cd gamja
npm install --include=dev
npm run build
cp -R build /www/path/gamja
```

## The soju Configuration

Create a `config.ini` file for Soju [configuration](https://soju.im/doc/soju.1.html) and add the following. Don't forget to replace the example names and hostnames by your server name, and your address. This configuration stores the database and messages on the default directories. These will be mounted as Docker volumes.

```ini
title My Server Name
hostname irc.example.com

db sqlite3 /var/lib/soju/main.db
message-store fs /var/lib/soju/logs/

listen unix+admin://
listen irc+insecure://0.0.0.0:6667
http-origin irc.example.com
listen ws+insecure://0.0.0.0:3030
```

This configuration listens on quite a few ports. Let's quickly break it down:

- `unix+admin://` is the socket used by `sojuctl`. This will only be used for some administrative commands and must not be exposed outside the container.
- `irc+insecure://0.0.0.0:6667` is the IRC protocol itself. This will be reverse proxied with Caddy in order to add TLS on top.
- `ws+insecure://0.0.0.0:3030` is the WebSocket that will be reverse proxied by Caddy and used by gamja. Caddy will also take care of the TLS of this one.

## The Caddy Configuration

Now, the fun Caddy configuration part. In your Caddyfile, add the following in order to serve the static gamja files and reverse proxy the WebSocket `/socket` path to the soju container on port 3030.

```caddy
irc.example.com {
	tls your@email.com
	root * /www/gamja
	file_server
	reverse_proxy /socket soju:3030
}
```

And now create a `layer4.json` file with the configuration to proxy the IRC traffic. Notice that we're listening on port 6697 and proxying to the port 6667 of the soju container. 6697 is the TLS-encrypted IRC "standard" port. Don't forget to change the value of `default_sni` to the correct address! You can read more about this specific configuration [here](https://wiki.znc.in/Reverse_Proxy#Caddy).

```json
{
  "servers": {
    "soju": {
      "listen": [
        ":6697"
      ],
      "routes": [
        {
          "handle": [
            {
              "handler": "tls",
              "connection_policies": [
                {
                  "alpn": [
                    "http/1.1",
                    "http/1.0"
                  ],
                  "default_sni": "irc.example.com"
                }
              ]
            },
            {
              "handler": "proxy",
              "upstreams": [
                {
                  "dial": [
                    "soju:6667"
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
}
```

## The Docker Compose

Now, the last piece of the puzzle is the Docker compose file combining all this things. My `compose.yaml` directly references the directories in which the Dockerfiles for both soju and Caddy are located, such that I can just build them directly. Don't forget to change the paths to the correct paths in your system.

```yaml
version: '3'
services:
  soju:
    restart: always
    container_name: soju
    build: /path/to/soju/dockerfile
    volumes:
      - /path/to/config.ini:/etc/soju/config:ro
      - soju-data:/var/lib/soju/
  caddy:
    restart: always
    container_name: caddy
    build: /path/to/caddy/dockerfile
    ports:
      - "80:80"
      - "443:443"
      - "6697:6697"
    volumes:
      - /path/to/Caddyfile:/etc/caddy/Caddyfile
      - /path/to/layer4.json:/etc/caddy/layer4.json
      - /path/to/gamja:/www/gamja
      - caddy-data:/data
      - caddy-config:/config
volumes:
  soju-data:
  caddy-data:
  caddy-config:
```

Finally, start everything:

```bash
docker compose build
docker compose up -d
```

At this point, you should have gamja being served on `https://irc.example.com` and be able to access your IRC bouncer via the TLS encrypted socket at `ircs://irc.example.com:6697`. Don't forget to change them to the correct address where you're actually serving everything.

Now, you just need a user, which you can create with a quick command inside the soju container:

```bash
docker compose exec -it soju sojuctl user create -admin \
  -username <username> \
  -password <password>
```

This will create an admin user which can talk to [`BouncerServ`](https://soju.im/doc/soju.1.html) to create other users if needed. At this point, you can navigate to where you're serving gamja and login with the credentials from the user you just created. You can also just use any other client to connect to this bouncer at `ircs://irc.example.com:6697`.

Note that for clients that do not support some IRCv3 functionality, or for clients that do not support soju's extension, you'll need to login with a username suffix to get proper chat playback. Read soju's [manual page](https://soju.im/doc/soju.1.html) for more information.

I hope this tutorial was helpful for you. This was quite an adventure for me, and it seems to be working!
