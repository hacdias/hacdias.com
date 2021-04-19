---
title: Caddy Plugins
description: |
  Caddy is a lightweight, fast, general-purpose, cross-platform HTTP/2 web server with automatic HTTPS with support for plugins. I've created some.
aliases:
- /articles/2015/09/12/1/
- /2015/09/12/01/caddy-plugins/
- /2015/09/12/01/
- /2015/09/caddy-plugins/
- /articles/2015/09/12/1/caddy-plugins
- /articles/2015/09/caddy-plugins/
noMentions: true
---

[Caddy](https://caddyserver.com) is a HTTP/2 web server with automatic HTTPS. It's easy to use, has no dependencies and it is already production-ready. One of the biggest advantages of Caddy is that it is relatively simple to create plugins that extend its own native functionalities, using Go.

Despite having contributed few times to Caddy itself, I have developed some useful plugins for the first version of Caddy. In the meanwhile, a second major version of Caddy was released and the plugins were discontinued.

- **http.hugo**: web interface for [Hugo](https://gohugo.io) static website generator.
- **http.jekyll**: web interface for [Jekyll](https://jekyllrb.com/) static website generator.
- **http.filebrowser**: using [File Browser](https://github.com/filebrowser/filebrowser) through a Caddy plugin.
- **[http.minify](https://github.com/hacdias/caddy-v1-minify)**: on-the-fly minification for CSS, HTML, JSON, SVG and XML by using @tdewolff's [library](https://github.com/tdewolff/minify).
- **[http.webdav](https://github.com/hacdias/caddy-v1-webdav)**: WebDAV capabilities with support for path restrictions rules and users.
- **[hook.service](https://github.com/hacdias/caddy-v1-service)**: installation of Caddy as a system service by using @kardiano's [library](https://github.com/kardianos/service).
