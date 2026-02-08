---
title: Farewell, Hugo! Hello, Eagle
date: 2021-11-19T08:02:07.764131763+01:00
categories:
  - writings
tags:
  - blog engine
  - meta
  - personal website
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3medsnjd6s42e
---

In 2015, I posted an [article](/2015/08/12/farewell-wordpress-hello-hugo) with a very similar name to this one. At the time, I was saying goodbye to WordPress and welcoming Hugo. As with everything in life, there are cycles and things change. It's time to turn a new page on this website's life cycle.

<!--more-->

Around a year ago, I [explained](/2020/10/12/rebuilding-eagle-cms) why I was rebuilding my website's CMS, Eagle. At the time, I decided against completely replacing [Hugo](http://gohugo.io/), the static website generator I've been using for years, because it worked. However, a year has passed and I've [thought](/tags/meta) many [times](/2021/02/04/is-it-time-build-cms) about replacing Hugo and I finally did it.

Since November 15th, I have been running the new version of Eagle. Hopefully, you didn't notice as nothing broke for you. If it did, please [let me know](/contact)! In this new system, completely powered by Eagle, there's no Hugo or static page building anymore.

## Building v2

Building Eagle v2 was a mixed experience: it was both faster and more challenging than I thought. I've been relying on some features of Hugo, such as shortcodes, for years. These allow me to define custom "functions" for markdown. Fortunately, I managed to replace them either by just copy pasting their HTML code - if they were used 1 or 2 times - or add a custom node to [Goldmark](https://github.com/yuin/goldmark), the markdown parser library I use.

With v2, I have feature parity with what I had with Hugo. I also added yearly, monthly and daily archives, as well as `410 Gone` for deleted posts. There's also XML feeds, besides the already existing JSON and ATOM feeds.

More importantly, I brought back Micropub support, which I removed around a year ago for no reason. I also implemented IndieAuth and now I don't need to use [IndieAuth.com](https://indieauth.com/) to login anymore.

If you look at my [more](/more) page, you'll notice that there's a lot of different content categories (or "sections") now. I brought back the ~~checkins~~ and [watches](/watches), which I had removed before because they were slowing down the Hugo build process.

Everything is stored as markdown files. However, there's a PostgreSQL instance running to index my posts and help me generate indexes and the [nice](/watches) [summaries](/readings) for some of the sections.

And [a lot more](https://github.com/hacdias/eagle/issues/34)!

## What's next?

I am far from done! Since Monday until today, I have implemented a few other features that I wanted, but the [list is always growing](https://github.com/hacdias/eagle/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc). I'm sure you'll see a new post lurking here and there about a new feature coming out.
