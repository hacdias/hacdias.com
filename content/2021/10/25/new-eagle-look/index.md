---
date: 2021-10-25T17:09:47.960105844Z
lastmod: 2021-10-25T17:24:40.338706713Z
tags:
- meta
categories:
- notes
---

Yesterday and today I worked a bit on the backend of my website: [Eagle](https://github.com/hacdias/eagle). I'm quite happy with the amount of bugs I managed to fix and some of the new features:

- Edit data files (or any other files)
- Integration with Miniflux to update the blogroll
- Usage of [afero](https://github.com/spf13/afero) for base path file systems, i.e., avoid being able to edit files outside of the source's scope
- Improved interface
- Search posts on the backend
- Added favicon
- Many fixes

I've also been investigating the possibility to use [Tailscale](https://tailscale.com/) to simply block the access from the "outside world" and make it more secure? I've tried using the still in the works package `tsnet` - like [@jlelse](https://jlelse.blog/) [did](https://git.jlel.se/jlelse/GoBlog/src/branch/master/tailscale.go) - and it was quite nice. 

Unfortunately, I'm not sure yet how I can simply block access to the dashboard interface yet. At least in the case that the interface is on the same domain as the website. Right now, they are separated so it'd be easy. However, I'm thinking of putting it all under the same domain again.

I'm also trying to understand how I can perhaps "inject" an admin bar - with buttons to perform some actions - while navigating the website in case I'm logged in. Perhaps a bit of JavaScript magic will do it. I personally don't want to get rid of Hugo (yet) and this solution or working around Hugo has been working very well! Hugo is the "database" and generator.

Also considering to add a few other features, such as post location, uploads with compression and correct resizings to BunnyCDN, renaming of posts, etc.
