---
date: 2022-03-18T22:58:03.224792215+01:00
tags:
- meta
categories:
- micro
location:
  latitude: 51.43249
  longitude: 5.48615
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

Right now, I have my Last.fm scrobbles backed up. Every day, a small script fetches everything from Last.fm and dumps it into a file. The script is not very well optimized and downloads every scrobble since ever every day. Anyways, the point is not that. I would love to have the things I listen to in this website, just like I have for the [watches](/watches). But there's a problem: the sheer amount of data!

Since mid-2020 until right now, I have 32 526 scrobbles on Last.fm. Doing the math, I have, on average, a little bit more than 50 scrobbles a day. That would be 32K posts. That would generate too many posts, at least in my opinion. I'm sure Eagle, and of course Postgres, would be able to handle it. However, it would easily pollute my ~~omni feed~~. One of my ideas was to put all the daily scrobbles in a single file that would be rendered as multiple entries. Basically, every time my Micropub endpoint would receive a scrobble, it would append it to the the publishing day's scrobble file. I will sleep on this idea.

I know that some people, like Jamie, do a [yearly music review](https://www.jvt.me/series/music-in-review/) post. Do you have any other examples?
