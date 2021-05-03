---
title: Site Ideas
tags:
- meta
lastmod: 2021-05-03T08:05:39.238014146Z
---

<p class="subtitle">A bunch of ideas for my website that might never get implemented.</p>

<div class="box blue">

Wanna know more about the website? Check out the [meta page](/meta)!

</div>

- Finish [**uses**](/uses).
- https://cleanuptheweb.org/
- Create `/meta/historical` with pictures of old versions of my website.
- Remove `.Params.social` and replace by `.Params.cover`.
- Add `.Params.cover` to Eagle.
- Move all images to CDN except SVGs?
- **Travelling** tracker
  - Map visualization with places I have been to.
  - [Stammy](https://paulstamatiou.com/) has really nice map animations.
  - Perhaps import my.flightradar24.com account with the flights I have done?
  - Use partially swarm?
- **Notes** section
  - Clean up titles.
  - Clean up tags.
  - Clean up content.
  - Back-links references.
- **Articles**
  - Move out of year/month folder structure.
- **Protocol support**
  - TOR
  - Gemini [post](https://brainbaking.com/post/2021/04/using-hugo-to-launch-a-gemini-capsule/)
- **Reading** section
  - Delete GoodReads account.
  - Create backend interface to edit reads / progress / info.
  - Allow for review and stars.
  - IndieWeb meta tags.
  - Pictures for covers?
- **Listens** section
  - Make more interesting graphs
- Improved **caching**
  - Add caching headers
  - Phase 1: update all search index on changed files & purge ALL CloudFlare cache.
  - Phase 2: update modified search index & purge SOME CloudFlare cache.
  - https://api.cloudflare.com/#zone-purge-all-files

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
