---
title: People Don't Read Docs
date: 2026-11-10T09:00:00+01:00
categories:
  - writings
tags:
  - programming
  - open source
  - reflections
  - file browser
  - ipfs
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mzwxvl5k22ke
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mzwxvl5k22ke
  - https://fosstodon.org/@hacdias/117591087904589127
---

Through the years, I've learned many things, and one of them is that people don't read documentation. And even when they do, there can always be misunderstandings. But today I want to focus on one specific part of documentation that people don't read: changelogs, news, upgrade notices, all of those little things you should pay attention to when updating software.

<!--more-->

Just like anyone else, I'm definitely guilty of this too. I don't read all the changelogs of all the tools I update. There's just so much text nowadays, so many fixes, so many features. I always try -- and that's where the catch is -- to read the breaking changes, though, especially for things I rely on daily.

Why am I talking about this today? I've thought about it more than usual after having to plan some releases around migrations at work. It made me think of something from when I worked on IPFS, years ago, that has stuck with me.

## The Comment

In 2023, I [opened a PR](https://github.com/ipfs/kubo/pull/9743) to delete the writable gateway. It doesn't matter what that is, just that it was a feature and that we wanted to remove it. We had first deprecated it with a warning, and one release later I wanted to remove it fully. My reasoning was to not generate more confusion:

> I think that keeping the option there… could generate confusion, since it would be between a deprecated and removed state that would not be clear.

In the review, [lidel](https://lidel.org/), a coworker of mine at the time, wrote:

> People don't read docs, and for sure they dont read comments in the code. There is no way someone already using this knew we deprecated it at some point. Deprecation notice was added only so the NEW people will not start using it for NEW things.

He also pointed out, and correctly, that a lot of people just run it in Docker and they never look at the logs, so the warnings are virtually useless to them. The only safe option was to make it fail loudly. So we kept the option, removed the functionality, and made the node refuse to start with a very clear error if the option was still enabled.

I was convinced. I think this approach worked well for the type of software it is. In other scenarios, you'd probably not want this behavior though. I don't know what happened to the option after that. After some time, it was [removed completely](https://github.com/ipfs/kubo/blob/master/docs/config.md#gatewaywritable). Cleaning up is also of utmost importance.

## Loud Doesn't Always Work

But loud doesn't always work. Even before that, I had to remove a feature from IPFS Desktop. It was one of the first things I worked on at Protocol Labs. The idea was that the Electron app could install IPFS for you and add it to your PATH. In and of itself, that seems like a very good idea: the user installs this desktop app, it just works out of the box and you get the command line too. But as with all good ideas, there were disadvantages, and at some point we [removed it](https://github.com/ipfs/ipfs-desktop/pull/1948).

The biggest problem was actually where we were putting this file. On macOS and Linux, the app put a symlink at `/usr/local/bin/ipfs` that pointed to a script inside the app. And if there was already an `ipfs` there, it backed it up and replaced it. But that folder doesn't belong to the app. It's shared with everything else on the system, and that's where the problem was. If we had added the directory with the IPFS binary to the PATH, by appending it to the shell settings, it would have been different. The problem there is that you have to detect which shell the user has and update it automatically, while we could be sure `/usr/local/bin` was always on the PATH.

So when we removed the feature, we couldn't just delete the file. By then, someone might have put their own `ipfs` there, maybe via a package manager, maybe manually, and we'd break their setup without them knowing. We also couldn't just restore the backup, because maybe that backup was 10,000 years old and wouldn't work well anymore. So in the end, we just left `/usr/local/bin/ipfs` where it was and only showed a one-time message pointing to the docs. On Windows, it was just a PATH entry pointing to the app's own folder, so there we could remove it safely. In retrospect, we should have used that same thinking for macOS and Linux.

Sometimes, users don't even know they're users. In 2024, we wanted to [remove an API from the gateway port](https://github.com/ipfs/kubo/pull/10352), and lidel mentioned that he suspected it was used by various monitoring tools. And indeed, it was used even by ourselves, in our own gateway infrastructure, so we had to update that first. People start using something, and using it, and using it, and no one realizes how many people are using it and for what. You can't just safely remove things.

## Winding Down File Browser

Over the years, I've applied these lessons many times: most recently on the [command execution feature](/2026/10/27/command-execution/), and also while winding down File Browser.

Instead of fully removing command execution and failing if it was enabled, I just changed the behavior, because I realized some people actually needed it. I would've removed it if I had been releasing a major version, and that would have been my preferred option. In this case, I said: if you really need it, you can [turn it on again](https://github.com/filebrowser/filebrowser/issues/5199). The way users learn about it is just by upgrading and seeing a behavior change. It's in a similar spirit, but a bit different.

At some point, I also changed some environment variables since they were not in line with the CLI flags, but always kept the old ones working and made sure it was clear that you should update them. I was planning to remove them after some months, and that's why there's still a comment in the code saying they'll be removed after July 2026.

In the meantime, the project was archived in September, and I completely forgot about it. That's another lesson: putting these TODOs in the code is probably not the best way. If you actually want to keep to a schedule, there should be some sort of reminder to do it later. It's not a problem to keep them for longer, though. The comment meant they could be removed after that time, not necessarily on that date.

For the archive itself, I put the notice almost everywhere: a [blog post](/2026/07/28/filebrowser/), the README, the changelog, the startup log, and the settings page for the admin. The settings page was where I actually wanted it, because people who use this will eventually go into the settings and see it. I didn't want a banner for everyone, because that doesn't make sense: people who aren't maintaining the installation don't need to see it. And if it were visible to everyone, I'd have had to release yet another version at the end to make it more subtle, because people can still use it, and that's fine, they should just know they shouldn't be. It had to be subtle enough that only the people who can actually do something about it see it, but big enough that those people do.

This was one of the cases where someone in the community did most of the work for me, since the release notes [ended up on r/selfhosted](https://www.reddit.com/r/selfhosted/comments/1v85isv/file_browser_is_being_archived_on_20260901/), and I think that's where it spread the most.

---

Of course, all of this depends on the project's scale. For example, at some point I [changed the module path](https://github.com/hacdias/indielib/issues/19) of `indielib` in Go, and I just fully rewrote the history with the new import path. It wasn't used by anyone else, or only by one or two people I knew and could tell. In that case, it was fine. It was a new project, a small thing: just break it fast. But when you have a lot of users, migration is important, communication is important, and thinking about it is important.

The bottom line of all of this is that people don't read docs, so we should think and act accordingly. If we want to remove features, we should remove them gradually, then fail, and set deadlines. Make the changes visible to the people that matter. Communication isn't always enough, but we should try to do our best. Of course, it doesn't always work out. But if we assume that people don't read docs, we'll have a better gut feeling for what's needed to reach the people who should actually receive this information and act on it.
