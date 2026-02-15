---
title: Flying Into The ATmosphere
date: 2026-02-08T18:15:27+01:00
location:
  latitude: 51.44585
  longitude: 5.46135
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
tags:
  - at protocol
  - web
  - social web
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3meegqa2am42d
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3meegpmimi2f4
thumbnail: image:2026-02-08-atmosphere
---

Since [FOSDEM](/2026/02/04/fosdem/), I've gone down the rabbit hole of the world of the AT Protocol - or the ATmosphere, as some would say. I've learned about a lot of cool projects, tried some of them, and made my website also a bit more atmospheric. As such, I decided it was worth sharing!

<!--more-->

If you don't know much about Bluesky and the AT Protocol, I'd highly recommend reading [*Open Social*](https://overreacted.io/open-social/) and [*ATProto for distributed systems engineers*](https://atproto.com/articles/atproto-for-distsys-engineers). They both paint a very good picture of how things work.

![Blue sky, just for the vibes](image:2026-02-08-atmosphere)
{width="4000" height="3000"}

## Instagram-like Clients

Some of the posts on this website were already POSSE'd to [Bluesky](https://bsky.app/). So that was already a beginning. But I wanted more. I wondered what else I could do.

After coming across two clients that focus on Instagram-like experiences, just link Pinsky and Flashes, I thought: what if I publish all my photo posts on Bluesky? Then, people would be able to see my posts in a similar form factor they're used to.

That was quite simple: you can create new `app.bsky.feed.post` with an older creation date. Most app views will properly use that date for sorting, instead of the indexing date. So that's neat. Bluesky shows those posts as "archived from" an older date.

## Standard.site

Then I learned about Standard.site, which are shared lexicons for long-form publishing. According to their website, this makes content easier to discover and index. And considering they are already implemented by some of the biggest long form publishing platforms on AT Protocol, I thought: maybe I should implement it!

I then wrote some [half-baked code](https://github.com/hacdias/eagle/tree/main/plugins/atproto) to make sure - upsert - a `site.standard.publication` for my website that lives in my PDS. I then working a bit more on it to make sure that all of my writings have a `site.standard.document`, meaning that they all get to be discoverable and indexed in the ATmosphere.

You can now find my website on, for example, [leaflet.pub](https://leaflet.pub/p/hacdias.com) and see all the latest articles. There seems to be a bug where they're using the record key as the path when linking, instead of the `path` field in the document. I've reached out to them to ask whether this is a bug on their side, or on mine.

Once it is fixed, it'll definitely be very nice to be able to have my content indexed and discoverable on this way. A very cool thing about all of this is that this whole thing is based on a gigantic graph, and finding connections and links between things is possible (comments, likes, reposts, etc).

## What Next?

There's so much else I've discovered. There are all sorts of apps built on the AT Protocol, varying from the most random use cases, such as tracking your [toilet visits](https://flushes.app/) to [git forges](https://tangled.org/) and [social reading](https://margin.at/). I really like this: all my data is in this PDS, which can be very easily backed up, but also migrated to another provider, or even self-hosted.

If I look at my website at the moment, there are a few things that I think would be interesting to integrate with the AT Protocol: watched movies and series, as well as reviews; read books and their reviews, etc. For these things, there are already some apps and lexicons out there, like [Popfeed](https://popfeed.social/) and [Bookhive](https://bookhive.buzz/).

Most of the times, using one those apps provides a much better user experience than editing some YAML file backing my website's watches list. Imagine this: I open Popfeed and mark a movie as watched, as well as give it a star review. Eagle, my website's backend, is listening to an AT Protocol jetstream for those events for my PDS. Once an event gets detected, it would just automatically update the data. Seems cool. The user experience would end up being nicer for me.

There are also other things I use that could eventually be replaced. Swarm checkins could eventually be replaced by Anchor, my scrobbling service Last.fm could be replaced by [Teal.fm](https://teal.fm/) or [Rocksky](https://rocksky.app/), etc. There are quite a lot of these apps out there, but they all use a slightly different lexicons and I don't really want to commit to one of them yet.

There's also [lexicon.community](https://github.com/lexicon-community) which is among to "standardize" some community Lexicons, which is also cool. I've seen their bookmark lexicon and that would also help me replace my bookmark manager, for example. Just an idea. Or maybe [semble.so](https://semble.so/). I'm not 100% sure what the differences here are, but just an idea.

I really like the idea of the user repository (PDS), and I think quite a lot of services I use nowadays could be replaced by this. These are already services that I use and backup the data from every month, so if that task can become easier, I'd be up for it.

---

So now my website is discoverable on the ATmosphere, that's nice. I'm looking forward to see how the rest of the ecosystem evolves, and see if I can pick up a few more lexicons here and there and see how that could play out on this website. After all, I still think and want my website to be my canonical address on the web, but if there's ways to make it interoperable and more social, I'd love to!
