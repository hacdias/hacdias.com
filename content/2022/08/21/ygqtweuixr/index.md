---
date: 2022-08-21T18:46:56.060714286+02:00
expiryDate: 2023-06-21T09:07:27.778516+02:00
tags:
- docker
- self-hosting
- networking
- security
categories:
- notes
---

Today I noticed my VPS did not have any firewall installed. Since I use Alpine, I decided to try out [awall](https://wiki.alpinelinux.org/wiki/How-To_Alpine_Wall), which led to 15 minutes of down time for this website and all the remaining services. Besides, it seems that Docker messes with the IP tables by default, which can be troublesome with firewalls. In the end, I ended up using Hetzner's own firewall which is completely decoupled from the OS and easier to manage.
