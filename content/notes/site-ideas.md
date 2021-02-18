---
title: Site Ideas
tags:
- meta
- ideas
date: 2021-02-10T19:09:57.974475866Z
lastmod: 2021-02-18T22:19:39.482310687Z
---

- Update /uses
- ~~Merge /blogroll with /links~~ experiment done.
- Improve /links content and visual (blue bg? ocean? pixelart?)
- ~~Change /music to /listens (MAKE ALIAS)~~
- ~~Change /books to /reads (MAKE ALIAS)~~
- Clean up old articles somehow? New ones?
- consider full width code again
- Merge contact w/ /follow?
- Maybe create about this website (/meta) where I have info about how the website is built

## Posts

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

### Not very important

- flatten content directory. Yes or no? Files in bundles or asssets/static?
- consider using .html instead of / with .html stripped in the end URL
