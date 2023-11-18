---
description: Replied to a post on fosstodon.org
date: 2022-11-20T22:35:18.512312994+01:00
noIndex: true
location:
  latitude: 51.4324
  longitude: 5.48607
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Jan-Lukas Else
  url: https://fosstodon.org/@jle/109378237908508748
  content: '@hacdias To be able to follow Fediverse accounts without implementing
    a complete ActivityPub server by myself. And previously I didn&#39;t have the
    option to create unlisted posts.'
  published: 2022-11-20T21:24:20Z
reply: https://fosstodon.org/@jle/109378237908508748
---

I think that is quite a valid reason indeed - there are so many things to [think about](/2022/11/18/23h28m13s83) when implementing ActivityPub, especially incoming things. That is also why I am using the Fosstodon account: to follow people and explore a bit. Later, I would love to support following people from my own website, but I am concerned at both security and speed/resource consumption. Maybe I should implement a queue for both incoming and outgoing things (looking at your implementation 😜) and an extremely simple feed HTTP route that simply consumes the last _n_ activities received and converts them into feed format. Then I can use Miniflux. A thought for later.
