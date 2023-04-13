---
date: 2022-03-17T23:56:48.022117981+01:00
tags:
- meta
categories:
- micro
location:
  latitude: 51.4325
  longitude: 5.48617
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

I just made a few upgrades to my IndieAuth client and server to match the new version of the [specification](https://indieauth.spec.indieweb.org/) which is more in line with OAuth 2.0 specification. I added introspection, user information and the metadata endpoint. All the changes I made are backward compatible with older clients. For the library, I released a major version simply because I made a few breaking changes regarding functions naming to match the specification better. I'm thinking about supporting refresh tokens too. I wonder, however, if there's any IndieAuth app that uses refresh tokens. It'd be great to test.
