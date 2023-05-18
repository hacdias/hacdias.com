---
date: 2022-06-14T23:19:28.018247067+02:00
tags:
- indieweb
- meta
categories:
- notes
location:
  latitude: 51.43244
  longitude: 5.48616
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
---

Over the past few days, I procrastinated quite a bit instead of working on my thesis. I have this huge peaks of performance mixed with high procrastination. I guess this happens somewhat to most people. Either way, while procrastinating I added quite some new features to this website, and improved some already existing things, both visually and internally.

- Fixed the values in `<title>` which were wrong in some pages. I also changed the website name to be more descriptive.
- Fixed the truncation of text and the way I add the ellipsis when generating excerpts from longer posts to fit in the descriptions.
- Added image resizing on my [media endpoint](https://indieweb.org/micropub_media_endpoint) using [ImgProxy](http://imgproxy.net/), which I run locally in my VPS and then upload the resized images to [bunny.net](https://bunny.net/).
- Added Reddit integration in this website, both using Reddit's API for upvotes (likes), comments (replies) and new posts. For the webmentions, I am using [brid.gy](https://brid.gy/).
- Added support for channels so I can hand pick which sections to put my posts when using Micropub clients.
- Added support for video posts, like this [example](/2019/12/20/quick-dive-into-dweb-ipfs).
- Added support for audio posts. I don't have an example yet as this is a feature that I think I would more likely use for personal use. However, I am still on the fence on how to protect the media files. Right now I support private posts, but that's it: the post itself cannot be accessed, but what's the best way to protect the media?

I also fixed some other things and make some slight visual updates to be more consistent.
