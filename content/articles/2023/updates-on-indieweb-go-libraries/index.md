---
title: Updates on IndieWeb Go Libraries
date: 2023-11-10T15:18:39+01:00
lastmod: 2023-11-10T22:16:11+01:00
---

During the past week and a half, I have been slowly, but surely, doing some cleanup of my GitHub repositories. In the process, I finally decided to tick off some of the items from my list, such as using vanity Go import URLs, improving my IndieAuth library, as well as releasing a Micropub package.

<!--more-->

## Vanity URLs

From now on, all my Go packages will be available by default from [`go.hacdias.com`](https://go.hacdias.com) instead of using a GitHub URL. I think this improves the situation in two aspects: it is more versatile, as I can move repositories to a different system and not be locked into GitHub; and it is shorter, and shorter import URLs are more memorable.

A vanity URL service is quite simple. I could implement something myself, but I wanted to use something already existent. After quite some search, found different packages, but none did exactly what I wanted. Ended up deciding on sending a few pull requests to [`uber/sally`](https://go.uber.org/sally) and using their package with custom templates.

## IndieWeb Packages

[**go.hacdias.com/indieauth**](https://go.hacdias.com/indieauth) has been changed to use the new import URL. In addition, I added a lot of tests, bumping the coverage to new heights. I've also added an example of how to implement IndieAuth as a client, and as a server. I hope that with coded examples, it will be clearer on how this package can be used.

[**go.hacdias.com/indiekit**](https://go.hacdias.com/indiekit) is a new package that does not yet have its first release. It was partially motivated by [@jlelse](https://fosstodon.org/@jle/111351505430671803). I have exported the code I used to have on my CMS, and made a package out of it. I added a bunch of tests, but I'm still in need of adding an example. After, I will make the first release. Even though I am not using Micropub at the moment, I still think it can be incredibly useful - and who says I will not use it forever.

~~I also considered merging both into a single one `libindie` or just `indieweb`, which would include both IndieAuth and Micropub related packages. That could end up being easier for maintenance in the long term, and also for writing the examples. If I were to do that, I would do a graceful upgrade from current packages to the new. What do you think?~~

I have decided to do it. It is logistically much easier. Over the weekend, I will complete the Micropub example in the IndieKit and will gracefully deprecate the IndieAuth package in favour of the IndieKit.
