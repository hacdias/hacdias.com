---
title: Mitigating Guestbook Spam
date: 2024-05-10T12:21:52+02:00
categories:
  - articles
tags:
  - meta
  - personal website
---

Four years ago, I wrote a [post](/2020/05/31/back-90s/) about bringing back the web of the 90s, which is somewhat ironic since I don't remember the web of the 90s. Therefore, I'm probably not the best to write that. Anyways, I introduced my [guestbook](/guestbook/) on that same day. Today I want to talk a bit about avoiding all the inevitable spam that I get there.

<!--more-->

For most of the time since I had created the guestbook, I did not really do much about the spam, and just tried to ignore it. I think that the fact that I use Cloudflare probably helps preventing more than half of the spam. And to be fair, I had no spam in the beginning at all.

## 🍯 The Initial Solution {#the-initial-solution}

But just like anything else in life, things change. At some point I started receiving more and more spam. After talking to [Sebastiaan](https://seblog.nl/), he gave me the idea of creating a [honeypot](https://en.wikipedia.org/wiki/Honeypot_(computing)) field in my guestbook form. So I decided to go ahead and do it.

I created a very naive honeypot field: it was a hidden field (via `display: none`) with the type `url`. To me, this seemed like something that would easily catch bots. If it's empty, it's a human. Otherwise, it's a bot. It seemed to work for some time, but then I started getting spam again.

Maybe the bots were becoming smarter, and it's also not that hard to just scrape the page and see which styles are applied to certain elements. Bots nowadays can certainly detect hidden fields and heuristically decide whether or not to fill them.

Concluding: the initial solution reduced the amount of spam, but definitely did not stop it. This was more than a year ago I think. Maybe two. I'm actually not that sure anymore.

## 🤐 Shutting Bots Down {#shutting-bots-down}

Anyways, getting spam on my guestbook constantly is not a nice feeling. Every time I see there's a new post, I get a bit excited. But that's only to get disappointed after reading what it is. My guestbook is definitely not as popular as the bots made it seem.

A few days ago, I was casually navigating the IndieWeb, and I stumbled across [Kev Quirk's](https://kevquirk.com/guestbook) and [Manuel Moreale's](https://manuelmoreale.com/guestbook) guestbooks and I saw this nice anti-spam field where they actually ask people to input something. Something easy that all humans should be able to do, but bots not so much.

And then I remembered: I had read [some post](https://kevquirk.com/guestbook-spam-is-fun) about guestbook spam from Kev. He had had the same exact experience. In his words, the honeypot field "wasn't enough to deal with all these bloody bots". I have no idea why I didn't implement his idea the day I actually read his post a few months ago.

Anyways, I decided to do the same that Kev and Manuel did: remove the honeypot field, and instead replace it with a simple question that any person should be able to correctly answer. It's a very simple question, and everyone that visits this website should be able to write the correct value down.

Now, it seems to have worked. I haven't gotten any spam on [my guestbook](/guestbook/) since. Granted, I also didn't get any real comment, but I made sure the form works by submitting it myself - and then disapproving my own post of course.
