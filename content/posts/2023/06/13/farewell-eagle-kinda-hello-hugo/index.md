---
title: Farewell, Eagle (kinda)! Hello, Hugo
date: 2023-06-13T21:54:05.361338989+02:00
categories:
  - articles
tags:
  - meta
  - blog-engine
  - personal-website
---

In April, I squeezed into my monthly [article](/2023/05/01/recently/) that I had come back to Hugo. However, I did not give much context about it. And to continue the "farewell" post saga, here it is. Why did I move back to Hugo? What caused that decision, and how hard was it?

<!--more-->

Back in 2015, I [moved](/2015/08/12/farewell-wordpress-hello-hugo/) away from WordPress and brought Hugo into the scene. At the time, it was quite an easy decision: I thought WordPress was simply overcomplicated for what I was building, and also... slow. With a static website I could do everything that I wanted at the time.

Then, in 2021, I moved [again](/2021/11/19/farewell-hugo-hello-eagle/), but this time from Hugo to my custom CMS-like software called Eagle. Eagle has fully backed my website from November 2021 up until April 2023. It was quite a nice experience, but not without its challenges.

Eagle was built mostly out of frustration with the _status quo_ and the fact that a lot of things that I wanted to do were harder because I was using Hugo, a static website generator. Most of these features were IndieWeb-related. However, they were still possible with Hugo, just harder.

When I moved out of Hugo, I had to convert a bunch of templates and, at the time, I immediately noticed that there were some features from Hugo that I enjoyed and found extremely useful, but I deemed too complicated to port to the renderer in Eagle. And so I did not move those things.

During this past year and a half, I've made many changes in my website, from visuals, to posts, to the backend, to integrations with other services. And during this time, I would take notes of things I wanted to do, but that I would decide not to, or they were just harder because I was using my own rendering functions.

![A Snapshot of How This Website Currently Looks](cdn:/524b58c66e756ff1c4afa2f72485429f3328464cb8f4751b9c13abd089d33640)

After quite some frustration, I started noting down every time I had the thought: "maybe I should go back to Hugo". In addition, I removed quite a lot of the interactive things of my website that were made easier by Eagle, namely showing Webmentions, ActivityPub, Micropub, etc. With the list of thoughts increasing, and the removal of features increasing, I decided to go back to Hugo.

Do I regret it? No. I have an almost-static website. I still have Eagle. Eagle still provides some functionality that is completely integrated in the website via some special templating I did with my Hugo templates. I can edit posts directly on the website, I can moderate entries on my [guestbook](/guestbook), and create new posts. I also still support IndieAuth, which I wish to see more widespread.

I am happy I moved from my rendering system back to Hugo. I still use Eagle for some special handlings. The only thing I could perhaps say I might miss is the live preview of draft posts. But I can always run `hugo watch --build-drafts` on my laptop if that's important.
