---
aliases:
  - /2020/01/19/3/
date: 2020-01-19T19:28:27.380Z
properties:
  location: 'geo:38.74488,-9.13456;u=5088'
tags:
  - webmentions
  - meta
---

Oopsie doopsie. Just found a bug on my webmention endpoint where I was not writing the webmentions to the correct endpoint. Right now, I'm storing them as plain webmentions from webmention.io. Probably I should think about a simpler way to store them to parse them easily later on the theme.

Right now I have an index that tells, for each permalink on my blog, which likes and "others" it has. I show the likes as mere "heads" on the post and then the "others" that might be reposts or retweets. The truth is that any of those can contain content.

What do I need to store? That's the important question.