---
title: Long Live XSLT 1.0
date: 2026-10-31T10:36:02+01:00
categories:
  - writings
tags:
  - meta
  - rss
  - standards
---

<abbr title="Extensible Stylesheet Language Transformations">XSLT</abbr> is being [deprecated](https://developer.chrome.com/docs/web-platform/deprecating-xslt) from the browser platform, and is planned to be fully removed in the coming year. I had already seen some posts [come by](https://janlukas.blog/micro/2026/10/2026-10-19-ydlop) that mentioned that they were replacing XSLT with something else, but I completely missed the gist. [RIP XSLT](https://xslt.rip/).

<!--more-->

Two years and a few days ago, I [introduced](/2024/10/23/styled-rss-feeds/) styled RSS feeds and XML sitemaps on this website. To do so, I relied on this almost obscure Internet technology that a lot of people don't know about: XSLT. XSLT was originally introduced in [1999](https://www.w3.org/TR/1999/REC-xslt-19991116), and version 1.0 has been part of the web platform since then.

![Styled RSS Feed Using XSLT](image:2026-10-31-xslt)
{width="2180" height="1982"}

Later versions exist, such as [2.0](https://www.w3.org/TR/xslt20/) and [3.0](https://www.w3.org/TR/xslt-30/), and [4.0](https://qt4cg.org/specifications/xslt-40/) is now in the works, but these never ended up coming to browsers and remained backend languages. After many years, many attempts, and arguably low usage, XSLT 1.0 is being discontinued by the three major browser vendors.

What does that mean for my styled feeds? I considered using JavaScript to render them, or using a [polyfill](https://github.com/mfreed7/xslt_polyfill), but I decided that the hassle was larger than what I'd get from it. At the end of the day, it was a nice quirk to have on this website, but the documents that I styled were always intended for machine consumption.

Lots of people I follow used XSLT to render their [blogroll](/blogroll/) OPML file, but I've always rendered that one as HTML. That would, arguably, be where using XSLT would've had the best advantages. However, I always decided not to do it because Firefox stores the transformed HTML instead of the XML if you try to *Save As* that page.

So yeah, I'm removing XSLT from this website. It is sad to see it go, but I also understand that the multitude of [security vulnerabilities](https://www.openwall.com/lists/oss-security/2025/06/16/6) that have come out of it over the past couple of years, for a technology that is barely used, makes it hard to argue for. And also: libxslt, the library used by Chrome and Safari, was [left without a maintainer](https://gitlab.gnome.org/GNOME/libxslt/-/issues/150) for a while last year.

Long live XSLT!
