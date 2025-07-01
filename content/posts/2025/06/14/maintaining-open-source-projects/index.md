---
title: Maintaining Open Source Projects
date: 2025-06-14T15:51:24.197177572+02:00
location:
  latitude: 51.4459
  longitude: 5.46155
  locality: Eindhoven
  region: North Brabant
  country: Netherlands
categories:
  - writings
syndication:
  - https://bsky.app/profile/hacdias.com/post/3lrl3uuk5nj2v
  - https://news.indieweb.org/en
  - https://fosstodon.org/@hacdias/114682042082736759
tags:
  - open source
  - reflection
---

Last month was Maintainer Month, a month were open source software maintainers are celebrated. A lot of the software in the world - and thus society itself - runs on open source software, which is something not known to a lot of people. During this past month, I read a few posts here and there about people sharing their journey and experience as an open source maintainer, and today I wanted to give my take on it.

<!--more-->

Looking back at my GitHub, the *de facto* place where all my open source code lives, it seems I started contributing in one way or another around 11 to 12 years ago. Some of the first projects I was involved in were widget plugins for WordPress, and plugins for Caddy v1.

Through time, there were projects, experiments, things that come and go. Once I joined Protocol Labs in 2017, I had the opportunity to work in open source projects for a living, which was really nice. The thing about open source, for me, is that it always feels useful. It doesn't matter if you have one user or a million, it is still useful. The users will find you, ask questions, submit pull requests, etc.

## Maintenance Is Hard

If maintaining software is hard, maintaining software out in the open, might be even harder. The most widely used project I ever started was a single binary [File Browser](https://github.com/filebrowser/filebrowser) made in Go. I started this as a Caddy plugin, which later evolved into its own thing.

At the time, I was around 15 and I did not expect anything from it. It was just a silly project on the side, it could be nice if some people used it. In 2018, the project had quite some users, and around 3 000 stars on GitHub. Simultaneously, I was getting very busy with life, university, so I [asked the community](https://github.com/filebrowser/filebrowser/issues/532) if someone was up to maintain the project.

Since then, File Browser has had a few different maintainers and I have mostly been on the sidelines, not paying much attention. The project is now almost 10 years old, it has 30 000 stars, 10 times more than when I was looking for maintainers the last time.

## Hard Decisions

The project is relied on by quite a lot of people. And I admit the project sort of feels like abandoned, the current maintainers don't have a lot of time, and I understand it, since that's also the reason I looked for other maintainers in first place. Personally, this always started as a side project for me to learn Go and explore. I made decisions when building it that were probably not the best, but the community found the project, started using it, and it just... grew... unexpectedly.

This prompted for a [new search](https://github.com/filebrowser/filebrowser/discussions/4906) for maintainers. It also ended up with the decision to enter a maintenance-only mode, where no new features are accepted, and only bug fixes are prioritized. Just like what some people mentioned in the discussion, the most important part is communication, and making sure the status of the project is clear. For this, I updated a few things:

- The README now includes information about the status of the project and what that means.
- Issues can only be opened if they involve a bug. Otherwise, the discussions feature can be used. Issues must also conform to a template and users are not allowed to start a blank issue.
- Disable the GitHub stale bot, which didn't really help the situation considering the state of the project, since no one really had time to take look at the issues, and they ended up being automatically closed, or with many users just commenting once in a while to ensure the issues or PRs were not closed.

I'm not really sure where I want to go to this post, but one lesson I've learned over the years is that communication is important, not just in open source, but in life. And sometimes, hard decisions need to be made. This project is depended on by many, but, if after a few months, no one is still interested in actively maintaining the project, I will need to make a decision on archiving it.

For now, I got someone to help us triage issues. That's already a lot of help, since it allows to separate real bugs from questions or other things. In addition, it may help merging smaller pull requests and bug fixes. I will be paying more attention to the project, but that does not mean it'll be actively maintained.

Just like I said before: it all started as a side project, which I never expected to grow, and I have almost no idea which functionalities have been added since 2018, when I gave the maintenance torch to someone else. However, I still feel responsible for the project one way or another, so I will try to make sure responsible decisions are made.

## One More Thing

Besides this project, I have others, but they are usually less heavy on maintenance, whether because they're smaller scoped, or because they're clearly personal projects, or because they don't have that many users.

It is fun, it is interesting, it is a learning and rewarding journey to be involved in open source projects. It's not always easy, sometimes it can be hard.

To all other open source contributors, thank you! 🙏
