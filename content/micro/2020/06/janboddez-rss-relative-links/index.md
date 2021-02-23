---
tags:
- meta
date: 2020-06-01T13:51:07.72Z
replyTo:
  url: https://janboddez.tech/notes/b6b59a1630
  content: 'In reply to https://hacdias.com/articles/2020/05/back-90s/. Love the animated
    GIFs! The background! One thing: my feed reader has a hard time handling the relative
    image URLs in your RSS … (Hint: https://validator.w3.org/feed/docs/warning/ContainsRelRef.html.
    [I only know about this link because I ran into the same thing —different blog,
    though—earlier this week.]) (Also, I couldn’t help but notice that RSS items lack
    the “context” that makes replies and such so much more understandable. Not a huge
    issue, just thought I’d let you know.)'
  date: 2020-06-01T13:20:27Z
  author:
    name: Jan Boddez
    url: https://janboddez.tech/
    photo: https://janboddez.tech/uploads/avatars/mastodon-social-janboddez.jpg
---

> Love the animated GIFs! The background!

Thanks 😁

> One thing: my feed reader has a hard time handling the relative image URLs in your RSS…

Thanks for letting me know that. I didn't know that was an issue. May I ask which RSS reader you're using? That'll be hard to do with Hugo. There's no way to tell it to use absolute URLs in the feeds only. I'll need to set up an extra step of some kind. I'll check it out.

> (Also, I couldn’t help but notice that RSS items lack the “context” that makes replies and such so much more understandable. Not a huge issue, just thought I’d let you know.)

Interesting, I noticed today my ActivityPub feeds had that problem and I already fixed them to include the "reply" part. I'm not aware if the RSS can have that kind of context. Can they? Also, just checked and the JSON feeds don't support that kind of things. However, my page's all use microformats and I just checked and they're correctly parsed.
