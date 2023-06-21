---
description: Replied to a post on fosstodon.org
date: 2022-11-21T20:14:11.005705868+01:00
lastmod: 2022-11-22T23:52:50.183273999+01:00
expiryDate: 2023-06-21T07:59:09.637808+02:00
noIndex: true
categories:
- notes
location:
  latitude: 51.43239
  longitude: 5.4861
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Wouter Groeneveld
  url: https://chat.brainbaking.com/objects/e54c65fe-1e40-4107-ba2e-aa9ad84b73a5
  content: '@jle @hacdias there&#39;s always something like https://github.com/go-ap
    for your GoBlog. Haven&#39;t tried it myself though. As for passively following
    people, perhaps RSS scraping suffices?'
  published: 2022-11-21T16:55:47Z
reply: https://chat.brainbaking.com/objects/e54c65fe-1e40-4107-ba2e-aa9ad84b73a5
---

That is an option. I'm using https://github.com/go-fed/httpsig for the HTTP signatures, but I've looked at the linked go-ap things before. I considered using their vocabulary module so I wouldn't have to specify the types myself, but I think it is too verbose: https://github.com/go-ap/fedbox/blob/master/activitypub/activitypub.go#L18-L32 - However, I will check how complicated their types are. Maybe using them would simplify some verifications I do right now...
