---
title: Sobering Up My Website's Design
date: 2026-10-13T20:35:30+02:00
categories:
  - writings
tags:
  - meta
  - personal website
  - design
  - artificial intelligence
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mxroe5ts62ay
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mxroe5ts62ay
  - https://fosstodon.org/@hacdias/117435043768481440
thumbnail: image:2026-10-13-redesign-1
---

If you're reading this on your phone, you probably won't notice much of a difference, except maybe for the accent color. On a computer, though, quite a lot has changed since your last visit. If you're reading this in an RSS reader, please check it out!

<!--more-->

A few months ago I completely [redesigned](/2026/02/21/redesign/) this website, but I was never fully happy with the result. It felt too left-aligned, too wide, too empty, and not really me. So I redesigned it once again. This time I think it's here to stay for a while, just like the design that came before it.

![New Dark Mode](image:2026-10-13-redesign-1)
{width="3402" height="2848"}

When I wrote about that redesign, I said I was trying to balance personality, cleanliness, and a modern feel. Looking back, the personality left the chat. The result was too clean, too balanced. This new design is more sober, but somehow more personal. I'm not sure if that makes sense, but it's how it feels to me.

The new design brings back elements of that older design that served this website for over 5 years, and mixes them with the one I'm replacing. It's more uniform, it feels more like me, and it even makes me want to write more. In a way, it's just a continuation of the older design, but better thought out.

## Back to the Center

I went back to a centered layout. One of my problems with the older centered design was that everything felt too small on a computer: the text, in particular, felt tiny. To fix that, I now use a variable font size that grows on larger screens (up to a limit) and shrinks on smaller ones. Nowadays, this can be easily achieved using [`clamp`](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/clamp).

Still, there was a reason I moved to a left-aligned layout with a sidebar in the first place: I wanted to use the horizontal space when it made sense. The home page had two columns, one with the latest posts and one with the latest photos (I say latest but there isn't much new there of late).

The photo archive and the guestbook flowed across the full width of the screen. I wanted to keep that, just not on every page. Reading a post on a very left-aligned page never felt right -- ha! Now, the pages that benefit from it use `margin-inline` to stretch out on larger screens, while staying at full width on smaller ones.

![Photos Archive in Safari using CSS Grid Lanes](image:2026-10-13-redesign-3)
{width="3402" height="2848"}

It keeps the idea of the previous design, but better. It's also not full screen anymore, so it doesn't flow in an endless way for those people with ultra-wide screens. Speaking of those pages: this website now works best in Safari, which is an odd thing to say. Safari has official support for [CSS Grid Lanes](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Grid_layout/Grid_lanes), which makes the [photo archive](/photos/archive/) and the [guestbook](/guestbook/) look much better.

## Navigation

The previous design replaced the cute little avatar I used to have in the header with a plain letter "H" on a blue background. That's one of those personality elements that I missed. Now I'm using my own profile photo instead, in a rounded square, and I think it makes the whole website feel much more alive.

I also removed the emojis from the navigation bar, which had been there for a very long time. With the photo, the emojis, and the accent color all sitting together, the header felt far too colorful. Only after removing the emojis did I realize how much presence they had: they grabbed way too much attention when the rest of the page should be the focus.

One thing I kept from the sidebar design was having my contacts easy to reach. They're now in the header too, in a lighter color. I trimmed them down to the ones I think are more relevant to have easily accessible and moved the rest to the [About](/about/#contact) page and the footer. Since I'm looking for my next role, there's also a small "Open to work" indicator right alongside them. On mobile they're still there, either at the top or at the bottom of the page, depending on which page you're on.

## New Accent Color

Bringing back the photo made me notice the colors were a bit off. The photo is mostly earthy tones, and the blue accent didn't sit well next to it. To try out alternatives, I tried Claude's design feature for the first time. I was quite impressed by the interactive sketches with sliders to try out different colors, gradients, and tones based on the photo. I could play around and see right away what fit the vibe, without touching the code of the website itself.

![Claude Design Interactive Mockup](image:2026-10-13-redesign-2)
{width="3862" height="2414"}

I ended up with a rust color. I'd argue it leans red, my boyfriend argues it leans orange, but either way I like it, and I think it fits the website nicely.

While choosing the color, I also noticed the website had too much of a tint. The background, foreground, and pretty much everything else picked up a lot of saturation from the accent color. Now that tint is much more subtle, which makes everything look so much better in my opinion.

Since I was looking at colors anyway, I also asked Claude to go through the website and suggest accessibility improvements. That led to a few fixes here and there, both for color contrast and for screen readers. For example, the animated greeting on the home page now has a version that screen readers can actually read, which it didn't have before.

---

All in all, I made the website a bit more sober, and I'm quite happy with it. It feels like me, it conveys what I wanted it to convey, and it makes me want to write again, which is always a nice thing. I do even have a list of working titles of posts I want to write. I just need to find how to make it easier to do it! And do it!
