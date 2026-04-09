---
title: Adding Standard.site Support
date: 2026-03-04T09:04:06.886436282+01:00
location:
  latitude: 51.44597
  longitude: 5.46174
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
  countryCode: NL
categories:
  - writings
tags:
  - at protocol
  - social web
  - web
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mg7t5huhmc2t
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mg7t3tvo36bl
---

At the beginning of February, I [wrote](/2026/02/08/atmosphere/) about my recent adventures in the ATmosphere. At the time of writing, I was working on adding [standard.site](https://standard.site/) support to this website. In the meanwhile, I've finished it and my blog should be fully compliant with the specification.

<!--more-->

## What is Standard.site?

But first things first: what is standard.site? What does it do? What is it useful for? I think their website explains it very well and succinctly:

> Standard.site provides shared lexicons for long-form publishing on AT Protocol. Making content easier to discover, index, and move across the ATmosphere.
{cite="https://standard.site/"}

The greatest benefit this website gets from implementing Standard.site support is that it becomes indexed and discoverable by many other tools that are built on the AT Protocol, such as [Leaflet](https://leaflet.pub/reader), [GreenGale](https://greengale.app/), and [pkct](https://pckt.blog/read). 

Some Bluesky clients, such as Heron, are also [starting to implement](https://bsky.app/profile/tunji.dev/post/3mg73n5hha2it) support for these lexicons and adding your long-form documents right on your profile, making them even more discoverable for people following you.

## Implementing Standard.site Support

Adding support for Standard.site means publishing this website as a `site.standard.publication` lexicon, and every post as a `site.standard.document`. For those who've followed my blog for a longer time, you know that this website does [POSSE](https://indieweb.org/POSSE) - *Publish (on your) Own Site, Syndicate Elsewhere* - to some platforms, including Bluesky.

With that being said, adding support for Standard.site-lexicons was quite straightforward. I'm not going into the nitty gritty on how the code works, since that's highly specific to the custom-made engine powering this website. On a higher level, this is what happens:

- A `site.standard.publication` is upserted when the [blog engine starts](https://github.com/hacdias/eagle/blob/ede4543a66ef994e44dcc52c9e1fe227c8c7372c/plugins/atproto/standardsite.go#L16-L40). This is mostly to ensure that the record is up to date, with the latest description, title, etc. Since this rarely gets updated, it's fine to need to restart the blog engine to update it.
- A `site.standard.document` is created when a [writings](/writings/) post is created, and updated when a post is updated. That happens in this [bit of the code](https://github.com/hacdias/eagle/blob/ede4543a66ef994e44dcc52c9e1fe227c8c7372c/plugins/atproto/standardsite.go#L42-L103). I decided to only publish the posts under the [writings](/writings/) category as those are the only long-form posts on this website. [Photos](/photos/) are already POSSE'd as Bluesky posts anyways and I didn't feel like they fit the "long-form" story that well.

When I implemented this, I also wrote a script to retroactively publish all existing posts as `site.standard.document`s. I made sure that the record key was based on the original timestamp of the article to ensure sortability - and because I thought it looked better when navigating the PDS.

It's been quite fascinating to see everything happening in the ATmosphere the past weeks, and how some tools are growing and getting more traction. Curious about the future!
