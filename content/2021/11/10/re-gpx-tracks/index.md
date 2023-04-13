---
description: Replied to a post on jlelse.blog
date: 2021-11-10T17:40:31.292946556Z
noIndex: true
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/thoughts/2021/11/gpx-tracks
  content: On my blog, I’ve had the ability to link posts to a location for some time
    now. There is also a map that shows all posts with a location. I have now extended
    this functionality. Now I can also store a GPX file in the metadata of a post,
    which is then rendered below the post on a map. Also the movement duration and
    distance is displayed. An example can be found here. First I experimented with
    a library to create static map images, but at some point I rethought my implementation
    and switched to a Leaflet-based solution after all. This makes the whole feature
    much easier and allows me to better reuse existing components. Let’s see how I
    can develop the feature further. One goal is to display the tracks on the combined
    map as well. It might also make sense to cache the parsed GPX information so that
    the GPX file doesn’t have to be re-read over and over again.
  published: 2021-11-10T17:21:30+01:00
reply: https://jlelse.blog/thoughts/2021/11/gpx-tracks
---

That's really cool! It reminds me that I would like to implement something similar in the future... So I shoved it in the gigantic [list of things](https://github.com/hacdias/eagle/issues/34) I would like to do after I move away from Hugo - almost there!
