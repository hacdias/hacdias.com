---
title: Site Ideas
tags:
- meta
- ideas
date: 2021-02-10T19:09:57.974475866Z
lastmod: 2021-02-22T22:37:59.098601476Z
---

Next:

1. Rework darkroom:
    - Replace `.Params.social` by `.Params.cover` - it is a CDN image.
    - Remove `.Params.images`. Use figure for the pictures to allow more customization.
    - Rework current photos into small "collections" (Misc travels, Hometown Corona)
    - Merge `_index.md` with `archive.md`. Use styles from design branch as "card".
2. Clean up TAGS and TITLES in all sections:
    - micro
    - articles
    - notes
3. Cleanup TOC and make it work on mobile

Then:

- Reads
  - Indieweb meta tags?
  - Include reviews from goodreads that I did and stars?
  - Picture or list like
  - Do not depend on GoodReads? Each own a post?
- Finish [uses](/uses)
- Finish [meta](/meta)
- Move all images to CDN (except svg)
- Clean notes
- Remove tags?
- Gallery of Winter pics?
- Take pictures of old versions of my website
- Improvements: Reading progress?
- Revamp homepage
  - Put some pictures?
  - Larger?
  - More predominance to latest articles (maybe revamp listings)
  - More predominance to whats happening now

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
	- should i publish them under another page so I can easily reply through micro interactions? that could create too much trouble and content on my website. 
- **search**: consider search while typing
- move newsletter/thanks and goodbye to other places
- **pixelart**: add custom section or tag.
- Import _my.flightradar24.com_ and make a visualization map and table. Maybe ditch Flightradar24 completely.
- **goodreads** farewell
	- stop relying on GoodReads for my readings section
	- create interface that allows me to edit the reads / progress / info
	- add link for possible review
- Serve my website over Gemini
- Serve my website over TOR
- **articles**: move out of year/month folders
