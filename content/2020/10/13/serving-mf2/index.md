---
description: Replied to a post on jan.boddez.net
date: 2020-10-13T13:47:55Z
noIndex: true
categories:
- notes
context:
  name: Jan Boddez
  url: https://jan.boddez.net/notes/514f198e74
  content: In reply to https://hacdias.com/micro/2020/10/is-feed-fixed/. Relative
    URLs, eh? Suddenly feels like I’ve had this conversation before. :-) I know they
    can be an issue (and are discouraged) in RSS feeds, but not that Microsub readers
    would fail to pick them up as well. I’m using a fork of Aperture, which I’d consider
    the de facto standard and itself relies on X-Ray to parse HTML (and other) feeds.
    I sometimes use http://xray.p3k.io to check both h-feeds and individual entries.
  published: 2020-10-12T19:55:11+02:00
reply: https://jan.boddez.net/notes/514f198e74
---

Yeah, that's true. But it was a tiny bit more complicated. I was serving the microformats JSON directly instead of the HTML and I forgot to add the domain to the parser I was using. Simply ended up removing that. There's no point (I think) in me serving jf2 or mf2 JSON directly. Besides HTML with Microformats, I'm also serving ActivityStreams and I think that, unfortunately, that's what X-Ray picks up, and not the HTML, so I'm trying to make sure it is as reliable as possible.
