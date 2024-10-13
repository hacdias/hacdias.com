---
title: We Need Website-Level Color Scheme Preferences
date: 2023-11-25T16:16:31+01:00
categories:
  - articles
syndication:
  - https://fosstodon.org/@hacdias/111471854269467060
  - https://bsky.app/profile/hacdias.com/post/3kezies55uv2u
tags:
  - browsers
  - standards
  - user agency
  - web
---

Since a [few months ago](/2023/07/31/recently/), my website has a dark theme. So today I decided to casually open a PR to the [darktheme.club](https://darktheme.club/) website. On this PR, it is asked what mechanism is used to enable the dark mode. I selected JavaScript. It is unfortunate, but it is a reality.

<!--more-->

Why is `prefers-color-scheme` not enough? The problem with that CSS query is that there is no native way to override it on a website-basis in most, if not all, web browsers. I want to use it, but then the user does not have a choice on whether they want to use the website in dark, or light mode.

I also want to add that it is not because the user's OS is set for light or dark, that it necessarily means the user wants to read websites in the same settings. This seems like a problem, but I haven't seen anyone complaining about it. At least not until I searched.

It turns out that [Jim Nielsen](https://blog.jim-nielsen.com/2022/browser-level-color-scheme-preference/) has written a post about this exact same problem last year. And nothing seems to have changed in the meanwhile. From my observation, the following is the current state of things:

- **Safari**: there is no option to override on browser or website level. It does seem to be [implemented](https://github.com/WebKit/WebKit/commit/75734bd35fa1a210f24ac0ab3502177ece7002ab), but there is no user facing setting that allows me to define my preference.
- **Chromium**: there is no option to override on browser or website level. There is an [issue open](https://bugs.chromium.org/p/chromium/issues/detail?id=1046660) to have a general browser override, but not necessarily per website. That is a start, but not enough.
- **Firefox**: there is an option to override on a browser level, but not yet on website level. I could not find any issues for this specific case, so I opened an [issue](https://bugzilla.mozilla.org/show_bug.cgi?id=1866637).

Overall, this does not seem like something we'll be seeing in the coming months. However, I do hope this becomes mainstream on most mainstream vendors, such that we no longer need to rely on hacky workarounds to be able to provide a theme toggle.
