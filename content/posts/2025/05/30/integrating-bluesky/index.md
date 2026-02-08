---
title: Integrating Bluesky Into My Website
date: 2025-05-30T20:08:53.032080527+02:00
location:
  latitude: 51.44589
  longitude: 5.46134
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
tags:
  - meta
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3lqftbiddfi2x
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3meby73ugbf2d
  - https://fosstodon.org/@hacdias/114598119919028065
  - https://news.indieweb.org/en
---

A [few months ago](/2025/03/03/recently/), I added the possibility to [POSSE](https://indieweb.org/POSSE "Publish (on your) Own Site, Syndicate Elsewhere") posts to Mastodon. Now, I just added Bluesky. At the time, I mentioned the API not being as simple, and that's why I put it off for so long. Looking in retrospect, it wasn't that bad, I think I was a bit intimidated.

Bluesky and Mastodon have a lot of differences, and the fundamental way Bluesky works (the ATProtocol) makes it such that the essence of creating a post is very different. On Mastodon - or almost any other social media - you just call the API with the text and the server automatically detects links, mentions, etc. If needed, the server embeds a preview of the links in the post.

However, on Bluesky, you need to manually configure all this things. The text is just plain text. You need to indicate where the URL is in the text, where it points to, which mentions exist, whether to embed a website, and if so, the thumbnail, the title, the description, etc.

While all of this is automatically done by Mastodon, it all must be manually done with Bluesky. I think it's an interesting philosophy, where your "profile" is essentially just a repository of data, and you're just creating this whole data, and the server is not going to be modifying it. You even get a [CID](https://docs.ipfs.tech/concepts/content-addressing/ "Content Identifier") for all the operations you do, giving me a throwback to my previous work at Protocol Labs!
