---
title: New Website, Who Dis?
date: 2026-02-21T09:07:15+01:00
location:
  latitude: 51.44592
  longitude: 5.46165
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
tags:
  - meta
  - personal website
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mfe65da6q2cr
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mfe65da6q2cr
thumbnail: image:2026-02-21-new-website-home
---

If you're reading this on my website right now, you might be thinking: what the hell did Henrique do? After a few years of calmness and small changes here and there, I've decided to fully redesign this website. And by fully, I mean rewrite around half of the CSS. Much of the old CSS is still floating around. Welcome to my refurbished Internet island!

<!--more-->

Before diving into the new design, I want to look back at the previous design. It started, in its original form, back in 2021. Those were Covid times, times where I had the time to redesign the website [every full moon](/2022/06/18/my-website-after-indieweb/).

Over the years, the design became more and more consistent, and ended up converging to what I was. I really enjoyed it, I think it felt like "me" and there was no other website that looked similar, as far as I know. I'm quite happy that it lasted as much as it did. Looking at [photos from 2023](/2023/07/31/recently/), the site barely changed. A few tweaks here and there, but it was a design I was really happy with.

To commemorate, let's look at some screenshots.

![](image:2026-02-21-website-home "Previous Design Homepage")
{width="2861" height="2160"}

<div class='fg'>

![](image:2026-02-21-website-writings "Previous Design Writings Page")
{width="2861" height="2160"}

![](image:2026-02-21-website-photos "Previous Design Photos Page")
{width="2861" height="2160"}

![](image:2026-02-21-website-archive "Previous Design Writings Archive Page")
{width="2861" height="2160"}

![](image:2026-02-21-website-gallery "Previous Design Photo Gallery Page")
{width="2861" height="2160"}

</div>

![](image:2026-02-21-website-guestbook "Previous Design Guestbook")
{width="2861" height="2160"}

For some time, I've been wanting to change some things on this website, but I was afraid of losing what makes this website "me". This maybe stems from this website having looked the same for such a long time, that it created some sort of irrational fear of change. Inertia. It's always there. With the new design, there were a few things I wanted to achieve. Let's go through a few of them, one by one.

**Take advantage of wide screens.** Screen widths have changed dramatically over the years, the pixels keep coming, and our websites keep staying centered in the middle, floating in an ocean of empty space. After seeing [Dietrich's](https://metafluff.com/) website, I thought: this is a cool usage of wide space.

With this in mind, I built my new homepage based on the old one, letting the photo grid sit next to the latest posts. If the screen size becomes small enough, they'll just fall back down to the same column. There are other pages taking advantage of wide screens, like the [guestbook](/guestbook/), [gallery](/photos/archive/), etc.

![](image:2026-02-21-new-website-home "New Wide Homepage")
{width="3005" height="2160"}

**Left-aligned with sidebar.** For some reason, I've been wanting to have a sidebar on this website for quite some time. I have absolutely no idea why. However, every time I tried moving the navigation bar to the sidebar, I didn't really like it.

But then it hit me: what if both exist? A grid layout like [Luke's](https://www.lkhrs.com/), but using the sidebar for the contact information. The contact page was becoming shorter and shorter and I also wanted to get rid of it. Two birds with one stone.

This sidebar also adapts elegantly - I hope. On mobile, the contact links will float down to the bottom of the page, right above the footer, except for in the homepage, where they'll sit on top, below the navigation bar. The navigation bar scrolls horizontally on mobile. I do hope it's clear. I'm sure I'll make more tweaks with time.

**Balancing personality, modernness and cleanliness.** Not even sure what that means, but I wanted the website to look a bit more modern, clean, and still exude the same feelings as before. That I can't judge, I think someone else needs to do it for me. I tried to keep as many elements as possible. After all, it's mostly a readjustment of positions. Font-types, colors, emojis, those things were kept. Pages that had custom backgrounds still got to keep them.

I mostly tried to make the design more coherent. An example are the post cards you see on the [writings](/writings/) and [photos](/photos/) pages. Before, the photo cards would show all the photos, which led to very long pages, especially when some of those photo posts included 10 or so images. Now the cards are unified, using a single design. You can click on it, and then see the full grid for that post, as I intended.

<div class='fg'>

![](image:2026-02-21-new-website-writings "Updated Writings Page")
{width="3005" height="2160"}

![](image:2026-02-21-new-website-photos "Updated Photos Page")
{width="3005" height="2160"}

![](image:2026-02-21-new-website-guestbook "Updated Guestbook Page")
{width="3005" height="2160"}

![](image:2026-02-21-new-website-snowflakes "Updated Fractal Snowflakes Article With Background")
{width="3005" height="2160"}

</div>

---

There are, of course, a few things I'm less happy about. There are a few more lines CSS, not that many more, but still. I want to look back at it and try cleaning it up sometime. I'm also a bit sad the little avatar that sat on top of the navigation bar is gone, but I couldn't find a good place for it.

And on the homepage, depending on how wide your screen is, either one of the two columns will be longer than the other. For smaller devices, when it's a single column, I limit the amount of items, but sadly it's not yet possible to target specific grid rows. If that were possible, maybe, just maybe, I would be able to achieve exactly what I want without JS.

Once CSS `grid-lanes` are widely available, I will also be applying those to some pages. If you use Safari Technology Preview, you can go to the [guestbook](/guestbook/) and see what I mean. Other pages could benefit from that, like the photo [gallery](/photos/archive/).

Well, I'm happy with the design, and I hope it will serve me for quite some time. What do you think? Leave a note on my [guestbook](/guestbook/), or reply via one of the links below! 👋
