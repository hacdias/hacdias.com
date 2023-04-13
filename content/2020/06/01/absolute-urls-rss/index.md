---
description: Replied to a post on jlelse.blog
date: 2020-06-01T18:44:39.02Z
noIndex: true
tags:
- meta
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/micro/2020/06/relative-links-hugo-rss
  content: That’ll be hard to do with Hugo. There’s no way to tell it to use absolute
    URLs in the feeds only. I’ll need to set up an extra step of some kind. I’ll check
    it out. I use a partial in my Hugo theme to replace relative links with absolute
    links in the content in XML (RSS) and JSON (JSON Feed, ActivityStream) files.
    It has a regular expression to find and replace all relative links with their
    abolute version. It’s probably easy to modify to replace relative image sources
    too.
  published: 2020-06-01T20:11:18+02:00
reply: https://jlelse.blog/micro/2020/06/relative-links-hugo-rss/
---

Wow! Thanks Jan. I'm still trying to understand why replacing links that start with `/` work because my feed was printing relative URLs with `..`. It seems to work though. I'm happy 🤯

There are some `srcset`s from some older articles that have relative URLs but let's hope no one will take a look at those old posts. Maybe I'll try to figure out a way to parse those attributes. Would be a bit more complicated though.
