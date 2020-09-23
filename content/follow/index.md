---
date: 2020-09-20
publishDate: 2020-01-30
title: Follow
type: page
emoji: ⚡️
menu:
  main:
    weight: 5
---

<style>
.inline-form {
  display:flex;
}
.inline-form input:first-of-type {
  flex-grow: 1;
}
.inline-form input[type="submit"] {
  margin-left: 1rem;
}

@media screen and (min-width: 38rem) {
  body {
    background: #fecb00 url(mailbox.jpg);
    background-size: 400px;
    background-attachment: fixed;
  }
}

@media screen and (max-width: 38rem) {
  .inline-form,
  .inline-form input {
    display:block;
    width: 100%
  }
  .inline-form input[type="submit"] {
    margin: 1rem 0 0 0;
  }
}
</style>

## Newsletter

{{< figure src="mailbox.gif" alt="MailBox" class="right pixelated" style="width:100%; max-width: 9rem; margin-top: 0;"  >}}

I am starting a weekly Monday newsletter about what I'm studying, working on or some topic that lighted a spark on me. I haven't started sending out posts, but as soon as I start, I will commit to one each Monday. Are you interested?

<form action="https://buttondown.email/api/emails/embed-subscribe/hacdias" method="post" target="_blank" class="inline-form">
  <input aria-label="Your Email" type="email" name="email" placeholder="Your Email"></input>
  <input type="hidden" value="1" name="embed"></input>
  <input type="submit" value="Join the Tribe"></input>
</form>

## Feeds

This website also provides many RSS and JSON feeds, besides fully supporting [Microformats](https://microformats.org/). All listing and tags pages, such as [micro](/micro/) and [articles](/articles/), have two feeds attached: a JSON and an RSS feed. Your RSS reader should pick up the feeds automagically.

You can access them by appending `/feed.json` for the JSON feed, or `/feed.xml` for the RSS feed, to the URL. For example, for the `/articles` page:

- **Canonical**: [https://hacdias.com/articles](/articles/)
- **RSS Feed**: [https://hacdias.com/articles/feed.xml](/articles/feed.xml)
- **JSON Feed**: [https://hacdias.com/articles/feed.json](/articles/feed.json)

## Social Media

Here's some social media websites where yoiu can find me:

- 🐦 [Twitter](https://twitter.com/hacdias)
- 💻 [GitHub](https://github.com/hacdias)
- 📷 [Instagram](https://instagram.com/hacdias)
- 💼 [LinkedIn](https://linkedin.com/in/hacdias)