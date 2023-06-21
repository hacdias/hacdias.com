---
description: Replied to a post on jan.boddez.net
date: 2020-10-14T10:09:25Z
noIndex: true
tags:
- meta
- indieweb
- activitypub
categories:
- notes
context:
  name: Jan Boddez
  url: https://jan.boddez.net/notes/046185c328
  content: "In reply to https://hacdias.com/micro/2020/10/trying-activitypub/. I remember
    looking at https://github.com/aaronpk/Nautilus/blob/master/app/ActivityPub/HTTPSignature.php
    a whole lot to finally get signatures—and Accepts—to work. (Could never get Deletes
    to actually work, though.) \U0001F61F"
  published: 2020-10-14T12:00:00+02:00
reply: https://jan.boddez.net/notes/046185c328
---

The thing is: I've done this in the past. I just tried with a random Mastodon instance and the error is precisely the HTTP signature. Either I'm not signing correctly, or I'm not proving the public key correctly. But the fact that I did this in the past and it's still not working, it's what's annoying me the most. Also, I'm doing this in Go and I'm basing on [@jlelse's](https://jlelse.blog) implementation and his ActivityPub Accept is working. And my code literally looks the same. If I don't figure it out in the next hour, I'll leave it for another day.
