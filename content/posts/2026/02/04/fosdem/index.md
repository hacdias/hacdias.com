---
title: Surviving FOSDEM '26
date: 2026-02-04T20:18:47+01:00
categories:
  - writings
tags:
  - conference
  - fosdem
  - open source
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3me2lw26g7k2z
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3meawsqr3ub2b
  - https://fosstodon.org/@hacdias/116013985338780310
---

Last weekend was the first weekend of February, which means only one thing in the open source world: the largest open source conference on Earth took place. All of that to say that I spent my past weekend in Brussels to attend [FOSDEM](https://fosdem.org/2026/). Definitely chaotic  as usual!

<!--more-->

This year, I went with a coworker of mine, Timo, who's also quite active in the open source space. Especially in the world of OpenID for Verifiable Credentials, OpenWallet Foundation, and so on. It was his first FOSDEM, so it seems like it's becoming a [trend](/2024/02/05/fosdem/) for me to introduce people to this two chaotic days.

## 😵‍💫 Saturday {#saturday}

On Saturday, we started by attending the mandatory [*Welcome to FOSDEM*](https://fosdem.org/2026/schedule/event/SFKNTZ-welcome_to_fosdem_2026/) talk, the grand opening. It turned out to be a bit more emotional and political than I was expecting, but it was nevertheless a good introduction to the chaos that the rest of the weekend would be.

FOSDEM is big and full of people. Just like during other editions, it's very hard to plan what you want to see and do. Many times the rooms are very full and you need to be there a few talks in advance. Otherwise you won't get a place.

Two talks I'd highlight from Saturday were [*Intro to WebTransport - the next WebSocket?!*](https://fosdem.org/2026/schedule/event/9DEU7E-intro_to_webtransport_-_the_next_websocket/) and [*How To Make Package Managers Scream*](https://fosdem.org/2026/schedule/event/DCAVDC-how_to_make_package_managers_scream/). The former was a good introduction on WebTransport, and explaining why it exists, how it works and which advantages it has over WebSockets. The latter was a more ridiculous comedic approach to... well... how to make package managers scream.

We also saw a talk about accessibility in web browsers, which I found quite interesting. I think it could've been a bit more interactive, by for example showing how a screen reader reads a website and showing what good and bad practices are. But it was still eye opening. I always try to use HTML semantically and try to not make anything that is possible despite the browser allowing it. I think I will be more aware from now on.

## 🌐 Sunday {#sunday}

On Sunday, we managed to be up early for our talks at 9 o'clock. I decided to venture into [*Bringing Decentralization to Your Doorstep: 5 Years in Browsers*](https://fosdem.org/2026/schedule/event/TRQ9LV-decentralized-to-doorsteps/), where Mosh gave an amazing walkthrough through - sounds a bit repetitive - the many things that decentralized projects have helped and pushed forward in the browser space, just like the introduction of Ed25519 in the browser.

I stayed in the same devroom for quite a while and saw a few other talks, but later that day we headed up to La Fontaine for [*‌Reverse Engineering the World's Largest Music Streaming Platform*](https://fosdem.org/2026/schedule/event/RNBQ8U-reverse-engineering-spotify/), which, of course, is about Spotify. I don't know a lot about a lot of low level stuff, or reverse engineering, but I really enjoyed the talk. It was interesting, funny and well explained.

Later that day I still wanted to go to [*DASL Your Protocols!*](https://fosdem.org/2026/schedule/event/W8CJXD-dasl/), but, unfortunately, we had to head back to the centre of Brussels because we had a quite early train. Haven't watched it yet, but I'm hoping it'll be online in the coming days since every talk gets recorded.

## 🔥 Decloudflaring {#decloudflaring}

At some point on Sunday, I got reminded - indirectly - that I should move away from Cloudflare. Not only does it seem that their outages are becoming more frequent, but they can also MITM you. That's not good, and it's been on my plans for some time already.

As such, I started moving some things a few days ago. I started by initiating the transfer of the only domain I have on Cloudflare to another registrar, which is going to take a few days.

The second thing was setting up shadow copying all my DNS records to Bunny, which is very easy to do with [DNSControl](https://dnscontrol.org/). In a few days, I'm moving over one of the domains to test the waters. I think I've just been using Cloudflare for too long that I'm "afraid" of using something else.

## ⬛️ User & Agents {#users-and-agents}

Friday morning I was told there was an AT Protocol event later that day. Unfortunately, we had already booked the train tickets and could not get there earlier. Even if we did, the event was fully booked!

Anyways, that did not stop me from learning a bit more about what's happening in the space. Through [Dietrich](https://metafluff.com/), I met some people in the [User & Agents](https://userandagents.com/) community, and afterwards I just followed link after link and found thing after thing.

There's quite some pretty interesting things happening in the AT Protocol world. I discovered there's a Git forge based on AT Protocol called [Tangled](https://tangled.org/), which is cool. I also stumbled across [Germ](https://www.germnetwork.com/), which is an E2E encrypted messenger where you can use your AT Protocol handle. There's so much stuff!

I also "discovered" [Standard.site](https://standard.site/) which aims to make the lexicons for long-form content on AT Protocol more cohesive. And then I thought: what about a personal website powered by AT Protocol? Well, you can already find at [least one](https://dame.is) in the wild!

## 🧇 Other Notes {#other-notes}

<div class="fg" style="grid-template-columns: repeat(3, 1fr);">

![Club Mate Iced Tea](image:2026-02-04-club-mate-iced-tea)
{width="4000" height="5334"}

![Floris Pêche](image:2026-02-04-floris-peche)
{width="2383" height="3178"}

![Suikerwaffel and Free Coffee](image:2026-02-04-waffle)
{width="2092" height="2789"}

</div>

- In 2024, I tried a Lime Beer at the Delirium Café. This time, I went for something more fruity and tried a Peach Beer. I would definitely recommend, and I'd like to try more flavors.
- The *suikerwafels* from the food truck at the campus were as good as I remembered. I'm proud of resisting and eating only two. I also tried a Brussel-style vegan waffel, which was also very good.
- Apparently there are quite a few flavors of Club Mate. I've tried the regular one and the pomegranate before, but now I discovered the iced tea flavour. It's my favorite so far.
- I still haven't learned how to take notes at FOSDEM. I said the same thing two years ago, and I feel like the same will happen at the next edition.

At the end of the day, FOSDEM is just pure chaos, but in a good way, I think. For me, I always end up meeting old coworkers, getting to know what people are hacking on nowadays, and meeting new people. I think that's quite good for the open source community!

Until next {{< favicon "fosdem.org" >}} FOSDEM!
