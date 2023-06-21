---
description: Replied to a post on www.jvt.me
date: 2020-02-29T22:19:56.901Z
expiryDate: 2023-06-21T08:03:10.074567+02:00
noIndex: true
tags:
- telegram
- notifications
- webmentions
categories:
- notes
context:
  name: Jamie Tanna
  url: https://www.jvt.me/posts/2020/01/12/webmention-notifications/
  content: 'Since I set up Webmentions in January 2018 using Webmention.io, I''ve
    been starting to receive more interactions with my site across the social web.However,
    up until today, the only way I''d be able to see what Webmentions I''d received
    was to go and actively check. I''d, many times a day, open Indigenous for Android,
    the Indie reader I use, and refresh it to look at what''s in my notifications.This
    isn''t quite as interactive as you''d want, especially as these could be used
    for near-realtime communication across websites. While thinking about it, I started
    looking through the documentation for Webmention.io, but found no mention of it.
    Failing that, I logged into the dashboard and saw a "Web Hooks" button, which
    was exactly what I wanted!This Webhook hits the newly created https://www-api.jvt.me/notifications/webmention
    endpoint with a shared secret (to prevent spam) and then sends a push notification
    via PushBullet, which I currently use to notify me when my site has deployed.You
    can see the code changes required on the Merge Request on GitLab.com: Add webhook
    for mapping Webmention.io to push notifications.Update 2020-01-28: Since finding
    out I can only send 100 messages a month with Pushbullet, I have since replaced
    it with Pushover, after getting some good recommendations for it. You can see
    the code changes required to add Pushover Merge Request on GitLab.com: Use Pushover
    for Webmention notifications.'
  published: 2020-01-12T18:21:43Z
reply: https://www.jvt.me/posts/2020/01/12/webmention-notifications/
---

That's a lovely idea. I'm personally using Telegram's [Bot API](https://telegram.org/blog/bot-revolution) which is quite powerful!
