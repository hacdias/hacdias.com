---
description: Replied to a post on hacdias.com
unlisted: true
published: 2022-11-22T23:02:39.999635666+01:00
updated: 2022-11-22T23:28:21.209457331+01:00
createdWith: https://micropublish.net/
properties:
  in-reply-to: https://hacdias.com/2022/11/22/08h16m07s25
location:
  latitude: 51.4325
  longitude: 5.48601
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

Finally understood the problem. For Mastodon (and possibly Pleroma), a post ID is not always its URL. At least, not the URL the user usually sees. What I do now is: (1) fetch the URL from the post that I want to reply, boost or like; (2) then use that URL in the object field in the Activity I send to my followers. Seems to work successfully now.
