---
description: Replied to a post on fosstodon.org
published: 2022-11-21T20:14:11.005705868+01:00
updated: 2022-11-21T21:02:33.665427162+01:00
section:
- micro
createdWith: https://micropublish.net/
properties:
  in-reply-to: https://chat.brainbaking.com/objects/e54c65fe-1e40-4107-ba2e-aa9ad84b73a5
  location:
    properties:
      country-name: Netherlands
      latitude: 51.43239
      locality: Eindhoven
      longitude: 5.4861
      region: North Brabant
    type: h-adr
userMentions:
- name: '@wouter@chat.brainbaking.com'
  href: https://chat.brainbaking.com/users/wouter
  inbox: https://chat.brainbaking.com/users/wouter/inbox
- name: '@jle@fosstodon.org'
  href: https://fosstodon.org/users/jle
  inbox: https://fosstodon.org/users/jle/inbox
---

[@jle@fosstodon.org](https://fosstodon.org/users/jle) [@wouter@chat.brainbaking.com](https://chat.brainbaking.com/users/wouter) That is an option. I'm using https://github.com/go-fed/httpsig for the HTTP signatures, but I've looked at the linked go-ap things before. I considered using their vocabulary module so I wouldn't have to specify the types myself, but I think it is too verbose: https://github.com/go-ap/fedbox/blob/master/activitypub/activitypub.go#L18-L32 - However, I will check how complicated their types are. Maybe using them would simplify some verifications I do right now...
