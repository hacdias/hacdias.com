---
title: Colophon
description: Why does this website exist? How does it work?
published: 2021-02-19T09:45:13Z
updated: 2022-03-15T21:00:01.21373536+01:00
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

Everyone that creates content does so for some reason and I am no exception, of course. I honestly don't remember the reason why I created the website in the first place, but I can tell you the reasons that lead me to keep it nowadays.

- **Personality:** I want this website to show who I am, what I am doing and what I like. Nowadays, most websites are very plain and look the same. This is my corner, and I'm trying to make it pleasant and, at the same time, [unique](/articles/2020/05/back-90s/).

- **Knowledge:** doubtfully the reason why I started this website. However, one of the main goals for me is to share my opinions and possibly help anyone along the way. By writing, I also learn. It is a method of consolidating existing knowledge.

- **Photography:** I love photography and taking pictures with my [camera](/uses/#photography). I am not a big fan of social media apps such as Instagram because I can't chose to have a layout as I wish. I might get less "views" here, but what matters is the content and that it can be presented and customized how I want.

- **Less social media:** almost everyone uses social media. Despite being useful, they are also locked silos where you store your data. The data you create. The data you should own. Using my website as the medium to share whatever I want to share in first hand allows me to own my data a little bit more.

## ⚙️ How Does This Website Work? {#how}

Over the time, this website has suffered imense changes. Sometimes I think how crazy it feels to have a website for over 6 years already and I'm just 21. I guess that is one of the perks of being born in this age. I wonder what the future generations will have.

### Eagle

This website used to be completely static. However, since the 15th of November 2021, I am no longer using [Hugo](https://gohugo.io/). It is now completely powered by **[Eagle](https://github.com/hacdias/eagle)**, my own custom CMS built in Go.

### Storage

Regarding storage, this website is directly served from a **VPS** I rent with [Hetzner](https://www.hetzner.com/) and it goes through [Cloudflare](https://www.cloudflare.com/) for caching. That is the main entry point of this website.

Not everything is stored in my VPS though. All my media content (photos, videos, etc) is served from a subdomain `cdn.hacdias.com` which is linked to a [**Bunny**](https://bunny.net/) edge storage box. Bunny is yet another CDN, just like Cloudflare. However, they also provide the possibility of having a storage box where you can directly store files that are then served by their CDN.

## 🍇 The Features {#features}

Nowadays, this website provides more features than ever before. Even though it is technically static, it is updated quite frequently with data from multiple services I use to track movies, TV shows, songs I listen to, books I read, etc.

### The Data

As I said before, my website feds from data from some other services I use to keep track of certain things. Now you may ask me "but wasn't the point to own your own data? why are you using external services?". Well, my reply to that is that those external services work very well and are very convenient.

- 📺 [**Trakt**](https://trakt.tv) feeds into my [watches](/watches/) page, which contains the series and movies I watched. Currently, I don't keep track of each episode on my website and I keep it simple by stating the last time I watched each series or movie. The updates come through [OwnMyTrakt](https://github.com/hacdias/ownyourtrakt).

- 🐝  [**Swarm**](https://www.swarmapp.com/) feeds into my [checkins](/checkins/) page, which contains the checkins of places I've been to. These updates are generated via [OwnYourSwarm](https://ownyourswarm.p3k.io/).  

- 🎧 [**Last.fm**](https://www.last.fm/home) is for music and it is synchronized to my Spotify account. However, in contrary to what happens with Spotify, the stats from Last.fm seem to be much more accurate. I feed its data into my [listens](/listens/) page which has the current top artists and tracks I've been listening to. It's probably the "worse" looking page from the bunch. It is updated daily via some [scripts](https://github.com/hacdias/silos-collector) I wrote.

- 🙍 [**Miniflux**](https://miniflux.app/) is a simple RSS reader that I self-host. It has a really neat API and I use to track down my blogroll, which can be found in the [blogroll](/blogroll) page. I believe it is important to let others know we follow them and to share that with the blogosphere.

### IndieWeb

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

- [🕵️‍♀️ About](/about)
- [✍️ Guestbook](/guestbook)

</div>

