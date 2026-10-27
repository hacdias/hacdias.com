---
title: Post-Mortem on Command Execution in File Browser
date: 2026-10-27T08:00:00+01:00
categories:
  - writings
tags:
  - file browser
  - security
  - programming
  - open source
  - go
  - reflections
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3mytnzfhr22ae
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3mytnzfhr22ae
  - https://fosstodon.org/@hacdias/117511582771100194
---

Back [in July](/2026/07/28/filebrowser/), I made the decision to finally archive File Browser, and I won't go over it again. In this post I want to address one category of features of File Browser that was the root of many of the security advisories that have been disclosed in the past year: command execution.

<!--more-->

When you hear that, bells start ringing immediately, since it sounds way too much like "remote code execution", a very well known category of security vulnerabilities. I'm not a security specialist, so take all my opinions with a grain of salt.

## How It Started

As I've mentioned in previous posts, File Browser did not start as a file manager. It started as a Caddy plugin for editing Hugo websites in the browser. In March 2016 I added a small box to its admin page where you could type a `git` command. You'd be able to edit a post and then very easily commit and push it without having to open your own terminal.

A few months later, that box became a more general terminal-like feature with a list of allowed commands. At the time, the defaults were `git`, `svn` and `hg`, which says a lot about what the feature was meant to do!

Later that year, a new feature called "hooks" was released. The idea was to be able to automatically run a command before or after a file was saved. I don't remember exactly why I wanted it, but it might've been related to regenerating the Hugo website after editing a post. Later the hooks also covered uploads, copies, renames and deletes.

I was 16 or 17 at the time, and the only users were me, or people like me: an admin of their own server, probably running it on their own server or local network. So it did not feel dangerous.

## The ✨ Assumptions ✨

Looking back, the features rested on some assumptions that I should've not taken for granted, but you'll understand why soon:

1. The people allowed to run the commands were trusted.
2. The list of allowed commands limited what they could do.
3. The folder a user was confined to also applied to their commands.

The allow list was a security boundary, or at least in spirit. In practice, it wasn't bulletproof. Of all these things, that's probably what I got the most wrong. But also: I might've known that at the time, but because I assumed **1**, it wouldn't have mattered much.

## Growth, Growth, Growth

The project ended up growing a lot over the years. Other maintainers and contributors added features, and so did I. I also wasn't the maintainer for a few of those years, so I don't have the context for every change. None of the changes looked unreasonable on their own, but they touched the command execution features in many ways.

**Who is running the commands?** At some point, the project gained self-signup and proxy authentication. New users got the default permissions, and for a while that included the permission to execute commands and the default command list, through [signup](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-x8jc-jvqm-pm3f) and later through [proxy authentication](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-7526-j432-6ppp). This breaks the first assumption: if users can self-signup, they cannot be automatically trusted anymore.

**The not-so-smart allowlist.** The allowlist matched with a regular expression, so allowing `ls` [also allowed `lsof`](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-w7qc-6grj-w7r8). That one was reasonably easy to fix. The rest weren't. Running a non-allowed command becomes trivial once you allow a command such as `find` which allows executing whatever you want via the [`-exec` flag](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-3q2w-42mv-cph4). You could argue that this is the responsibility of whoever configured the allow list, but then it still needs to be very clearly communicated. And when a shell was configured, only the first word was checked while the full string went to the shell, so `ls; id` [passed the check](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-8c9q-7855-wfxq).

**The scope ain't scoping.** A command ran as the server process. The folder a user is limited to in the interface means nothing to a command like `grep`, which can read [anything the server can](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-hc8f-m8g5-8362). The app's permissions only ever existed within the scope of *browsing* and *managing* files.

**Variable substitution.** This is a good example of how features combine and how things start to break. Hooks always passed the file name and other values as environment variables, which is a safe way to do it. Then a shell option was added, so hooks could use pipes and other shell functionality. Later, values like `$FILE` were also substituted directly into the command text on top of the environment variables.

Neither change was dangerous alone. Together, with a shell-based hook, a file named `; id #` [turned into code](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-jvpw-637p-h3pw). Hook-based authentication, which was added later and never documented, had the same pattern with the username from the login form. That made it a [pre-authentication RCE](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-m93h-4hw7-5qcm) for anyone who had configured it with a shell. We fixed that by [removing the substitution](https://github.com/filebrowser/filebrowser/commit/34ae34e), which should've never been there in the first place, not in that way.

**When turning off keeps it in standby.** Just like televisions, turning off the feature was more like putting it into standby than turning it completely off. The endpoint was still registered and [reading a whole message](https://github.com/filebrowser/filebrowser/security/advisories/GHSA-39cx-23x9-5c8p) before checking whether commands were allowed at all. Hook authentication didn't check the disable flag either.

Honestly, every time I read one of these disclosures it didn't really surprise me. I think that if I sat down to go through all the code of File Browser and audit the command execution feature, I would have ended up scrapping it all. As far as I know, there's not really a good way to address this from the application point of view, especially the allow list. A user or OS-level sandbox that can only run the given commands would be much safer.

## Shut It Down!

June last year we [disabled the feature by default](https://github.com/filebrowser/filebrowser/issues/5199), including on existing installations, in v2.33.8. Anyone who wants it can turn it back on with `--disable-exec=false`.

We didn't remove it, and I still think that was right. Disabling is easy and reversible. Some people do want this feature and run File Browser in a way where it's fine for them: a single-user instance behind a VPN, on a local network, or behind other authentication. Removing it purely for security reasons would also have meant removing a lot of other things in File Browser that weren't built the most secure way either. A full rewrite was what it needed, and there wasn't time for that in maintenance mode.

## If I Were To Build It Again...

I wouldn't build the terminal-like feature again. Shell access with a text box in front of it doesn't give you security. If I were to add shell access, it'd be unrestricted shell access, only for admins. No allow lists, no regex. The feature is simple: this is a shell, this gives you full access to the system. And all endpoints must be well tested to ensure that there's no leaks, even when the feature is disabled.

Hooks might've been a good feature, but in a smaller form. Firstly, only admins can configure them, since it technically gives shell access in some form. Secondly, the hooks would need to be run with [`exec.Command`](https://pkg.go.dev/os/exec), which deliberately doesn't invoke a shell. Thirdly, file names, usernames, everything else goes as an environment variable, never via plain substitution.

---

In retrospect, I think it is completely understandable that a 16- or 17-year-old is not building a piece of software thinking "what if these people I've never met start using this feature?". I was building it for myself, and never expected it to grow. But that's also how you learn. It also shows that testing and audits are important, even on public codebases. The code was there all along, contributions came, were approved and merged, while changing the big picture.

So, my two pieces of advice: when building in public -- which I think is a very good thing to do -- be mindful that other people may end up using whatever you're building. And if you don't want to be mindful about that, communicate it very clearly.
