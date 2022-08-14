---
published: 2022-06-04T12:48:12.686181075+02:00
section:
- home
- micro
createdWith: https://micropublish.net/
properties:
  category: security
  location:
    properties:
      country-name: Netherlands
      latitude: 51.43239
      locality: Eindhoven
      longitude: 5.48615
      region: North Brabant
    type: h-adr
---

I finally stopped using GPG keys for SSH authentication. Now I purely use SSH keys protected by 2FA via security keys. Now I have to get used to "touching" for authentication!

It also looks like Git allows to use [SSH keys for signing](https://blog.dbrgn.ch/2021/11/16/git-ssh-signatures/). Unfortunately GitHub doesn't support such signatures yet. Once they do, I may change to that method.
