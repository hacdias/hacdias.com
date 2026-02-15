---
title: About Moving Away From Hugo
date: 2021-10-31T19:07:43.008011647Z
lastmod: 2021-10-31T22:06:43.941004664Z
categories:
  - writings
tags:
  - blog engine
  - meta
  - personal website
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3ijpf57wjcfct
---

Today I have been thinking about my website. Mainly about ditching Hugo and moving to a completely custom and dynamic website. There are a few reasons about why I would like more flexibility. However, I don't know if it justifies the effort.

<!--more-->

## Pros

**Interface Integration**: the interfaces of the administrative area would be tightly connected to the website in a seamless way. Right now, they are completely different and I'm injecting a menu bar while I'm logged in into the main website, which does not seem like the best practice.

**Preview Draft Posts**: I want to be able to preview my posts without having to run Hugo on my machine. For longer articles where I add pictures, I always have to resort back to previewing the post on my computer because I have no idea if it'll look fine.

**Private Posts**: not sure if I would use this, but maybe it's a nice to have.

**Built-in Webmention Admin**: being able to hide or remove webmentions directly from the post-pages would be great. Right now I'm thinking of building a page to do so, but it's not done yet.

**No More Hacky Templates**: well, this is a pro, but it's also a con. I will not have hacky templates, but most likely I will have some hacky code.

## Cons And Others

I want to have a **file structure** and [not use a database](https://indieweb.org/database-antipattern). I would - as I am using right now - use a database for indexing so I could use it for search and listing posts.

I would love to bring back **check-ins** and add **scrobbles**. That would be thousands of posts (at least 20k just worth of scrobbles). Hugo's functionality is very limited and generating all the listing pages for this would take quite some time. That's one of the reasons I removed check-ins in first place.

Since then I've been collecting all this data daily on a private repository and have some megabytes worth of data that I'd like to share here, even though not in the main feeds.

I have a lot of Hugo **shortcodes**! Yes, I can probably migrate them to a new system if I end up implementing it, but it feels scary.

And time and migration: two things that need to be planned. I clearly need (want?) more flexibility than I have right now. On the other hand, I love the idea of a static website.

For those of you that run dynamic systems, whether they're database based or flat-file based: what would you do?
