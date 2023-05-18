---
date: 2021-11-05T19:24:31.828769598Z
tags:
- meta
categories:
- notes
---

In the series of "the new version of my CMS": trying to decide how to save context (reply, like, repost context) and webmentions. One option, which is the one I'm using right now with Hugo, is to have a sidecar file that contains those informations. In the new non-static system, that will mean every time I need to render a post, I need to read two files at least.

The other option would be to have an "xray" folder organized in a fashion like `domain.com/hashoftheurl.json` and then still use the sidecar file (or even the post frontmatter) to link all the webmentions and context data. That'd require more I/O operations though.

I think I'm going with the sidecar for now. How are you storing your webmentions?
