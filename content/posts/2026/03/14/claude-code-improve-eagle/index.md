---
title: Using Claude Code To Improve Eagle
date: 2026-03-14T14:33:19.89613525+01:00
location:
  latitude: 51.44588
  longitude: 5.46176
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
tags:
  - artificial intelligence
  - machine learning
  - tools
  - meta
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mgzk5qh6mbam
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mgzk5qh6mbam
  - https://fosstodon.org/@hacdias/116227781816471305
---

In general, I haven't been very outspoken about LLMs in this blog, or in general. For no specific reason other than not using them that much. I'm now revisiting the topic, as I've implemented a few features with the help of Claude Code in Eagle, the little program behind my website.

<!--more-->

Some context about how my website works: it's fully statically generated with Hugo, except for a few dynamic features powered by Eagle. Eagle is just a wrapper around the Hugo website. Most of the time it just serves static files. However, it does quite a [few things](https://github.com/hacdias/eagle/tree/main?tab=readme-ov-file#features) on the side.

Some time ago, I [wrote](/2025/05/29/revisiting-llms-for-code-development/) about my experience using LLMs for code development. At the time, I tried both ChatGPT on their website, as well as GitHub Copilot through VS Code. It did some nice things, but I wasn't really blown away. So I went on using GitHub Copilot as a glorified autocomplete.

In the meanwhile, and after constantly seeing stuff online about it and how great it is, I got a month subscription for Claude Code because I wanted to try it out. Mind you: I have used Claude before, but only through its web interface. This is specific about Claude Code.

The tasks I gave Claude were things that have been on my ever growing TODO list for quite some time. They're not very complex tasks, but they're things that I don't really get that much pleasure from doing, and they're also not things that I really want. They're good to haves. So... perfect for Claude. Here's what I wanted:

- Refactor the session management in order to not use JWTs, and instead have a database-based sessions. A goal here was to be able to revoke sessions, and have a better overview of which sessions are active.
- Refactor the [IndieAuth](https://indieauth.spec.indieweb.org/) token management in a similar way to the sessions, by no longer using JWTs, storing the access tokens on the database, and be able to revoke them. In addition, also implement refresh token.
- Replace the usage of BoltDB with SQLite using Gorm. This has also been on my list for quite some time. The good thing here is that I did not need to migrate DB/preserve any data. So it was just replacing the implementation.

As I said, the tasks are not very complex, just mildly boring. After asking Claude to do one by one, and reviewing the code it made, I still had to make a few adjustments, or ask Claude to do them for me, whatever I deemed to be faster. In the end, everything worked quite well, and I'm a bit impressed.

Just like I said [last time](/2025/05/29/revisiting-llms-for-code-development/), I think it's a great tool, if used well. If you know exactly what you need it to do, and give a direction on how it should be done, it seems to do its thing. I have a few other things I want to add to Eagle, and they're a bit more complex than the tasks I asked Claude to do. So I'm very curious to see how Claude ends up performing. I'm a bit more positive than on my last article!

In the meanwhile, Anthropic was offering 6 months of Claude Max for open source maintainers. After applying and waiting a few days, I got a link to activate the subscription. I haven't been able to activate it yet, because of my current subscription. I'm hoping the link doesn't expire in the next few days!
