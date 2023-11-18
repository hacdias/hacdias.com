---
title: Back to the Web of the 90s
description: |
  Do you remember the old days of the web? Where everyone had their own website, made by hand, emanating personality. We should bring that back!
date: 2020-05-31T21:24:00Z
tags:
- meta
- web3
categories:
- articles
syndications:
- https://twitter.com/hacdias/status/1267207180698169345
---

Over the past months, I have been reading more and more posts where people are [saying][faith-web] they miss the vibe of the [90s web][small-web]. Even though I wasn't alive to see how that web was, I still remember the website of my high school filled with overly saturated colors, GIFs and iframes. Not only that characterizes some of the pages of the early web, but also the pixelation and the footers saying to use X or Y browser.

[small-web]: https://neustadt.fr/essays/the-small-web/
[faith-web]: https://macwright.org/2020/05/10/spa-fatigue.html

<!--more-->

<style>
@media screen and (min-width: 53.001rem) {
  body {
    background: #010d2a url(https://cdn.hacdias.com/media/2020-05-sea-pattern.jpeg);
    background-size: 300px;
    background-attachment: fixed;
  }

  #navbar {
    border-radius: 0;
  }
}

:root {
  --accent: #7261a1;
}

.netscape,
.iexplore {
  width: 100%;
  max-width: 10rem;
}

.netscape {
  margin-right: 1rem;
}

.bulb {
  max-width: 5rem !important;
}

.guestbook {
  max-width: 10rem !important;
  margin: 0 0 0 1rem !important;
}
</style>

<div style="display: flex; justify-content: center">

![](https://cdn.hacdias.com/media/2021-02-netscape.gif?class=pixelated+netscape)

![](https://cdn.hacdias.com/media/2021-02-iexplorer.gif?class=pixelated+iexplore)

</div>

We know those kinds of websites are a mirage nowadays, but some of them are still accessible via the [Internet Archive][archive]. There is one really interesting service called [Neocities][neocities], which I talked about in the [past][own-your-data], that aims to bring the glory of the Geocities to today's web.

It's amazing to see how those "retro" websites emanate personality: from the simplest GIF to the hyper customized text, from the guestbooks to the easter eggs. Those were mostly written by hand with no automatic generation. It's just a completely different feeling from what we have right now.

I barely remember when I first created this website, but I believe it was by hand, and it must've been fun. Shortly after, I moved to [Hugo][hugo], a static website generator, and I've never looked back. Although Hugo allows us to create websites with ease, we still have tons of customization power because it just does exactly what we want to.

On his [essay][small-web], Parimal talks about how today's websites are mainly built towards product selling or marketing. It's a really good post and I recommend you all to read it.

![](https://cdn.hacdias.com/media/2021-02-bulb.gif?class=left+pixelated+bulb) With all of thing being said, I have been tweaking my website. ["Again?"][meta], you ask. "Yes, again", I say. My website has changed a lot over the few years since it exists (5 years I believe), but mostly on the past months, probably due to my discovery of the [IndieWeb][indieweb] and the pandemic we're living right now. 

My idea for this website is to make it a hub of my online identity and that's what I've been building over the past months: from the [now] page to the [watches] page, everything tries to show a bit more of me and what I like.

To bring more of the 90s vibe to this website - I hope - I decided to add more emojis and GIFs everywhere. The emojis are actually just a comeback because I already used them immensely in the past. I'm actually using [Twemoji][twemoji] from Twitter to make the emojis look the same cross-platform. I'm self-hosting everything though so I don't need to rely on external CDNs. However, let me know what you think.

In addition to just adding emojis and GIFs, I decided to make my [home page](/) more personal instead of just a listing of my most recent posts. It now features a brief description of myself, a summary of what I am doing right now, links for featured posts, links to other pages - hence removing the "More" page - and, last but not the least, a link to my **[guestbook]**.

With this update, I'm hoping to make this website more alive. Even though the mobile version hasn't changed that much - mainly due to the device's screen size -, the desktop version is much richer and entertaining, hopefully. I'm trying to join the old with some modern, yet interesting, features such as [webmentions].

A more subtle change I made was to change the dates on this website to use the [Holocene Calendar](https://en.wikipedia.org/wiki/Holocene_calendar) which adds exactly 10 000 years to the current year, being the first year placed in the beginning of the Holocene era.

[![Writing on a guestbook](https://cdn.hacdias.com/media/2022-03-guestbook.gif?class=right+pixelated+guestbook)](/guestbook)

**Let's bring the web more personality, more presence, more uniqueness. Let's be the painters 🎨 of our own identity.**

**Feel free to check out my [guestbook] and leave a comment! You can just say "hi" if you want, I'll deeply appreciate it 😃 Do you have suggestions, leave a comment too!**

[archive]: https://web.archive.org/
[neocities]: https://neocities.org/
[own-your-data]: /2019/12/24/own-your-data
[hugo]: https://gohugo.io/
[meta]: /tags/meta/
[indieweb]: https://indieweb.org/
[now]: /now/
[watches]: /watches/
[twemoji]: https://github.com/twitter/twemoji
[guestbook]: /guestbook/
[webmentions]: https://indieweb.org/Webmention
