---
title: Our Records Know When They're Played
date: 2026-10-24T16:11:26+02:00
categories:
- writings
tags:
- projects
- hardware
- tracking
- open source
---

Two years ago, we built a little something that we still use quite often: a "Playing Now" shelf for the vinyl sleeve of the currently playing vinyl. But that's not all: this shelf is NFC-enabled and records all vinyls that we play.

<!--more-->

This was Chris' [idea](https://christiaanbloo.com/projects/vinyl-shelf/), not long after we bought a vinyl player. He started by sketching out what it should look like, and what functionality he wanted it to have. Fortunately, he's good at 3D things, not just 3D printing, but general work with *real* materials.

![Playing Now: My 21st Century Blues](image:2026-10-24-vinyl-shelf-1)
{width="5072" height="3804"}

He did the schematics, the laser cutting of the wood and of the acrylic, as well as the assembly. I mostly stuck to the software. I decided to keep the ESP32 as stupid as possible: it just needs to read the NFC tag and send it to the backend.

For the backend, I built a small single-user server that keeps a little SQLite database where all the vinyls are registered and connected to an NFC tag. Once a new tag is scanned, we get a notification on Telegram with a link to fill in a form and add the remaining information of the album. When we scan an existing tag, we get a notification that the album has been logged. That's it.

On the ESP32 side, I also had to make sure that the tag isn't sent more than once, since the NFC reader keeps on reading. But that was also reasonably easy by just keeping track of the last scanned tag. So far, so good.

![Vinyl Shelf's Web Interface](image:2026-10-24-vinyl-shelf-3)
{width="2588" height="2190"}

The vinyl shelf also has LEDs that shine through the acrylic while the vinyl is playing, or rather, while an NFC tag is present. Unfortunately, the connection is not that good and it stopped working when I moved the shelf around today to update it. So we need to take a look at it later!

A future improvement idea is to associate each album with its MusicBrainz ID and automatically download the album art, and perhaps even display more information about it. That'd definitely help generate Chris' [vinyl page](https://christiaanbloo.com/vinyl/). Another idea is to add some sort of statistics, since the idea has always been to have the data for a "Vinyl Wrapped". That hasn't been done yet, but maybe I should!

Needless to say, all of it is [open source](https://github.com/ChrisB2351/vinyl-scanner). You can find the schematics, laser cut it yourself, build your own ESP32 device and self-host everything. It's been working well for us and it's one of those nice things that we built and just set and forget, and there's always someone asking about it when they visit (especially when the LEDs are working)!
