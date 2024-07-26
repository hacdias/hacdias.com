---
title: Contact
---

Do you have any feedback, or just want to go for a chat? Feel free to reach out to me!

<!--more-->

## 📧 E-mail {#email}

E-mail is the easiest way to reach out to me. Feel free to just write me an e-mail, invite for a chat, or anything else. I'll likely reply within 48 hours. In the unlikely event you may want to send me something encrypted, you can also use my PGP key linked below.

<div class='terms'>

- [✉️ mail@hacdias.com](mailto:mail@hacdias.com)
- [🗝 PGP Key](/pubkey.asc)

</div>

## 💬 Instant Messaging {#instant-messaging}

The second easiest way is to reach me out via an instant messaging platform. I've been trying to use Signal more often as it seems to be more secure and private than the alternatives. Therefore, use that if available for you. <span class='dn' id='timezone-note'>Note that it is now <time></time> in my timezone, unless I'm traveling.</span>

<div class='terms'>

- [{{< favicon "signal.org" >}} Signal: hacdias.22](https://signal.me/#eu/3hipC8LRH2b1TEsjWGQzg0QoXDV2cuf6yJjSWWlPHOVIoXvwoPJPR6hFbOYLy1II)
- [{{< favicon "telegram.org" >}} Telegram: @hacdias](https://t.me/hacdias)

</div>

## 🐘 Fediverse {#fediverse}

Nowadays, the social media I'm the most active on is Mastodon. You can follow me in any other platform that is part of the [Fediverse](https://en.wikipedia.org/wiki/Fediverse), such as Mastodon, PixelFeed, Pleroma, etc.

<div class='terms'>

- [{{< favicon "fosstodon.org" >}} @hacdias@fosstodon.org](https://fosstodon.org/@hacdias)

</div>


## 🌐 Elsewhere {#elsewhere}

I can usually be found in most places as [@hacdias](/about/#handle). Some of the most interesting ones:

<div class='terms'>

- [{{< favicon "github.com" >}} GitHub: @hacdias](https://github.com/hacdias)
- [{{< favicon "linkedin.com" >}} LinkedIn: @hacdias](https://linkedin.com/in/hacdias)
- [{{< favicon "instagram.com" >}} Instagram: @hacdias](https://instagram.com/hacdias)
- [{{< favicon "reddit.com" >}} Reddit: /u/hacdias](https://reddit.com/u/hacdias)
- [{{< favicon "discord.com" >}} Discord: @hacdias](https://discord.com/users/hacdias)
- [{{< favicon "bsky.app" >}} Bluesky: @hacdias.com](https://bsky.app/profile/hacdias.com)
- [{{< favicon "twitter.com" >}} X: @hacdias](https://twitter.com/hacdias)

</div>

<script>
const span = document.getElementById('timezone-note')
const time = span.querySelector('time')

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Amsterdam',
})

const updateDate = () => {
  const formattedDate = formatter.format(new Date())
  time.innerText = formattedDate
}

updateDate()
span.classList.remove('dn')
setTimeout(() => {
  updateDate()
  setInterval(updateDate, 60 * 1000)
}, (60 - new Date().getSeconds()) * 1000)
</script>
