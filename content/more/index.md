---
title: What Else Can I Find?
---

This website contains more things than it looks at first glance. This page contains a list of every page that I deem important that is not on the main navigation. However, it does not show everything. Some things are up for you to discover!

<!--more-->

<div class='terms grid bold'>

- [🔖 Bookmarks](/bookmarks/)
- [🗞️ Blogroll](/blogroll/)
- [🖼️ Graphics](/graphics/)
- [🚀 Impossible List](/impossible-list/)
- [📚 Readings](/readings/)
- [🎓 Resume](/resume/)
- [❤️ Support](/support/)
- [🚆 Trips](/trips/)
- [🛠 Uses](/uses/)
- [🎬 Watches](/watches/)

<!-- 
In navigation:
- [🧁 About](/about/)
- [✏️ Articles](/articles/)
- [✉️ Contact](/contact/)
- [📸 Photos](/photos/)
- [📖 Guestbook](/guestbook/)
-->

</div>

## 🗞️ Feeds {#feeds}

This website provides Atom and JSON feeds for the home page, which combines articles, photos, and book reviews, as well as for each one of the sections, individually. Your feed reader should be able to pick up the feed URL. If it doesn't, you can use the following URLs:

- **Home**: [Atom](/feed.xml), [JSON](/feed.json).
- **Articles**: [Atom](/articles/feed.xml), [JSON](/articles/feed.json).
- **Photos**: [Atom](/photos/feed.xml), [JSON](/photos/feed.json).
- **Readings**: [Atom](/readings/feed.xml), [JSON](/readings/feed.json).

## 🧪 Experiments {#experiments}

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats 🐈. <span id='trigger' hidden title='Click here, NOW!'>Or they might bite you!</span>

<div id='experiments-list' class='terms grid bold'>

- [🔵 Blue Screen of Death](../minisites/bsod/)
- [📡 Glitch](../minisites/glitch/)
- [🏳️‍🌈 PixelColorMania](../minisites/pixelcolormania/)
- [⛈ Thunderstorm](../minisites/thunderstorm/)
- [📺 TV Noise](../minisites/tv-noise/)
- [💥 XKCD Clone](http://xkcd.hacdia.sh/)

</div>

<audio id="music" loop>
  <source src="https://cdn.hacdias.com/media/nyan-cat.mp3" type="audio/mpeg">
</audio>

<script>
const trigger = document.getElementById('trigger')
const experiments = document.getElementById('experiments-list')
const experimentsLinks = experiments.querySelectorAll('a')
const musicEl = document.getElementById('music')

trigger.hidden = false
musicEl.currentTime = 0
musicEl.load()

Array.from(experimentsLinks).forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (experiments.classList.contains('nyan')) musicEl.play()
  })

  el.addEventListener('mouseleave', () => {
    if (experiments.classList.contains('nyan')) musicEl.pause()
  })
})

trigger.addEventListener('click', async () => {
  experiments.classList.toggle('nyan')
  trigger.classList.toggle('dn')
})
</script>
