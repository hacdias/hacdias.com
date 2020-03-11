---
date: '2020-03-11T09:15:23.334Z'
math: true
publishDate: '2020-02-22T10:18:48.473Z'
title: Website Ideas
---

- Backup my email.
- Serve my blog over `dat://`
- Add schema.org
- Automatic blogroll from Aperture
- Import my.flightradar24.com and create some visualisation tool.
- https://synesthesia.me/see-your-name
- Simplify bookmarks page to list all of them in a list form.
- Should I add date [above the posts](https://jlelse.blog/thoughts/2019/11/dates-above/)? My main problem with this is information scattering. I didn't want to have the tags separated from the date and category. On the other hand, it may be useful to have the category and date in the beginning.

## URLs and Dates

- Maybe change the URL format I'm using for most stuff to include a slug and remove the `id`. I think most of the URLs are too big for no reason.
  - `/articles/2020/01/article-slug` ; or
  - `/a/2020/01/article-slug`
  - Remove the day and add a slug most of the times. If no slug, just a number or random slug.
- Opinions change kind of box with 1year+ posts.

## Media Endpoint

- Fix photos to CDN.
- Move all pictures to CDN.
- Media entry point
	- Resize automatically through params.

## Knowledge Base

Right now, I render all the Mermaid diagrams and $\LaTeX$ on the fly on the client side. It would be interesting if I rendered those first on the client side. It would certainly be better in terms of performance. The only downsite would be that the import script could take a little longer, which isn't a really big downside from my POV.

### Things to import

- Calculus I cheatsheet
- Calculus II cheatsheet
- Complex Analysis cheatsheet / notes
- Differential Equations cheatsheet / notes
- Programming Fundamentals notes
- Logic for Programming notes
- Discreet Mathematics notes
- Computer Architecture cheatsheet
- Analysis and Synthesis of Algorithms notes
- Electromagnetism and Waves notes

## Recipes Section

- `h-recipe`
- [Classic Chocolate Chip Cookies Recipe | Yummly](https://www.yummly.com/recipe/Classic-Chocolate-Chip-Cookies-2455312?prm-v1)

## Import Photos from Instagram

- Add `Photos` page with the latest _X_ pictures.
  - Consider pagination.
- Then, add an archive page that should be Instagram-like with miniatures.
- While doing this, cleanup my Instagram page and link the profile to my pictures page.
- Write post about it and tell the world!

## Search

- Good front-end UI backed by an API
- With a good search, I won’t need `Bookmarks page mais simples para permitir fácil pesquisa`
- https://github.com/meilisearch/meilisearch
- https://opensourceconnections.com/blog/2016/06/01/thoughts-on-algolia/
- http://sphinxsearch.com/
- https://lucene.apache.org/solr/