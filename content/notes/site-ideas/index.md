---
title: Site Ideas
tags:
- meta
lastmod: 2021-06-12T11:31:09.180770007Z
---

<p class="subtitle">A bunch of ideas for my website that might never get implemented.</p>

<div class="box blue">

Wanna know more about the website? Check out the [meta page](/meta)!

</div>

- Change the font-size to 17px (more?). be careful with different device sizes. Mobile keep 16. Test.

---

- **Notes** section
  - Merge small notes if possible.
  - Clean up titles.
  - Clean up (add!) tags.
  - Clean up content.
  - Back-links references.
- Finish [**uses**](/uses).
- https://cleanuptheweb.org/
- Create `/meta/historical` with pictures of old versions of my website.
- Move all images to CDN except SVGs?
- **Travelling** tracker
  - Map visualization with places I have been to.
  - [Stammy](https://paulstamatiou.com/) has really nice map animations.
  - Perhaps import my.flightradar24.com account with the flights I have done?
  - Use partially swarm?
- **Listens** section
  - Make more interesting graphs
- Improved **caching**
  - Add caching headers
  - Phase 1: update all search index on changed files & purge ALL CloudFlare cache.
  - Phase 2: update modified search index & purge SOME CloudFlare cache.
  - https://api.cloudflare.com/#zone-purge-all-files

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
