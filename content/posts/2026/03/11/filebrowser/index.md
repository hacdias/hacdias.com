---
title: Update On File Browser
date: 2026-03-11T19:27:39+01:00
thumbnail: image:2026-03-11-filebrowser
categories:
- writings
tags:
- reflections
- open source
- projects
---

Last year, I [wrote a bit](/2025/06/14/maintaining-open-source-projects/) on maintaining open source projects. At the time, I was struggling with one of my most (unexpectedly) successful side projects, [File Browser](https://filebrowser.org/). Today, I want to give an update on it, since I never wrote again about it. I'm hoping that this post helps explaining the current status of the project.

<!--more-->

As many of you know, I maintain several open source projects. Most of them are quite small, personal side projects, where I'm the main user. Those consume personal time. Others, are part of work, such as some of the [Open Wallet Foundation](https://github.com/openwallet-foundation) libraries, and previously [IPFS](https://github.com/ipfs). Those consume work time.

![](image:2026-03-11-filebrowser)
{width="3541" height="2160"}

Over the years, a new sort of project showed up: File Browser. It is in its own category. Back in [2017](/2024/01/12/trending-filebrowser/), it started getting some traction, and increased from 200 to 700 stars in a week. That was an amazing thing for an 17 year old kid. What I did not know is that that project would grow to millions of downloads and over 33k stars on GitHub.

## How Did It Start?

The background of this project explains very well - I think - the reason it is the way it is nowadays. I started File Browser - or File Manager at the time - as a simple plugin for [Caddy](https://caddyserver.com/), when Caddy wasn't yet as ubiquitous as nowadays. After some time, I made it its own project.

I was **15 years old**. Let that sink in. My knowledge and concerns about security were quite low, which explains the flood of [security advisories](https://github.com/filebrowser/filebrowser/security) that have come out of this repository over the past months. The only thing I wanted was a single-binary program that I could run in a server and give me a file browser interface on the web. Simple.

I kept maintaining the project for a few years, until life got in the way. Back in [2020](/2020/01/23/bye-filebrowser/), I bestowed the power to someone in the community to maintain the project. I sort of forgot it during a few years, and checked every now and then to see how the project was going. I just kept seeing the stars - and the issues! - increase.

## And Now?

At some point last year, I noticed the project was not getting much love. I contacted the maintainer and after some back and forth, we decided to look for [new maintainers](https://github.com/filebrowser/filebrowser/discussions/4906), and also the consideration of archiving the project for good. That brought a **lot of opinions**.

After some time, I found two people ([@jniggemann](https://github.com/jniggemann) and [@ramiresviana](https://github.com/ramiresviana)) to help with triaging issues, as well as reviewing PRs. That was nice. After that, I made a decision: I would keep maintaining the project, but purely *maintenance-mode* only. That means a few things:

- Issues are meant to track bugs. Unrelated issues will be converted into discussions.
- No new features will be implemented by maintainers. Pull requests for new features will be reviewed on a case by case basis.
- The priority is triaging issues, addressing security issues and reviewing pull requests meant to solve bugs.

But people keep making PRs for new features. Features that I do really think would benefit the project. Sometimes I have to reject them, sometimes it takes too long to look at them because they are too long, I don't have time, they get out of date, and the creator disappears. In the meanwhile, comments from other people start piling up because they want said feature.

While that happens, security vulnerabilities start pouring, because a software created by the 15 year old Henrique was not the most security conscious. For some security vulnerabilities, I manage to make a fix and ship it. Others are just too complex that I end up opening [an issue](https://github.com/filebrowser/filebrowser/issues/5216) for it, while disclosing the vulnerability. I don't like doing that, but it's best to make the user aware that there are issues, not solve them, and ask for help via an issue, than not do anything.

## Interests Change

I'm no longer 15. I'm 26, and interests change. My life priorities are different, and I still think I give a lot of time to File Browser that I wish I would dedicate to other projects. But I realize it's important to keep the promise of keeping it in maintenance-only mode.

I've realized, over the past months, that I don't have enough bandwidth to review feature requests, ensure they are good and working, while at the same time reviewing bug fixes - there are quite many! With that being said, I'll be updating the README to make it much more clear that new features and the review of feature PRs is not planned.

It's complicated. I understand your frustration, as a user. But just like you, I'm human. I have other interests in my life, other projects I want to dedicate my time to. If someone else wants to take the reins, I'm always up for a chat. It's important that you've contributed before, however!

