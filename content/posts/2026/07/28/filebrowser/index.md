---
title: Goodbye File Browser, for Real This Time
date: 2026-07-28T07:49:21+02:00
location:
  latitude: 51.44598
  longitude: 5.46159
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
  countryCode: NL
  postalCode: 5617AS
categories:
  - writings
tags:
  - reflections
  - open source
  - projects
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mropnbvim2nm
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mropnbvim2nm
  - https://fosstodon.org/@hacdias/116996043027101280
thumbnail: image:2026-03-11-filebrowser
---

Yesterday, I published the last planned release of [File Browser](https://github.com/filebrowser/filebrowser). It includes a few security fixes and a notice about the wind-down of the project. Alongside it, I announced that this was the last planned release and updated the repository so that it's ready to be archived on September 1st. For many people this came as a surprise. For those who've been following the project from close by, probably not. Either way, I wanted to write a bit about the decision and how we got to this point.

<!--more-->

![Screenshot of File Browser](image:2026-03-11-filebrowser)
{width="3541" height="2160"}

## How We Got Here

This isn't the first time I've said goodbye. In 2020, I wrote [*Goodbye File Browser*](/2020/01/23/bye-filebrowser/) and handed the project over to someone in the community. Maintainers came and went. At the end of last year, I noticed the project hadn't been maintained for a year or so, and I took the reins again. It felt better to do and say something than to keep issues and PRs unanswered.

In March, I wrote [*Update on File Browser*](/2026/03/11/filebrowser/): how the project came to be, why it is the way it is, and why I had put it in maintenance-only mode. I won't repeat all of that here, and I'd recommend reading it if you're interested. The TLDR is that I started this project as a 15 year old, more than ten years ago, because I wanted a single-binary browser based File Browser. It became far more popular than I could ever have envisioned -- over 35 000 stars on GitHub -- and it never stopped being code written by a 15 year old.

## Why I’m Stopping

Not much has changed since March. The security vulnerability advisories kept coming. I reviewed each one and write a fix -- sometimes myself, sometimes with Claude, sometimes a better fix than others. For certain features, I decided not to touch them at all, because fixing the real source of the problem would require rewriting the whole feature. Those are documented in the repository, and they will stay unfixed.

What I've come to accept is that this can't be patched into shape. File Browser would need to be rewritten from the ground up, with security and a good API in mind, neither of which was on my mind when I was 15. Sessions are the clearest example: expired tokens keep working in some situations, and logging out doesn't invalidate a token, so if someone stole it, it still works. There are many things like this, and each one is a rewrite of its own.

Doing any of it well also takes time. I've been spending a few hours most weekends going through issues and advisories, and it's just not enough. I can tell the quality isn't what I'd want it to be. To make something better, I'd need much more time than I have.

Mostly, though, the will isn't there anymore. For me this is a project from over ten years ago. It reached its goal, it happened to become popular, and maintaining a codebase I don't think is good doesn't give me any pleasure. Another year of weekends wouldn't change that. People have told me over the past years that I should stop, and they've been right all along. They see the frustration in me.

## What Now

The project is prepared to be archived. No more issues or pull requests can be opened until the archival date. You can still report security vulnerabilities, which will be made public on the day of archival, or before. However, they will not be addressed.

The project is delivered as-is. If you want to keep using it, treat it as any other piece of deprecated software: use at your own risk, don't expose it to the public Internet, and be mindful of the known security vulnerabilities listed on the README and on the advisories page.

I'd rather have you, or any user, using a different alternative. I can't recommend any specific alternative, as I haven't compared them side-by-side, or even used them. What I can point you to is [this post on r/selfhosted](https://www.reddit.com/r/selfhosted/s/8LcLmL1rJ4), where people have been sharing the projects they've been using for quite some time, or check [Awesome Self-hosted](https://github.com/awesome-selfhosted/awesome-selfhosted). That's where I'd start.

---

Thanks to everyone that has ever contributed to the project, and for all the effort that has ever been put here. It's been quite a long journey for something that was never meant to be anything else other than a personal side project.

Goodbye File Browser, for real this time! 👋
