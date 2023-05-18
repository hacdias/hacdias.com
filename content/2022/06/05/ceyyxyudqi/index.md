---
date: 2022-06-05T22:56:19.748105451+02:00
tags:
- matrix
- decentralization
categories:
- notes
location:
  latitude: 51.43243
  longitude: 5.48614
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

Today I had quite some adventures with Matrix and decentralised messaging protocols. I thought about self-hosting an instance so I tried [Synapse](https://github.com/matrix-org/synapse), which is the _de facto_ Matrix implementation with all the features available. Quickly I understood that Synapse was too slow for a very tiny VPS so I tried [Dendrite](https://github.com/matrix-org/dendrite) which claims to be much more efficient.

So... It run, but it was consuming 100% of all the 2 cores of the CPU of my VPS and yet it didn't manage to load previous messages of the chats (perhaps that's a limitation as it doesn't have all the features yet). As that was a continuous high consumption for over 2 hours, I decided to take it down and create an account at a hosted Matrix instance. I chose [tchncs.de](https://tchncs.de/), which is hosted in Germany. I didn't want to go for the default [matrix.org](https://matrix.org) because that's where everyone is and that goes against the decentralisation aspect of the thing.

When - and if - the protocol matures, I hope to see a more efficient implementation tailored for single users or small communities that can still do federation with other instances without _dying_. I also added my Matrix contact to my [contacts page](/contact) ✨
