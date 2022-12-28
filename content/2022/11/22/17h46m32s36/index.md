---
description: Replied to a post on jan.boddez.net
unlisted: true
published: 2022-11-22T17:46:32.363274826+01:00
createdWith: https://micropublish.net/
properties:
  in-reply-to: https://jan.boddez.net/notes/4c1ac6934d
  location:
    properties:
      country-name: Netherlands
      latitude: 51.43239
      locality: Eindhoven
      longitude: 5.48613
      region: North Brabant
    type: h-adr
---

Hey Jan! Sadly I don't have a instance I control. However, I have accounts on some instances and I'm trying to compare my own ActivityPub messages with others. It seems the only thing I don't do is setting the `cc` field. Mastodon sets it with the target, plus the account follower's collection URL. I think that might be the reason. I will try to implement that and try again later. After all, the target instances are accepting the boost, but the ones with other followers aren't displaying it. So the `cc` missing seems like a likely cause.
