---
title: More
published: 2020-01-25T22:56:48Z
updated: 2021-11-06T10:15:52.528616384Z
noShowInteractions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

<!--more-->

### 📃 Categories {#categories}

<div class='terms grid bold'>

- [🌊 Stream](/stream)
- [✏️ Articles](/articles)
- [💬 Micro](/micro)
- [📸 Photos](/photos)

</div>

### 🥐 Others {#others}

<div class='terms grid bold'>

- [🧔 About](/about)
- [⚙️ About This Website](/meta)
- [✉️ Contact](/contact)
- [📝 Guestbook](/guestbook)
- [🤯 Impossible List](/impossible-list)
- [📌 Links](/links)
- [🎶 Listens](/listens)
- [📦 Projects](/projects)
- [🎓 Resume](/resume)
- [🔎 Search](/search)
- [🛠 Uses](/uses)
- [🎬 Watches](/watches)
- [📚 Reads](/reads)
- [🏷 Tags](/tags)

</div>

### 🧪 Experiments {#experiments}

<style>
.terms.nyan a:hover {
  background: #104d8f url(https://cdn.hacdias.com/u/nyan-cat.gif) no-repeat right / contain;
  image-rendering: pixelated;
  color: var(--white);
}

#trigger {
  text-decoration:underline;
  text-decoration-style: dotted;
  cursor: pointer;
}
</style>

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats. <span id='trigger'>Or they will bite you!</span>

<div id='experiments-list' class='terms grid bold'>
  <ul>
    <li><a rel="noopener noreferrer" target="_link" title="Blue Screen of Death" href="../minisites/bsod/">🔵 Blue Screen of Death</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="Glitch" href="../minisites/glitch/">📡 Glitch</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="Procedural Map Generator" href="../minisites/mapgen/">🗺 Procedural Map Generator</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="PixelColorMania" href="../minisites/pixelcolormania/">🏳️‍🌈 PixelColorMania</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="Thunderstorm" href="../minisites/thunderstorm/">⛈ Thunderstorm</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="TV Noise" href="../minisites/tv-noise/">📺 TV Noise</a></li>
    <li><a rel="noopener noreferrer" target="_link" title="XKCD Clone" href="http://xkcd.hacdias.com/">💥 XKCD Clone</a></li>
  </ul>
</div>

<audio id="music" loop>
  <source src="https://cdn.hacdias.com/u/nyan-cat.mp3" type="audio/mpeg">
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
