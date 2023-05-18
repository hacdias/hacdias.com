---
date: 2021-10-27T06:31:33.272375945Z
lastmod: 2021-10-31T07:19:16.767633451Z
tags:
- meta
- security
categories:
- notes
---

In my last post, I [mentioned](/2021/10/25/new-eagle-look) that I was "investigating the possibility to use Tailscale to simply block the access from the “outside world” and make it more secure". Well, it is now [implemented](https://github.com/hacdias/eagle/blob/main/server/tailscale.go) and it works. Basically, my blog system can listen on two different ports: the regular one where you're navigating, and the one inside a Tailscale network.

If I specify `exclusiveDashboard: true` on my Tailscale section of the configuration, the dashboard will only be added to the Tailscale router. This way, the dashboard won't be available at `hacdias.com`, but only inside the Tailscale network. I've tried it and it works. However, it is not how it is not enabled on the live version yet!

I also mentioned that I was trying to "inject" and admin bar while logged in. I can say that it is working via some response writer [wrapping magic](https://github.com/hacdias/eagle/blob/86fb5489e6ee3488692377d74f7fd64493841b32/server/static.go#L76-L102). I have a few more plans to make Eagle more self-contained, but we're not there yet!

Have a fantastic day!
