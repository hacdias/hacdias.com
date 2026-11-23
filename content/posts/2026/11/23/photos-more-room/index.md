---
title: Giving My Photos More Room
date: 2026-11-23T14:00:00+01:00
categories:
  - writings
tags:
  - meta
  - personal website
  - photography
  - web
  - browsers
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3n2y6pybp22ts
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3n2y6pybp22ts
  - https://fosstodon.org/@hacdias/117665877508284711
---

A week or two ago, I decided to finally improve some small things around this website when it comes to photos. There were two things that were bugging me but, due to time constraints, I hadn't done them yet. But what are these things, you may ask. The first one is a pre-computed masonry layout for my photo archive, and the other one is improved photo lightboxes.

<!--more-->

# Pre-Computed Masonry Layouts

The first improvement was tackling the [photo archive](/photos/archive/) in order to properly show the full photos. Before, I was using `grid-lanes` where available, otherwise defaulting to a grid of squares, just like the apps we know. Unfortunately, the only browser that supports `grid-lanes` out of the box is Safari, so most users were seeing cropped photos.

While the [support](https://caniuse.com/?search=grid-lanes) is improving, it's still far from being [Baseline](https://developer.mozilla.org/en-US/docs/Glossary/Baseline/Compatibility). Chromium and Firefox have it behind a flag. Seeing Paul's [Photostream](https://paulstamatiou.com/photostream) made it clear that it was possible to do this without JavaScript. The trick is computing all photo positions beforehand, such that you can automatically build what looks like a grid with absolute positions.

![The Photo Archive](image:2026-11-23-photos-more-room-1)
{width="3392" height="2506"}

Fortunately, I already know the dimensions of all photos. That is something that I added a few months ago in order to be able to properly lazy load images and prevent "page jumping" when they get loaded. So the hard part was technically already done. For the rest, I asked Claude to help me generate these positions.

My layout made this slightly simpler: I have at most 4 columns at the widest layout, and at least 1 column. They are always at least 10rem, except on very small screens. At build time, my gallery Hugo template places the photos for each column count in the shortest column that is rendered for that column count.

The template adds a few inline custom properties to all of the images: `--r` (the aspect ratio as a float) and `--xN`, `--yN` and `--mN` for each column count `N`. The grid then gets `--hN`, the height of its tallest column. In CSS, I then use a container query that picks the `N` depending on the width and maps the coordinate properties to the right positioning. The best part is that browsers that support `grid-lanes` will just skip all of this and do the calculations themselves.

There are some disadvantages to this approach compared to just doing the square grid, of course. Some browsers don't support container queries, but they are Baseline and it wouldn't be the only CSS feature I use that isn't 100% supported. This approach also adds quite a lot of styling and extra HTML that would otherwise not be necessary.

I do hope that this is no longer needed in the near future and that `grid-lanes` becomes Baseline, but this sort of browser update happens quite slowly. The bright side is that Safari already has it officially and Chrome and Firefox have it behind a flag. A year or so ago, that wasn't the case!

# Improved Lightboxes

Another update I made was improving the lightboxes around the photos on this website. Until now, clicking on a photo would show a larger version of it, but it wasn't necessarily a higher-resolution version of the photo. And, when it was, you'd see an empty box until the photo loaded. I fixed some things.

The first thing was to show the old, lower-resolution photo until the higher-resolution version fully loaded. This creates a better experience and makes it feel like a progressive update. The other update was adding navigation. You can now navigate through all photos on a page via the lightbox. Before, you had to close it and open another one. These are the small things that make the experience much better than it was.

![Lightbox Photo Preview](image:2026-11-23-photos-more-room-2)
{width="3392" height="2506"}

On the photo archive, I went a step further and kept the name of the post, the date and a link to the post under the photo during the display. This allows you to get more context about the photos you are seeing, which is especially important in the archive, where you just see a massive grid of photos.

---

I'm quite happy with the changes, and I feel they give the photos more space to be and shine. I hope you enjoy navigating through my [photo archive](/photos/archive/) and that the new lightboxes allow you to fully enjoy the photos!
