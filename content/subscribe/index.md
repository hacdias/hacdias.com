---
title: Subscribe
aliases:
- /follow
emoji: ⚡️
noMentions: true
---

<style>
:root {
  --action: #fecb00
}

@media screen and (min-width: 38rem) {
  body {
    background: #fecb00 url(../contact/mailbox.jpg);
    background-size: 400px;
    background-attachment: fixed;
  }
}
</style>

<p class=subtitle>I provide RSS, JSON and HTML feeds, as well as an occasional newsletter.</p>

{{< figure src="https://cdn.hacdias.com/u/2021-02-mailbox.gif" alt="MailBox" class="right pixelated" style="width:100%; max-width: 9rem; margin-top: 0;"  >}}

I started an occasional newsletter about what I'm studying, working on or some topic that lighted a spark on me. You can check out the posts I've [sent out](/tags/mondayletter/) so far! Are you interested?

<form action="https://buttondown.email/api/emails/embed-subscribe/hacdias" method="post" target="_blank" class="inline-form">
  <input aria-label="Your Email" required type="email" name="email" placeholder="Your Email"></input>
  <input type="hidden" value="1" name="embed"></input>
  <input type="submit" value="Join the Tribe" style="background-color: var(--action); border-color: var(--action)"></input>
</form>

### Feeds

All pages that list posts, such as [micro](/micro/) and [articles](/articles/), have three feeds attached to them: HTML ([Microformats](https://microformats.org/)), JSON and an RSS feed. If you want to follow all my posts, you can use the feed at the ["all"](/all) page. If you feed your RSS reader the page URL, it should be able to automatically detect the feed locations.

<div class="box yellow">

  In case your feed does not detect the feeds automatically, or if you need to access for any other reason, the links are formatted as follows. This example is for the ["all"](/all) page:

  - **HTML/Microformats**: [https://hacdias.com/all](/all/)
  - **RSS Feed**: [https://hacdias.com/all/feed.xml](/all/feed.xml)
  - **JSON Feed**: [https://hacdias.com/all/feed.json](/all/feed.json)

</div>
