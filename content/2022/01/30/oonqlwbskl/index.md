---
description: Replied to a post on commentpara.de
date: 2022-01-30T08:37:12.990336395+01:00
expiryDate: 2023-06-21T08:03:10.080664+02:00
noIndex: true
categories:
- notes
context:
  name: Anonymous
  url: https://commentpara.de/comment/955.htm
  content: I have setup things as described - however after after installing some
    OS updates on the VPS despite having set the client to work with full tunnel,
    all traffic that does not go to the local subnet now gets routed to the internet
    using the VPS ip. Any idea what might cause this?
reply: https://commentpara.de/comment/955.htm
---

Unfortunately I haven't been using this configuration myself for a while so I'm not aware of what might've happened. However, what you wrote seem expected unless I didn't understand it.

> having set the client to work with full tunnel, all traffic that does not go to the local subnet now gets routed to the internet using the VPS ip

On a full tunnel VPN, all the traffic will be routed through the VPN server, which is the VPS. It seems like you want to have a split tunnel configuration which requires you to add the `AllowedIPs` option, as I explained in the last part of the post.

I hope that helps!
