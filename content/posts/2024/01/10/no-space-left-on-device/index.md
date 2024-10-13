---
title: No Space Left on Device
date: 2024-01-10T08:32:22.839532429+01:00
categories:
  - articles
tags:
  - docker
  - maintenance
  - tips
---

I think that most of us that deal with Docker have, at some point, being confronted with the message "no space left on device". Well, that is what happened to me this morning: I woke up, looked at my phone, and had three alerts since 2am that there was no space left on device. Miniflux was down because PostgreSQL goes automatically into recovery mode, but other that than, everything was still up and running.

Now, how did that happen? Docker! Sometimes I feel like Docker is conspiring behind my back in order to use the most space as possible. I rent a VPS at Hetzner with a 40GB disk. Considering swap and other things, then we only have around 32GB that can be used. It is fine. I don't have that much on disk... do I?

I recently migrated to a new server, closer geographically. On the way, I also documented all the steps and necessary programs in order to make it easier for the next time. What I do think I forgot was to "clean" my Docker installation in the end. I've also likely created a lot of containers that are not used when setting up Soju a few weeks ago.

The solution is, nevertheless, quite simple. Just run the following:

```console
docker system prune --all
```

At the moment of speaking, this outputs a warning message saying it will remove all of the following:

- all stopped containers
- all networks not used by at least one container
- all images without at least one container associated to them
- all build cache

That sounds perfectly good. With that, I got around 20GB back. Twenty! That's crazy. That's half of the full hard drive filled with useless Docker things. Now it is all fine, but I'd like to be able to avoid this sooner. Maybe setup some cron job to alert me if there's less than *X* GB free on disk? Or maybe just run this script in the cron job itself? That I don't feel very safe about: what if some useful Docker container is, for some reason, down? Then it'll get deleted.

Have you ever had this issue? What have you done?
