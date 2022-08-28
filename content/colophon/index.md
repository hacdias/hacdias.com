---
title: Colophon
description: Why does this website exist? How does it work?
published: 2021-02-19T09:45:13Z
updated: 2022-08-28T15:36:07.072535106+02:00
noShowInteractions: true
noSendInteractions: true
properties:
  noDate: true
---

<!--meta-->

<div class="box">

✨ Once in a while, I publish updates under the tag [meta](/tags/meta/).

</div>

I started this website in 2014, when I was 14. At the time, all the content was in Portuguese, and I was running multiple blogs. After some time, I decided to start writing in English in hopes to improve my English skills, which I can argue that worked. Nowadays, all other blogs I had are merged under the current domain.

This website has seen quite a few redesigns. I [wrote](/2022/03/25/my-website-before-indieweb) about all the main designs I had before this website was part of the IndieWeb community, and [after](/2022/06/18/my-website-after-indieweb). I am still not 100% settled on the current design. However, major changes are slowing down, which means I might be coming to a good point where I am mostly satisfied.

## 💡 Why Does This Website Exist? {#why}

I cannot recall the reason why I created this website in first place. Perhaps, I wanted to have some kind of presence online that was not just the social media. Besides, I knew no one that had a website back then and I'm almost sure I did not tell any of my friends about it either. The main reasons, as of now, to maintain this website, are as follows:

- **Expression**: I think a personal website is a good way for all of us to express ourselves, by customizing it the way we want, working the way we want it to. It's a call for more people to do the same and bring [uniqueness](/articles/2020/05/back-90s/) to the Internet again.

- **Sharing**: I try to share some of my knowledge on this website, and also life updates. It's a good way to document both the things that I do, that I am and that I want to remember in the future. By writing, I also learn.

- **Photography:** I love photography and taking pictures with my [camera](/uses/#photography). I am definitely not the best photographer, but I enjoy learning and taking better photos with time.

- **Less social media**: I am trying to use less and less of the social media networks that we all know. The web we know is not the web we should want. We should want something more personal and customizable and interoperable.

## ⚙️ How Does This Website Work? {#how}

Over time, this website has suffered significant changes on how it works. For most of the time, this website used to be a completely static website, relying on [Hugo](https://gohugo.io/). I still recommend Hugo for most people that want to have a simple static website as it is extremely fast and customizable. However, for me, Hugo was no longer enough and the website is now powered by **[Eagle](https://github.com/hacdias/eagle)**, my own custom back-end built in Go.

Regarding storage and hosting, this website is hosted in a VPS I rent with [Hetzner](https://www.hetzner.com/) and it goes through [Cloudflare](https://www.cloudflare.com/) for caching. I also use [**Bunny**](https://bunny.net/) for most of my media content, as they provide very fast CDN storage for good prices.

It is hard to keep up with all the changes that may happen on this website. Therefore, if you want to learn more and see my thought process and changes that have happened over the time, please check the tag [meta](/tags/meta).

## 🍇 The Features {#features}

Nowadays, this website provides more features than ever before. Even though it is technically static, it is updated quite frequently with data from multiple services I use to track movies, TV shows, songs I listen to, books I read, etc.

### 💽 The Data {#data}

As I said before, my website feds from data from some other services I use to keep track of certain things. Now you may ask me "but wasn't the point to own your own data? why are you using external services?". Well, my reply to that is that those external services work very well and are very convenient.

- 📺 [**Trakt**](https://trakt.tv) feeds into my [watches](/watches) page, which contains the series and movies I watched. Currently, I don't keep track of each episode on my website and I keep it simple by stating the last time I watched each series or movie. The updates come through [OwnMyTrakt](https://github.com/hacdias/ownyourtrakt).

- 🐝  [**Swarm**](https://www.swarmapp.com/) feeds into my [checkins](/checkins) page, which contains the checkins of places I've been to. These updates are generated via [OwnYourSwarm](https://ownyourswarm.p3k.io/).  

- 🎧 [**Last.fm**](https://www.last.fm/home) is for music and it is synchronized to my Spotify account. However, in contrary to what happens with Spotify, the stats from Last.fm seem to be much more accurate. I feed its data into my [listens](/listens) page which has the current top artists and tracks I've been listening to. It's probably the "worse" looking page from the bunch.

- 🙍 [**Miniflux**](https://miniflux.app/) is a simple RSS reader that I self-host. It has a really neat API and I use to track down my blogroll, which can be found in the [blogroll](/links#blogroll) page. I believe it is important to let others know we follow them and to share that with the blogosphere.

### 🕸 IndieWeb {#indieweb}

This website supports many features endorsed by the [IndieWeb](https://indieweb.org/) community, such as Webmentions, Microformats and IndieAuth.

[Webmention](https://indieweb.org/Webmention) is a simple web standard that allows for interactions and conversations across the Internet, without the need for a centralized service. They can be in the form of a comment, a like or a repost and they're a key component of the IndieWeb. To handle Webmentions, my website uses:

- [**Webmention.io**](https://webmention.io/) for receiving webmentions. This service already parses the webmention and streamlines the format that "arrives" at my server.
- [**Bridgy**](https://brid.gy/) for creating webmention for Twitter likes, replies and reposts.

<!-- - [**Telegraf**](https://telegraph.p3k.io/) for sending webmentions without having to deal with all the issues that any decentralized system might have when one machine goes offline for a bit. -->

In addition, my website also complies with the [Microformats](https://microformats.org/) standard which defines a set of HTML classes for easy parsing. They can be used by feed readers, for example, instead of RSS and JSON.

Finally, my website also supports [IndieAuth](https://indieauth.spec.indieweb.org/) authentication. IndieAuth is an extension of OAuth 2.0 that allows users to login using their own domains. I can use my website to login into other's websites and other people can log in into my website using their websites.

## ⚖️ Disclaimers {#disclaimer}

- **Opinions** change over time. If you're reading something that is many years old, or even just a few months or weeks old, it may not reflect my current opinion. The same applies for technical articles or any other knowledge that may be outdated. If you're unsure about something I wrote, please [contact me](/contact/) for clarification instead of jumping into conclusions.

- **No guest posts**. I have been receiving more and more e-mails regarding guest posts. This is my personal website and I will not publish third party guest posts.

- This website sets **cookies** after authentication via IndieAuth. The cookie is used to know whether you are logged in or not. The cookie only contains the ID provided by your IndieAuth endpoint.

<div class='terms bold'>

- [🧁 About](/about)
- [📖 Guestbook](/guestbook)

</div>
