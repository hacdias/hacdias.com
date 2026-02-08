---
title: Open Sourcering My Website
date: 2023-11-18T11:17:52+01:00
categories:
  - writings
tags:
  - git
  - meta
  - open source
  - personal website
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3medspwp5zz2h
  - https://fosstodon.org/@hacdias/111431044010749799
thumbnail: image:2023-11-18-noisy-glow
---

For some, it may come as a surprise that my website's source code is not open-source. That hasn't, however, always been the case. Before I [fully switching](/2021/11/19/farewell-hugo-hello-eagle/) to my custom CMS - named Eagle -, it did use to be open-source.

<!--more-->

![Setting The Vibes™](image:2023-11-18-noisy-glow)

With Eagle, I started introducing new features that could involve sensitive data, such as private posts, or even storing unmoderated comments in the Git repository. Both were a bad idea.

Another issue with my repository is that Eagle would create a commit for every. single. change. The repository has now over 22 000 - yes, twenty two **thousand** - commits. That's ridiculous. I have since stopped storing anything that could be sensitive in the repository.

In addition, Eagle now does a single commit a day unless in some specific cases. Both situations are now highly improved. So I wanted to make it open-source again. I don't really know why, but there's always this nagging voice in the back of my mind saying that it should be open-source.

I started by asking on [Fosstodon](https://fosstodon.org/@hacdias/111348601666828039) for some advice. I ended up going with a slightly modified option **a**: a new repository with all commits since I moved back to Hugo. But don't you think it was that easy. I still had a file with unmoderated Guestbook comments. And those have a lot of spam.

## The Git Magic 🪄

After a bit of Internet searching, I found this nice Stackoverlow - of course - [post](https://stackoverflow.com/questions/3063097/remove-commits-before-specific-commit) that explains how to remove all commits before a certain commit. I started by investigating which commit it was. Let's call it `X`. These are the steps I followed:


```bash
git checkout -b oldroot X
TREE=`git write-tree`
COMMIT=`echo "Initial Commit" | git commit-tree "$TREE"`
git checkout -b newroot "$COMMIT"
git rebase --committer-date-is-author-date --onto newroot oldroot main
git checkout main

# Delete temporary branches and garbage collect the repository.
git branch -D oldroot
git branch -D newroot
git gc
```

Something that wasn't in the original post was the flag `--committer-date-is-author-date`, which I added. It simply ensures that the commit's date is preserved during the rebase. I think that was important.

After this steps, I had a repository with only the latest commits. But there was still a problem! The unmoderated comments file was still around in the history. That was quite easy. Just installed [`git-filter-repo`](https://github.com/newren/git-filter-repo) with Homebrew. Then run:

```bash
git filter-repo --invert-paths --path data/guestbook-unmoderated.json
```

Et voilá! The next steps were reasonably easy: create a new repository, add the remote to the local repository, push, and done. After a few dances of renaming repositories, adding descriptions, archiving some, making other publics, it is alive.

My website's [source code](https://github.com/hacdias/hacdias.com) is now open-source again. I like that. I have been learning more and more powerful things that Hugo can do and make it play nicely with my CMS.

There are still things I'm not sure how to do. But I love having the peace of mind that with a single command line, I can get a static version of it. A snapshot.

Finally, if you thought I made a typo in the title: I did not. I had to do some Git sorcery in order to make the repository open-source. Maybe that was a bad pun, but oh well... Hope you enjoyed it!
