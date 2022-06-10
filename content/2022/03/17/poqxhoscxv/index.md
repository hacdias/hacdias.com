---
published: 2022-03-17T23:56:48.022117981+01:00
section:
- notes
createdWith: https://micropublish.net/
properties:
  category: meta
  location:
    properties:
      country-name: Netherlands
      latitude: 51.4325
      locality: Eindhoven
      longitude: 5.48617
      region: North Brabant
    type: h-adr
---

I just made a few upgrades to my IndieAuth client and server to match the new version of the [specification](https://indieauth.spec.indieweb.org/) which is more in line with OAuth 2.0 specification. I added introspection, user information and the metadata endpoint. All the changes I made are backward compatible with older clients. For the library, I released a major version simply because I made a few breaking changes regarding functions naming to match the specification better. I'm thinking about supporting refresh tokens too. I wonder, however, if there's any IndieAuth app that uses refresh tokens. It'd be great to test.
