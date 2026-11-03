---
title: Archive Web Pages You Care About
date: 2026-11-09T14:00:00+01:00
categories:
  - writings
tags:
  - archival
  - web
  - self-hosting
  - tools
---

While cleaning up my resumé for my [current job search](/2026/10/31/recently/), I noticed one single link was no longer working. The offender was a blog I wrote almost 400 posts for, a few years back. This blog, Pplware Kids, was a branch of [Pplware](/2017/07/12/how-did-i-start-working-remotely-at-a-startup/), a Portuguese tech blog. There, I wrote many explainer posts, tutorials, and tech news. Now, it is gone.

<!--more-->

If you try accessing the blog, it just redirects to the main blog. Since they were redirecting the URL paths, I thought they had imported the blog posts into the main website. It'd make sense: this branch blog hadn't been maintained for a few years, and there was no real reason importing them and keeping the redirect wouldn't work out.

But no. Accessing an old post's link redirects and gives me a beautiful 404. This made me a bit sad, not because the posts were that interesting, or an extreme source of pride, but it's still something I did, something I did not archive and have no copy of.

Fortunately, crawling the Web Archive has allowed me to find most of the content. The blog was online for years, so the chances that it got archived were high. So that is nice. I might import some more relevant posts into this website, making it clear that they were originally posted on that blog though.

With all of that being said, this made me think of the archival of web pages. The Internet is plagued by link rot -- and brainrot too, but that's something entirely different -- and there are a lot of folks actively working on archiving the web, like the Internet Archive. However, I'd also argue that we, as users, should [do something too](/2019/07/05/mirrorring-xkcd-ipfs/).

I've been using [Linkding](/2026/02/09/bookmarking-the-web/) for managing my bookmarks for quite a while. It integrates automatically with SingleFile, which stores a web page in a single HTML file without requiring any external resources. It's neat, but sometimes I'd like more depth: a whole website, not just a page.

For this, I have used [Webrecorder](https://webrecorder.net/) before. The idea is that it nicely packages all of the site's resources in a WACZ file and, using a viewer, you can just navigate it as if it was a regular website. While I've used it before, it was mostly for trying it out and the browser extension was just sitting there for -- maybe -- years without being touched.

I want to change that, and actively archive more websites fully. Just little things that I'd like to refer to in the future, or a quirky website that [looked fun](/2025/07/21/internet-nooks/). My wish would be that Linkding would integrate with Webrecorder. Not sure how involved that would be, and someone already [opened an issue](https://github.com/sissbruecker/linkding/issues/1409) to add support for WACZ (and WARC) files.

Another option is to self-host something like [Browsertrix](https://github.com/webrecorder/browsertrix), but it looks quite heavy and, looking at their pricing, it probably is. And I don't need to host the crawling per se: I can do it locally.

I just want a remote viewer/storage where I can dump the files, add tags and a title, and leave them be until I want to look at them. Maybe there's a way to self-host Browsertrix just for collection and storage purposes? Maybe. This is something that I need to investigate.

The bottom line is: if you care about it, archive it.
