---
date: 2021-11-02T21:14:51.186521553Z
tags:
- meta
categories:
- notes
---

I have an exam next week, but I've also been working a bit on Eagle v2. I think I underestimated the amount of work I will have. I have many shortcodes in Hugo and I'm also relying on some custom Goldmark extensions that are being used by Hugo.

On the format, I've decided to do something very similar to [p3k](https://indieweb.org/p3k) and organize the files by year, month and day. Don't worry, I will set up all the redirects afterwards. And this time they're actually redirects and not Hugo-generated-redirect-HTML-files.

I must say that using a statically typed language is not the most seamless for this, but it works! I see why - maybe - so many people on the IndieWeb community have used PHP. 

I'm also blocked on how to index: so far I've been using [MeiliSearch](https://www.meilisearch.com/) which works perfectly. It would still work perfectly. However, in the future I would like to have my own IndieAuth implementation and that would require to store tokens so it'd be a great time to move to an SQL database. Decisions... decisions... decisions...
