---
date: 2021-11-04T19:57:10.481738993Z
tags:
- meta
categories:
- notes
---

In the process of building my new blogging system with IndieWeb whistles and bells, I was thinking today about the usage of shortcodes. Hugo provides this functionality called [Shortcodes](https://gohugo.io/content-management/shortcodes/#readout) which lets you define some snippets with Go templating and then re-use them in your posts.

I'm using them to quite some extent, mainly with [figures](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/figure). If I do implement something similar, then the rendering process will be 3 pass: first pass the post content with Go templating, then Markdown, then Go templating again. Not sure if the two first steps should be swapped.

I don't feel very happy about that 3-passing scheme as I think speed matters and I'm already afraid of adding too much! Any suggestions?
