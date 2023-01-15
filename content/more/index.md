---
title: More
noShowInteractions: true
noSendInteractions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

<!--more-->

### 🪁 Sections {#sections}

<div class='terms grid bold'>

- [🏡 Home](/)
- [🌊 Everything](/all)

</div>

<hr>

<div class='terms grid bold'>

- [✏️ Articles](/articles)
- [🔖 Bookmarks](/bookmarks)
- [🧋 Drinks](/drinks)
- [🥘 Food](/food)
- [💬 Micro](/micro)
- [📸 Photos](/photos)
- [📚 Readings](/readings)
- [🚀 Trips](/trips)

</div>

<!-- - [🗺️ Itineraries](/itineraries) -->


### 🧵 Others {#others}

<div class='terms grid bold'>

- [🧁 About](/about)
- [🗞️ Blogroll](/blogroll)
- [⚙️ Colophon](/colophon)
- [✉️ Contact](/contact)
- [🎮 Games](/games)
- [📖 Guestbook](/guestbook)
- [🚀 Impossible List](/impossible-list)
- [🔎 Search](/search)
- [🛠 Uses](/uses)
- [🏷 Tags](/tags)
- [🎬 Watches](/watches)

<!-- - [📍 Checkins](/checkins) -->

</div>

<!-- - [📍 Checkins](/checkins) -->

### 🧪 Experiments {#experiments}

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats 🐈. <span id='trigger' hidden title='Click here, NOW!'>Or they might bite you!</span>

<div id='experiments-list' class='terms grid bold'>

- [🔵 Blue Screen of Death](../minisites/bsod/index.html)
- [📡 Glitch](../minisites/glitch/index.html)
- [🗺 Procedural Map Generator](../minisites/mapgen/index.html)
- [🏳️‍🌈 PixelColorMania](../minisites/pixelcolormania/index.html)
- [⛈ Thunderstorm](../minisites/thunderstorm/index.html)
- [📺 TV Noise](../minisites/tv-noise/index.html)
- [💥 XKCD Clone](http://xkcd.hacdias.com/)

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
