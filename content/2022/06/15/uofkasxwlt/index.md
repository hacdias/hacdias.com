---
description: Replied to a post on jlelse.blog
date: 2022-06-15T09:04:11.965707199+02:00
noIndex: true
categories:
- notes
location:
  latitude: 51.43241
  longitude: 5.4861
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/micro/2022/06/2022-06-15-xlwja
  content: 'Never heard of MicroPub channels, I have to check it out! Regarding video
    posts: Have you heard of Bunny.net Stream? There you can upload videos, they encode
    them to different resolutions and then you can use an HLS playlist. Also with
    custom domain. See this post as an example. To secure your media files, you could
    use Token Authentication with Bunny.net. Good luck with your thesis!'
  published: 2022-06-15T08:29:29+02:00
reply: https://jlelse.blog/micro/2022/06/2022-06-15-xlwja
---

> Have you heard of Bunny.net Stream?

I have but I didn't have courage to check it out 😅 I may look at it as it looks quite interesting and usable.

> To secure your media files, you could use Token Authentication with Bunny.net

Yes, perhaps. I've seen that option but I also don't want to have to sign _all_ requests. That would require quite some changes. An option I can see is to have a separate Storage Zone with a separate subdomain to store private media and those would have to be signed.

Seems like a promising idea. It still creates the problem of: when uploading via the media endpoint, where should it go to? I can also just build my own backend uploader. Anyways, thinking out loud (out typed?).
