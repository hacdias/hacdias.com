---
title: Updates on IndieWeb Go Libraries
date: 2023-11-10T15:18:39+01:00
lastmod: 2023-11-11T14:22:25+01:00
---

During the past week and a half, I have been slowly, but surely, doing some cleanup of my GitHub repositories. In the process, I finally decided to tick off some of the items from my list, such as using vanity Go import URLs, improving my IndieAuth library, as well as releasing a Micropub package.

<!--more-->

## Vanity URLs

From now on, all my Go packages will be available by default from [`go.hacdias.com`](https://go.hacdias.com) instead of using a GitHub URL. I think this improves the situation in two aspects: it is more versatile, as I can move repositories to a different system and not be locked into GitHub; and it is shorter, and shorter import URLs are more memorable.

A vanity URL service is quite simple. I could implement something myself, but I wanted to use something already existent. After quite some search, found different packages, but none did exactly what I wanted. Ended up deciding on sending a few pull requests to [`uber/sally`](https://go.uber.org/sally) and using their package with custom templates.

## IndieWeb Packages

My IndieAuth package has been changed to use the new import URL. Now my IndieWeb-related packages are under [**go.hacdias.com/indielib**](https://go.hacdias.com/indielib). In addition, I added a lot of tests, bumping the coverage to new heights. I've also added an example of how to implement IndieAuth as a client, and as a server. I hope that with coded examples, it will be clearer on how this package can be used.

Inside the package above, I also added a new Micropub helpers and tools, partially motivated by [@jlelse](https://fosstodon.org/@jle/111351505430671803). I have exported the code I used to have on my CMS, and made a package out of it. I added a bunch of tests, and wrote an example Micropub server. Even though I am not using Micropub at the moment, I still think it can be incredibly useful - and who says I will not use it forever.

*Note*: I have updated this article with the correct information as of today. Yesterday I was still a bit undecided between only having one package or two, but I have made the decision to keep Micropub and IndieAuth under IndieLib. Since it has been a short period of time since yesterday, this will likely not affect anyone.
