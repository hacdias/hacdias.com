---
title: Caddy Plugins
description: Caddy is an HTTP/2 web server with automatic HTTPS and support for plugins. I created a few for its first version.
noIndex: true
---

[Caddy](https://caddyserver.com) is an HTTP/2 web server with automatic HTTPS. It's easy to use and has no dependencies. One of the biggest advantages of Caddy is that it is relatively simple to create plugins that extend its native functionality, using Go.

Besides contributing a few times to Caddy itself, I developed some plugins for the first version of Caddy. Meanwhile, a second major version of Caddy was released and the plugins were discontinued. Their documentation pages on the Caddy website are still available on the Wayback Machine.

- [**http.hugo**](https://web.archive.org/web/20170720055750/https://caddyserver.com/docs/http.hugo): web interface for the [Hugo](https://gohugo.io) static website generator.
- [**http.jekyll**](https://web.archive.org/web/20170918165507/https://caddyserver.com/docs/http.jekyll): web interface for the [Jekyll](https://jekyllrb.com/) static website generator.
- [**http.filebrowser**](https://web.archive.org/web/20190131202115/https://caddyserver.com/docs/http.filebrowser): using [File Browser](https://github.com/filebrowser/filebrowser) through a Caddy plugin.
- [**http.minify**](https://web.archive.org/web/20190131202114/https://caddyserver.com/docs/http.minify) ([GitHub](https://github.com/hacdias/caddy-v1-minify)): on-the-fly minification for CSS, HTML, JSON, SVG and XML using @tdewolff's [library](https://github.com/tdewolff/minify).
- [**http.webdav**](https://web.archive.org/web/20190131202114/https://caddyserver.com/docs/http.webdav) ([GitHub](https://github.com/hacdias/caddy-v1-webdav)): WebDAV capabilities with support for path restriction rules and users.
- [**hook.service**](https://web.archive.org/web/https://caddyserver.com/docs/hook.service) ([GitHub](https://github.com/hacdias/caddy-v1-service)): installation of Caddy as a system service by using @kardianos' [library](https://github.com/kardianos/service).

<div class="fg" style="grid-template-columns: repeat(3, 1fr);">

![http.hugo](image:2026-10-23-caddy-http-hugo)
{width="3000" height="3000"}

![http.jekyll](image:2026-10-23-caddy-http-jekyll)
{width="3000" height="3000"}

![http.filebrowser](image:2026-10-23-caddy-http-filebrowser)
{width="3000" height="3000"}

![http.minify](image:2026-10-23-caddy-http-minify)
{width="3000" height="3000"}

![http.webdav](image:2026-10-23-caddy-http-webdav)
{width="3000" height="3000"}

![hook.service](image:2026-10-23-caddy-hook-service)
{width="3000" height="3000"}

</div>
