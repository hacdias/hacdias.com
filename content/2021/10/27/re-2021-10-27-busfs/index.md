---
description: Replied to a post on jlelse.blog
date: 2021-10-27T08:31:19.327263174Z
lastmod: 2021-10-27T08:37:23.240873987Z
noIndex: true
tags:
- meta
context:
  name: Jan-Lukas Else
  url: https://jlelse.blog/micro/2021/10/2021-10-27-busfs
  content: Awesome! Do you still use Hugo as underlying static site builder? And how
    do you integrate the admin bar into your site? Some JS magic?
  published: 2021-10-27T10:30:43+02:00
reply: https://jlelse.blog/micro/2021/10/2021-10-27-busfs
---

> Do you still use Hugo as underlying static site builder?

Yes, I do. I still find it fast enough and it's not introducing extra complexity right now.

> And how do you integrate the admin bar into your site? Some JS magic?

No JS! I thought about that at first, but then I thought: well, I know when the user is logged in so it shouldn't be that hard.

What I did was to [wrap](https://github.com/hacdias/eagle/blob/86fb5489e6ee3488692377d74f7fd64493841b32/server/static.go#L76-L102) the `http.ResponseWriter` when the response file is HTML and the user is logged in, and inject a `<div>` with the admin bar before all the content. It's technically not valid HTML - I think - because it goes outside of `<html>`, but no browser complains about it and works perfectly.

I'm not sure if it's the most correct strategy, but it's working for now! :D
