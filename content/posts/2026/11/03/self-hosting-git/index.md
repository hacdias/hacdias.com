---
title: Thoughts on Self-Hosting Git
date: 2026-11-03T11:55:13+01:00
categories:
  - writings
tags:
  - git
  - at protocol
  - decentralization
  - open source
  - self-hosting
  - infrastructure
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mzfoggvlm23e
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mzfoggvlm23e
  - https://fosstodon.org/@hacdias/117552156687329814
---

Over the years, I've considered self-hosting a Git service multiple times. At the moment, virtually all of my code lives on GitHub, both private and public repositories. However, I never ended up doing it, and always because of some half-arsed excuse. But maybe I'm closer to doing it now.

<!--more-->

I've been running a few services on [Nata.café](https://nata.cafe) for some time now, and a Git service would probably be one of the most obvious things to run there. Yet, I haven't done it. For quite some time, I even had a redirect set up from `git.hacdias.com/${path}` to `github.com/hacdias/${path}` for quick linking in case I ever decided to self-host Git.

I don't have that many reasons to self-host a Git service, except for finding it *cool*. Well, I'd probably argue that the global dependency on GitHub will eventually end up being a bad decision, especially considering how [unreliable](https://mrshu.github.io/github-statuses/) it has been over the past few years. So yeah, just a mirror of my code that is not on my machine.

The issue with that is that I don't have a very strong argument to even bother: my machine is already backed up to three different destinations at different frequencies, places and times. So does it really matter? Well, it still does. I'd like to keep a self-hosted remote that other people can clone from.

I've been sort of [planning for this](/2023/11/10/updates-on-indieweb-go-libraries/) for quite a while. Most of my Go packages use [`go.hacdias.com`](https://go.hacdias.com) in their module path instead of relying on GitHub, which means that I can later just [point the resolution](https://pkg.go.dev/cmd/go#hdr-Remote_import_paths) at a different Git forge and nothing will break.

[Tangled](https://tangled.org), which is built on the [AT Protocol](/2026/02/08/atmosphere/), is a Git forge that can be *truly* decentralized. You can run your own [knot](https://tangled.org/docs/self-hosting), where your own repositories live, and still navigate it through their website. Comments, PRs, discussions, all live right next to your repository.

![Eagle Mirror on Tangled](image:2026-11-03-self-hosting-git)
{width="2382" height="1980"}

Since their [announcement](https://tangled.org/blog/forge/) a few days ago, I've been looking into the idea of running my own knot in order to keep a mirror of all my *public* -- we'll come back to this in a second -- repositories. And it is already [live](https://knot.nata.cafe/)! At the moment, I'm the only one that can use this knot and I'll do this mostly as a test for now.

Tangled addresses some of the friction points of self-hosting Git for me. You don't need to create a different account at a different service, you can still be in control of your own data and self-host your Git repositories, and you stay discoverable in the meantime and allow for collaboration.

The only issue here is that there's no support for private repositories yet. According to the announcement, they're coming in the next few weeks, so I'll keep an eye on it. Not sure whether or not they plan on building on top of [Spaces](https://atproto.com/blog/atproto-spaces-alpha), or have something else in mind.

For now, I think I'll keep running my knot and pushing some of my public repositories to it. For now, mostly for mirroring, but who knows whether I'll fully migrate at some point in the future.
