---
title: Site Ideas
tags:
- meta
lastmod: 2021-04-12T06:06:11.499334886Z
---

- Notes: clean up titles, tags and notes in general.
- Make TOC better (sidebar?) and make it work on mobile.
- Finish [uses](/uses)
- Take pictures of old versions of my website, publish: `/meta/historical`.
- Gallery of Winter pictures?
- Remove `.Params.social` and replace by `.Params.cover`.
- Add `.Params.cover` to Eagle.
- Move all images to CDN except SVGs?

## Posts

- Gallery of snowy pictures
- Fractals series:
    - https://en.wikipedia.org/wiki/Sierpi%C5%84ski_triangle
    - https://www.wired.com/story/how-to-make-a-tree-with-fractals/
    - https://en.wikipedia.org/wiki/Pythagoras_tree_(fractal)
    - https://en.wikipedia.org/wiki/Newton_fractal
    - https://en.wikipedia.org/wiki/Koch_snowflakel
    - https://www.cs.utoronto.ca/~noam/fractal.html

## CDN Structure

- `/u/` - random uploads and pictures that do NOT need resizing
- `/i/` - pictures that NEED resizing and compressing

## Features


[Eagle](https://github.com/hacdias/eagle) powers my website.

- On sync:
  - Add caching headers
  - Phase 1: update index on changed files && purge ALL cloudflare cache
  - Phase 2: update SOME index && purge SOME cloudflare cache
  - https://api.cloudflare.com/#zone-purge-all-files
- cli for local management
- **comments**
	- system to submit comments directly on my website
	- should i publish them under another page so I can easily reply through micro interactions? that could create too much trouble and content on my website.  NO.
	- simple POST in page.
- **search**: consider search while typing
- move newsletter/thanks and goodbye to other places
- **pixelart**: add custom section or tag.
- Import _my.flightradar24.com_ and make a visualization map and table. Maybe ditch Flightradar24 completely.
- **goodreads** farewell
	- stop relying on GoodReads for my readings section
	- create interface that allows me to edit the reads / progress / info
	- add link for possible review
	- indieweb meta tags?
	- include the few reviews I did as well as stars?
	- pictures for covers?
- Serve my website over Gemini
- Serve my website over TOR
- **articles**: move out of year/month folders
