---
description: Replied to a post on jlelse.blog
date: 2020-03-06T11:57:08.634Z
noIndex: true
categories:
- notes
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/micro/2020/03/photos-workflow
  content: I use BunnyCDN as storage for my Micropub media endpoint, where I upload
    all the photos and other media files I publish on my blog. When I upload a new
    photo the media endpoint first uploads the original file with the name of it’s
    SHA-256 hash value (so when I upload the same file multiple times, it doesn’t
    create multiple files). When I upload an image (JPEG or PNG) it also gets optimized
    and resized to a maximum width of 2000 pixels using the Tinify API (and then uploaded
    to BunnyCDN too), doing that significantly reduces the file size of the images
    displayed on my blog. It would be probably awesome to also serve different formats
    based on the Accept HTTP header (WebP for browsers that support it) or different
    sizes, but I decided I want to hold my perfectionism (and the complexity) in check
    and settle for using just one optimized file version in the original file format.
    If at some point all browsers support WebP, I might consider using only WebP files,
    but until then it still takes time. At the moment I don’t backup the files from
    BunnyCDN (I trust that they - or I - don’t accidentally delete them), but I could
    probably setup a cron job to regularly copy new files via FTP from their storage
    to another storage.
  published: 2020-03-06T11:58:25+01:00
reply: https://jlelse.blog/micro/2020/03/photos-workflow/
---

That's a great way to put it. Thanks for sharing how you're doing it. I'm using the HTML [`picture`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) element to serve pictures in different formats and sizes. Right now, besides the original, Hugo's generating two more that are compressed and resized.

With the new Photos page, I want to create a gallery view so I would also need to have a thumbnail... And this complexity of generating all this different kind of pictures is what's stopping me now to do it the way you're doing. I'd certainly also want to have WebP versions of them. I just don't because Hugo does not support converting to WebP yet.

This is definitely not impossible, it's doable. But is it the best option? What if I want to suddenly change the sizes in the gallery? I'll need to regenerate everything... Maybe thinking too far ahead.
