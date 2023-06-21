---
description: Replied to a post on jlelse.blog
date: 2020-01-22T09:20:22.592Z
expiryDate: 2023-06-21T08:03:10.07264+02:00
noIndex: true
tags:
- security
- webmentions
categories:
- notes
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/thoughts/2020/01/security-risk-embedding
  content: 'On a lot of IndieWeb sites, I noticed that profile images of webmentions
    get directly embedded from their original source. For example, Twitter profile
    images are loaded directly from Twitter servers (pbs.twimg.com) or even my profile
    image is directly embedded from my site. However you should consider enabling
    Content Security Policy (CSP) headers and only allow embedded content from trusted
    sites (your own domains). It could always happen that a site gets hacked and malware
    injected or a domain expires and some spammers register it again, that will also
    affect your website’s visitors. You won’t even notice it. To solve this, you basically
    have two options: don’t display them at all, or download those images and serve
    the downloaded copy. And don’t forget to enable CSP headers on your site! Update:
    Sebastiaan Andeweg wrote a reply and linked his article, about how he hacked his
    own website! If you use PHP for your IndieWeb site, make sure to read it!'
  published: 2020-01-22T08:43:15+01:00
reply: https://jlelse.blog/thoughts/2020/01/security-risk-embedding/
---

This is actually the next thing I want to "fix". Other problem of twitter is that, if the user changes the profile picture, the previous one gets unavailable. For webmentions, I'm using the images provided by webmention.io, but for replies, likes and reposts context, I'm using the original source and I don't like it.

I already ponderated to remove the images at all from the contexts, but I don't think it would look as friendly as it does now. What do you think?
