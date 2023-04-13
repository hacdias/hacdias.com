---
description: Replied to a post on jlelse.blog
date: 2022-12-15T14:54:29.918681558+01:00
noIndex: true
location:
  latitude: 51.44448
  longitude: 5.45997
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/micro/2022/12/2022-12-15-vyyit
  content: "I think the frequency of big changes to my website decreased the last
    years. I’m running GoBlog for more than two years already and when adding or refactoring
    things, I regularly find code I haven’t touched in a long time. But because some
    other people use GoBlog as well, I try not to break things and make features opt-in.
    So if I don’t want to use them anymore, I can just disable them. \U0001F604 And
    before implementing something new, I try (that isn’t always working though) to
    think twice whether I really need it."
  published: 2022-12-15T13:47:46Z
reply: https://jlelse.blog/micro/2022/12/2022-12-15-vyyit
---

I think that's good. It means you're reaching a point where you're mostly satisfied with what you have. I've still been doing some big changes lately, usually revolving around _removing_ code. I personally decided to add a big disclaimer on the readme of the repository saying I wouldn't guarantee support for others because I knew I was going to want to change things 🤣

Recently I've been thinking about the possibility of making Eagle an incremental static website generator. So generate everything statically and then incrementally update when some post is updated. With this, I could remove caching and stuff. At the same time, I could guarantee speed and portability if needed. This was actually something I wanted in the beginning but at the time I didn't think it would be easier to implement.
