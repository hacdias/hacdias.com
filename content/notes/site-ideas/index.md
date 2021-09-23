---
title: Website Ideas
tags:
- meta
lastmod: 2021-09-23T09:05:30.944477955Z
---

<div class="subtitle">

A bunch of ideas for my website that might never get implemented.

</div>

This is an ever-changing page of ideas to add/change on this website. It's an actual issue: I'm always having ideas, but they're either too green and not good to implement, or I just end up forgetting and never looking back at it anymore 😂 If you want to know more about **how** this website works, check out the [meta page](/meta)!

## Posts

Perhaps the most important/interesting is the content. Some ideas I want to write about in long format but haven't had time to start yet:

- Experience working as a master's student mentor and how it influenced me.
- Grow my [security setup](/notes/gpg/) note into a reasonably well documented guide on how I set up my Yubikey.
- More things about fractals.

## Visual Changes

These are changes that are purely visual and have no other functionality. Perhaps the most easier to implement, but still...

- Increase the font size to 17px or even 18px according to the device screen. I've noticed that a lot of websites use larger-than-default font size and that is nice when reading on large screens.
- Lightbox when clicking on a picture. Not necessarily very useful, but can be nice for some users if they want to pixel-peep.

## Backend

These changes regard the backend of this website, namely Eagle, my home baked backend software that takes care of everything that happens.

- Move the admin interface to a subdomain instead of a path. Need to listen on two different ports and simply redirecting traffic accordingly.
- Improve the way I create posts by allowing templates according to the post type. I can simply use the archetypes for this.
- Allow to change the post URL via the backend. Right now I need to manually change the files. This should also make sure the old post url is added to the `aliases`.
- Create an interface to update my reading progress.

## Others

I really don't feel these fit into either of the previous categories... so... here they are:

- Make search more accessible on mobile? Should I not hide the header bar on mobile? Maybe through some other button.
- Add Microformats meta tags to the readings page. Not sure to which point this would be useful, but... perhaps? It seems reasonably simple to implement.
- 🎶 Improve the listens page by adding better statistics. This is mostly about data analysis though. Maybe I can get inspired by the reports that Last.fm does.
- ✈️ Traveling tracker. Right now, I manually track the countries I've been to using the [Impossible List](/impossible-list/) page. However, I have a few sources of data that could be perhaps used to make a nicer visualization:
	- Map visualization.
	- https://my.flightradar24.com for the flights I have done.
	- Partially use Swarm for more up to date content about countries I have visited.
	- [Stammy](https://paulstamatiou.com/) has really nice map animations, but I don't think I'd need such fancy things in here.
- Create an archive with the old versions of this website.

### Some Others

These are ideas that are not really settled in stone and they're mostly technicalities that, right now, are not really affecting anyone's life:

- Disable FLoC: https://cleanuptheweb.org/
- Move all non-SVG images to the CDN.
- Improved **caching**
  - Add caching headers
  - Phase 1: update all search index on changed files & purge ALL CloudFlare cache.
  - Phase 2: update modified search index & purge SOME CloudFlare cache.
  - https://api.cloudflare.com/#zone-purge-all-files 


## Easter Eggs

Cannot reveal those to you because... they're easter eggs.

## 🪴 Towards a Digital Garden

I've been reading more and more about digital gardens and I personally enjoy the idea of gradually growing ideas. However, I don't know if I should just transform the whole website in a "garden" per se where all the content (maybe except the micro section) are within the main level of pages. Also, how would I organize my feed for the readers?

I think that a good transition format is to start by:

1. Stop using `/articles/{year}/{month}/slug` for new posts and simply use `/articles/{slug}`. The date is already published within the post itself through the updated meta data. There is no need for this subdirectories. Posts with the same slug are... the same thing. There's no point in duplicating information when it can be **updated**.
	- Perhaps rename the 'Recently' and {period of time}-in a review posts to something else. Or just keep them the way they are. 'Thoughts on September 2021' sounds like a great name though.
2. Use [`notes/`](/notes/) as a public space for new post drafts. Less pressure to write a post.
3. (Hardest) Implement backlink references and make sure nothing breaks. In the meanwhile, I can just make sure that if I rename a page, I keep an alias.

A nice organizational system from [this post](https://maggieappleton.com/garden-history):

- 🌱 Seedlings: rough and early ideas
- 🌿 Budding: clean and clarified work
- 🌳 Evergreen: complete work, can be changed over time

Things to do:

- [ ] Rewrite [`notes/`](/notes/) information.
- [ ] Instead of "Entries", add a section for each category on [`notes/`](/notes/) (if no tag is present, the note is a seedling).
- [ ] Review current notes and add tags. Merge/remove them if no longer necessary or too small.
- [ ] Move this idea to [`meta/`](/meta/) once it is more consolidated.
- [ ] Capitalize all posts according to this rules: https://capitalizemytitle.com/style/Wiki/
- [x] Possibly rename Log to Stream. On the navbar, add Log instead of articles/micro and add Notes.

## CDN Structure

For my own mind clarity:

- `/u/` - random uploads and pictures that do NOT need resizing
- `/i/` - pictures that NEED resizing and compressing

Maybe it would also be great to revamp my CLI tool that I use to upload things to the CDN.
