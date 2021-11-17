---
title: About This Website
published: 2021-02-19T09:45:13Z
updated: 2021-11-17T18:40:12.895878618Z
noShowInteractions: true
noSendInteractions: true
---

<!--meta-->

<div class="subtitle">

I have been running this website since 2014. Since then, a lot has changed. My repository shows over 5000 commits and that's just the changes after I migrated to a static website.

</div>

<div class="box blue">

Once in a while, I publish updates under the tag [meta](/tags/meta/).

</div>

This website was started in 2014, when I was 14. The [first post](/articles/2014/07/apresentacao/) was still in Portuguese and that's where I said my "Hello, World" in a Portuguese fashion. For quite some time, I had different blogs and then I ended up [merging everything](/articles/2015/02/i-have-moved-again/) under my main domain, which, at the time, was **henriquedias.com**.

I kept writing in Portuguese until the beginning of 2015. Then, I aimed for something more: to write in English. As a 15 year old, I felt the urge to develop my English skills and I thought having a blog would help. In retrospective, I am pretty sure it did!

Some more years passed, I created a few other blogs, and now we're here, at **hacdias.com**. The old domain still exists, I still have it, and it merely redirects here. Since 2014, this website suffered, at least, 16 complete redesigns. For the future, I will try holding off more redesigns. I'm not yet 100% happy with the current design, which I have since September 2020.

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

I wrote a bunch of [scripts](https://github.com/hacdias/silos-collector) that collect data from a few silos daily and updates the website:

- 📺 [**Trakt**](https://trakt.tv) feeds into my [watches](/watches/) page, which contains the series and movies I watched. Currently, I don't keep track of each episode on my website and I keep it simple by stating the last time I watched each series or movie.

- 🎧 [**Last.fm**](https://www.last.fm/home) is for music and it is synchronized to my Spotify account. However, in contrary to what happens with Spotify, the stats from Last.fm seem to be much more accurate. I feed its data into my [listens](/listens/) page which has the current top artists and tracks I've been listening to. It's probably the "worse" looking page from the bunch.

- 🙍 [**Miniflux**](https://miniflux.app/) is a simple RSS reader that I self-host. It has a really neat API and I use to track down my blogroll, which can be found in the [blogroll](/blogroll) page. I believe it is important to let others know we follow them and to share that with the blogosphere. 

### Webmentions

This website supports [Webmentions](https://indieweb.org/Webmention). **Webmention** is simply a web standard that allows for interactions and conversations across the Internet. They can be in the form of a comment, a like, a repost or some other interactions and they're a key component in the decentralized web.

When you visit one of my posts, you'll be able to see on the bottom a box where interactions should be. Right now, I'm not handling the Webmentions completely by myself. I rely on three main external services:

- [**Webmention.io**](https://webmention.io/) for receiving webmentions. This service already parses the webmention and streamlines the format that "arrives" at my server.
- [**Bridgy**](https://brid.gy/) for creating webmention for Twitter likes, replies and reposts.
- [**Telegraf**](https://telegraph.p3k.io/) for sending webmentions without having to deal with all the issues that any decentralized system might have when one machine goes offline for a bit.

<div class="box green word" data-word="Microformats">
  
  My website also complies with [Microformats](https://microformats.org/) which, on the surface, is a set of HTML classes that allows for very easy parsing of my website's content. They can be used for [feeds](#feeds) for example.

</div>

## 🛎 Random Facts {#facts}

- I try to follow Wikipedia's convention of capitalizing titles. I use the tool [Capitalize My Title](https://capitalizemytitle.com/style/Wiki/) to make sure my titles are correctly capitalized.

## ⚖️ Disclaimer {#disclaimer}

1. Opinions change over time. If you're reading something that is many years old, or even just a few months or weeks old, it may not reflect my current opinion. The same reasoning applies to technical articles as tools and software evolves.

2. If you're unsure about something I wrote in the past - or even now - please [contact me](/contact/) for clarification instead of jumping into conclusions.

3. Lately, I've been receiving e-mails regarding guest posts. This is my personal website. Thus, I do **not** accept guest posts.

<div class='terms bold'>

- [🧔 About](/about)
- [📝 Guestbook](/guestbook)

</div>
