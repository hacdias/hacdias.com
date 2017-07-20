---
type:   page
date:	2015-09-12 12:10:00+00:00
title: "Plugins for Caddy"
image: "work/caddy-plugins/1"
tagline: "HTML, CSS, JS & Go"
---

[Caddy](https://caddyserver.com) is a HTTP/2 web server with automatic HTTPS. It's easy to use, has no dependencies and it is already production-ready. One of the biggest advantagens of Caddy is that it is relatively simple to create plugins that extend its own native functionalities.

+ **http.minify** implements minification on-the-fly for CSS, HTML, JSON, SVG and XML. It uses [tdewolff's minify library](https://github.com/tdewolff/minify). [[Documentation]](https://caddyserver.com/docs/http.minify)
+ **http.webdav** implements WebDAV capabilities with support for path restriction rules and users. [[Documentation]](https://caddyserver.com/docs/http.webdav)
+ **http.filemanager** is an implementation of my [File Manager project](/work/filemanager) as a plugin for Caddy. [[Documentation]](https://caddyserver.com/docs/http.filemanager)
+ **http.hugo** is a web interface for [Hugo](https://gohugo.io) static website generator. [[Documentation]](https://caddyserver.com/docs/http.hugo)
+ **hook.service** implements of [github.com/kardianos/service](https://github.com/kardianos/service) to create services. Supports Windows XP+, Linux/(systemd | Upstart | SysV), and OSX/Launchd. [[Documentation]](https://caddyserver.com/docs/hook.service)
