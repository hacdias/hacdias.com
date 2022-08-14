---
title: More
noShowInteractions: true
noSendInteractions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

<!--more-->

### Categories 🪁 {#categories}

<div class='terms grid bold'>

- [🏡 Home](/)
- [🌊 Everything](/all)

</div>

<hr>

<div class='terms grid bold'>

- [✏️ Articles](/articles)
- [🔖 Bookmarks](/bookmarks)
- [🥘 Food and Beverages](/food)
- [🎶 Listens](/listens)
- [💬 Micro](/micro)
- [📸 Photos](/photos)
- [📍 Places](/places)
- [📚 Reads](/reads/summary)
- [🎬 Watches](/watches/summary)

</div>

### Others 🧵 {#others}

<div class='terms grid bold'>

- [🕵️‍♀️ About](/about)
- [🗞 Blogroll](/blogroll)
- [⚙️ Colophon](/colophon)
- [✉️ Contact](/contact)
- [😎 Emojis](/emojis)
- [✍️ Guestbook](/guestbook)
- [🚀 Impossible List](/impossible-list)
- [🔎 Search](/search)
- [🛠 Uses](/uses)
- [🏷 Tags](/tags)
<!-- - [🎓 Resume](/resume) -->

</div>

### Experiments 🧪  {#experiments}

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats. <span id='trigger'>Or they will bite you!</span>

<div id='experiments-list' class='terms grid bold'>
  <ul>
    <li><a rel="noopener noreferrer" target="_blank" title="Blue Screen of Death" href="../minisites/bsod/index.html">🔵 Blue Screen of Death</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="Glitch" href="../minisites/glitch/index.html">📡 Glitch</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="Procedural Map Generator" href="../minisites/mapgen/index.html">🗺 Procedural Map Generator</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="PixelColorMania" href="../minisites/pixelcolormania/index.html">🏳️‍🌈 PixelColorMania</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="Thunderstorm" href="../minisites/thunderstorm/index.html">⛈ Thunderstorm</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="TV Noise" href="../minisites/tv-noise/index.html">📺 TV Noise</a></li>
    <li><a rel="noopener noreferrer" target="_blank" title="XKCD Clone" href="http://xkcd.hacdias.com/">💥 XKCD Clone</a></li>
  </ul>
</div>

<audio id="music" loop>
  <source src="https://cdn.hacdias.com/media/nyan-cat.mp3" type="audio/mpeg">
</audio>

<script>
const trigger = document.getElementById('trigger')
const experiments = document.getElementById('experiments-list')
const experimentsLinks = experiments.querySelectorAll('a')
const musicEl = document.getElementById('music')

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
