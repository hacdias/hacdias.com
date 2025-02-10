---
title: Thoughts on Personal Websites and Online Identities
date: 2022-12-26T12:33:09.201511323+01:00
categories:
  - writings
tags:
  - indieweb
  - personal website
  - reflection
---

Online services. We all have accounts on those. Be it Instagram, Facebook, ~~Twitter~~ Mastodon, or some other thing that is sucking the life out of us. Even though we are the same physical being behind all of those accounts, we don't always come out the same way to all of them. We look different, we sound different. Maybe that's the nature of what we post there. They are all online identities.

<!--more-->

Then come the personal websites. For those who have one, we usually use it as the centrepiece of our online identity. For those that, just like myself, enjoy dabbling in the depths of the [IndieWeb](https://indieweb.org/), we go even further: we make our website the one and only source of truth and then we [POSSE](https://indieweb.org/POSSE).

Since two years ago, I started putting a lot of things on this website: checkins, itineraries, bookmarks, etc. Some times I wondered if I should remove some posts, some times I actually removed them. As we say in Portuguese, "I change my mind as someone changes underwear". And I keep [wondering](/2022/08/14/should-every-update-be-a-post).

One of the reasons I [moved](/2021/10/31/eagle-move-away-from-hugo) [away](/2021/11/19/farewell-hugo-hello-eagle) from Hugo was to seek flexibility. Instead of finding what I was looking for, I now feel myself looking for simplicity again. The simplicity of a static website. And it's complicated. There is no definite answer. [Martin](https://mew.tv/) said something interesting: "try to imagine yourself 15 years from now, looking back". That is a very interesting thought: what do I want to see in my website in 15 years?

![Art Installation in Glow](cdn:/cafa1d39e56268b7793f01544541085c9d367e67f309cd00505fcf1419dc5f8f "A random photo of GLOW to distract you for a bit")

To be fair, I think that seeing all those checkins, watches, things that I ate or drunk, per day, would be quite cool. Especially if I manage to keep making those posts over time. However, as Martin also said, my website feels too "feedy". And I think that quite describes my feeling sometimes: I look at it and I see a bunch of checkins, or a bunch of watch posts, without any content. It just indicates I was somewhere or I watched something. It feels empty, useless.

The same thing goes for likes and reposts. I have, in multiple instances, deleted all the content from my Twitter account. And Mastodon has a feature that allows your posts to be deleted after a certain amount of time, automatically. That's crazy, but I like it - no pun intended. However, if I post all that on my website, even if unlisted and invisible to the naked eye, I always feel like there's this burden I am carrying in my website, you know? Perhaps it's a weird feeling.

Then there's the safety 🔒 aspect of it. Anyone checking my website can easily see where I was at any given point in time, almost. I don't think that's good. On the other hand, seeing where I was a year ago doesn't pose a big threat. Not that I can think of, at least. Either way, I think there is a trade-off here: either you have more data, but there's safety concerns; or you have less data.

What do I want? I really don't know. A few months ago I posted about if every [update should be a post](/2022/08/14/should-every-update-be-a-post). And I agree with the answer: no, not all updates need to be a post. But at the same time, I would like to be able to display the update. Making every update a post is the easiest way to display the update though.

During this past year, I've made quite a few changes to this website. Perhaps less than in the year before. But let's make a quick recap of the most important changes, as well as some other thoughts I just want to get out there.

**🎈 ActivityPub**: In November, I re-added ActivityPub support to this website. ActivityPub allows this website to be interoperable (at least in theory) with services that implement the protocol, such as Mastodon, Pleroma, etc. It has been running since then and with little problems. There are quite a few [improvements](https://github.com/hacdias/eagle/issues/150) that I have thought about, but haven't had time, or patience, to implement them yet. 

On one side, ActivityPub can be a tremendous effort. The specification can be considered under-specified, and every implementation does a slightly different thing, making it hard to comply with all of them. On the other side, the idea of using your personal website as your main online identity is extraordinary to me.

I have, however, considered another option: simply POSSE to a Mastodon account. Then, I won't have to implement every ActivityPub specification. Right now, I'm divided between a Mastodon account and my own website because my own website doesn't support certain functionalities, such as following others. At the same time, I am unsure whether I would really want to implement it.

**❤️ Likes and Reposts**: This is one of those kinds of content that I feel like they'll have little value for me in the future. If I want to remember something, I will make a [bookmark](/bookmarks). A like, or a repost, is just a temporary agreement with something that someone else said. I decided that, from now on, to keep likes as unlisted, and possibly reposts. They will show up on their platforms, but will not be listed on my website.

**🎶 Scrobbles**: I recently ditched the scrobble posts. Instead, I am planning on writing a "Year In Music" during January. If there are any albums, or any songs that, for some reason, I feel like writing about, then I will write a post about it. But I won't be posting individual scrobbles anymore. That was an easy decision though: scrobbles are, after all, quick actions, they don't last long and they won't make an impact just by themselves.

**📚 Reads**: For each book I read, I write a post about it with a small review, some notes and quotes, and a rating. That is what I've done lately. Unfortunately, I have no notes or ratings from books I read years ago. Some don't even have dates! I just know I read them. When? Who knows?

**🎬 Watches**: I used to do something similar for movies and shows, but using [Trakt](https://trakt.tv). Trakt is a very nice website that lets you track which movies and episodes you've watched. Before, I used a tool I built to import each "watch" event as a watch post in my website. But that became too many, specially because every single episode of every season was tracked individually.

Now, I am tracking the things on my website and on Trakt separately and I no longer have individual posts for each watch event. I still don't know how to feel about it. I have double the work, as I track it on two places at once. At the same time, I haven't figured out a good way to check with Trakt API "is this season finished?". Decisions... decisions...

---

The year is ending now and these were just some thoughts about personal websites and online identities I wanted to close this year with. I wish I had more answers than questions. After all, we should do what feels right to us. Yet, I don't know what feels right for this website.

I hope you had a great journey with your website this year!
