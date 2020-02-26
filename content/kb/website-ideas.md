---
date: '2020-02-26T17:44:02.079Z'
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

## Media Endpoint

- Fix photos to CDN. Keep using CDN or just assets/ or images/?
- Media entry point
	- Resize automatically through params.
- Stop using BunnyCDN and just use images/assets?
- Webmentions photos on website itself?

## Knowledge Base

Using Notable right now, which supports both Mermaid and $\LaTeX$. However, what I want is to have a public knowledge base where I can post everything I enjoy. Idea is: if I end up enjoying Notable as much as I hope, I can create a script (maybe using Pandoc) that converts this Markdown and generates the Math and Diagrams beforehand so it doesn't put a heavy JavaScript load under my website.

Missing support for:

- Latex math: $\LaTeX$ - **it works now**!
- Mermaid diagrams

### Things to import

## ActivityPub

- https://www.w3.org/TR/activitypub/#undo-activity-inbox
- https://blog.joinmastodon.org/2018/06/how-to-implement-a-basic-activitypub-server/
- [jlelse/hugo-activitystreams: ActivityStreams for Hugo -  hugo-activitystreams - Codeberg.org](https://codeberg.org/jlelse/hugo-activitystreams)

## Recipes Section

- `h-recipe`
- [Classic Chocolate Chip Cookies Recipe | Yummly](https://www.yummly.com/recipe/Classic-Chocolate-Chip-Cookies-2455312?prm-v1)

## Import Photos from Instagram

- What to consider on `Photos` page? Every post with photos? Or the best photos only?
- While doing this, cleanup my Instagram page and remove old pictures I don’t want there anymore.
- Write post about it and tell the world!

## Search

- Good front-end UI backed by an API
- With a good search, I won’t need `Bookmarks page mais simples para permitir fácil pesquisa`
- https://github.com/meilisearch/meilisearch
- https://opensourceconnections.com/blog/2016/06/01/thoughts-on-algolia/
- http://sphinxsearch.com/
- https://lucene.apache.org/solr/