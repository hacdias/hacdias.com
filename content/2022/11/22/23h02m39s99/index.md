---
description: Replied to a post on hacdias.com
date: 2022-11-22T23:02:39.999635666+01:00
lastmod: 2022-11-22T23:28:21.209457331+01:00
noIndex: true
location:
  latitude: 51.4325
  longitude: 5.48601
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Henrique Dias
  url: https://hacdias.com/2022/11/22/08h16m07s25
  content: Yesterday, I boosted (announced) a post on ActivityPub. It was automatically
    sent to the instance of the original post, as well as the instance of my remaining
    followers. Requests were successful. However, the boost only shows up in the instance
    of the original post. I have absolutely no clue why. What’s the point of boosts
    if this is how it behaves? Maybe there’s something very obvious that I’m missing.
    What is it though?
  published: 2022-11-22T08:16:07+01:00
reply: https://hacdias.com/2022/11/22/08h16m07s25
---

Finally understood the problem. For Mastodon (and possibly Pleroma), a post ID is not always its URL. At least, not the URL the user usually sees. What I do now is: (1) fetch the URL from the post that I want to reply, boost or like; (2) then use that URL in the object field in the Activity I send to my followers. Seems to work successfully now.
