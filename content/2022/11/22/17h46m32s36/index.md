---
description: Replied to a post on jan.boddez.net
date: 2022-11-22T17:46:32.363274826+01:00
noIndex: true
location:
  latitude: 51.43239
  longitude: 5.48613
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Jan Boddez
  url: https://jan.boddez.net/notes/4c1ac6934d
  content: Do you have a second instance—Mastodon, preferably, as you’d definitely
    want to test against that—that you control? So that you can inspect log files,
    and the database? Sounds like either the Announcement did not get accepted after
    all, or something with the Status’s visibility …
  published: 2022-11-22T14:28:26+01:00
reply: https://jan.boddez.net/notes/4c1ac6934d
---

Hey Jan! Sadly I don't have a instance I control. However, I have accounts on some instances and I'm trying to compare my own ActivityPub messages with others. It seems the only thing I don't do is setting the `cc` field. Mastodon sets it with the target, plus the account follower's collection URL. I think that might be the reason. I will try to implement that and try again later. After all, the target instances are accepting the boost, but the ones with other followers aren't displaying it. So the `cc` missing seems like a likely cause.
