---
tags:
- meta
- indieweb
date: 2020-10-14T11:38:45Z
replyTo:
  url: https://jan.boddez.net/notes/046185c328
  content: "In reply to https://hacdias.com/micro/2020/10/trying-activitypub/. I remember
    looking at https://github.com/aaronpk/Nautilus/blob/master/app/ActivityPub/HTTPSignature.php
    a whole lot to finally get signatures—and Accepts—to work. (Could never get Deletes
    to actually work, though.) \U0001F61F"
  date: 2020-10-14T12:00:00+02:00
  author:
    name: Jan Boddez
    url: https://jan.boddez.net/
    photo: https://jan.boddez.net/uploads/avatars/mastodon-social-janboddez.jpg
---

Well... it was a library issue. Upgraded it, working now. Unfortunately, when I added it, the dependency manager didn't add the last version, but it's not its fault. The source code is not correctly tagged it seems!
