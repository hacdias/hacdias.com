---
title: Organizing My Website's Media Storage
date: 2025-06-20T16:22:33.246849368+02:00
location:
  latitude: 51.44563
  longitude: 5.46154
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
tags:
  - meta
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3ls2ag3k5cf2c
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3ls2afww263f4
  - https://fosstodon.org/@hacdias/114716138419079860
  - https://news.indieweb.org/en
---

It's been a while since I made a "large" infrastructural update on this website. So, I made one. It has been on my plans for some time already, but I hadn't yet had the time to do it: streamline the storage of media objects, such as photos, videos, PDFs, or anything else.

<!--more-->

Over the years, I have been using [Bunny](https://bunny.net/)'s storage to store larger items that are uploaded to this website, as well as resized versions of photos. At the beginning, I was just SHA-256 everything and that'd be the name of the file. Later, I decided to allow myself to choose the names of some files. At some point, I started naming everything `YYYY-MM-name`, and, more recently, I just added the day to be closer to the URLs of posts.

All of that meant that the file names in that storage were a mess, a mixture between random non-descriptive hashes, files with year and month, and files with year, month and day. For me, that is not organized enough. In addition, I have been wanting to optimize and improve the way photos are displayed on this website, so I just decided to do everything now.

## Directory Structure

The new structure is quite simple, much more streamlined and it no longer gives me a headache. All the media files are now stored at the root directory of the storage, and their names start with `YYYY-MM-DD`, followed by a slug. This slug is either descriptive and manually set by me, or just the same slug as the post, and automatically created when posting via Micropub.

Inside the root directory, there are two different directories: `emoji` and `image`:

* `emoji` where I store the images used to replace the emojis on this website in order to make it consistent across multiple OSes. For this, I use [twemoji](https://github.com/jdecked/twemoji), a project that started at Twitter, was abandoned after the name "Twitter" left our Earth, but has been continued by the community.
* `image` contains resized versions of large photos in both JPEG and WebP formats. 

And that's it. Very simple.

## Image Optimization

All images larger than 100 KB are resized into three different widths: 600, 900 and 1800 pixels. These are very "flexible" measurements of half of the width of this website, the width of this website, and double of the width. They are not exact measures, but I found them to be flexible enough for high resolution displays and to show as thumbnails where needed.

In addition to the resizing, every version if available as both a JPEG and a WebP. All of these images are displayed using a `<picture>` element with multiple `<source>`. This allows me to tell the browser: here are the photos in these formats and widths, please choose what's best for what you're doing!

```html
<picture>
  <source srcset="https://media.hacdias.com/image/600/2025-06-19-banana-island.webp 600w, https://media.hacdias.com/image/900/2025-06-19-banana-island.webp 900w, https://media.hacdias.com/image/1800/2025-06-19-banana-island.webp 1800w" type="image/webp">
  <source srcset="https://media.hacdias.com/image/600/2025-06-19-banana-island.jpeg 600w, https://media.hacdias.com/image/900/2025-06-19-banana-island.jpeg 900w, https://media.hacdias.com/image/1800/2025-06-19-banana-island.jpeg 1800w" type="image/jpeg">
  <img src="https://media.hacdias.com/image/1800/2025-06-19-banana-island.jpeg" width="7555" height="5037" loading="lazy" style="cursor: zoom-in;">
</picture>
```

I already did something similar, but then I had four different widths: 250, 500, 1000, 2000 pixels. Those were not that logical in the context of this website, and simplifying doesn't hurt. However, that's not all that I have changed.

You might've noticed the `width` and `height` parameters. These allow me to prevent jumpy pages: since the browser knows the dimensions - and therefore the aspect ratio - of the images, the `<img>` element can already take exactly as much space as necessary.

This also means that only images that need to load (see the `loading` attribute) will actually be loaded: because the image element is already occupying the right amount of space, the browser can actually just load the following images.

Before, I also had the lazy loading enabled, but what happened was that the browser would just load almost everything at once because of the lack of aspect ratio, everything was condensed at the beginning of the page, and you'd see a lot of "jumping" around.

---

Overall, these updates have improved the performance of this website in terms of loading, especially if you're looking at the photos. And, maybe even more importantly, given me a bit more of peace of mind in terms of the media organization.
