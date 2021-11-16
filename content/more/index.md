---
title: More
noShowInteractions: true
noSendInteractions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

<!--more-->

### 📃 Categories {#categories}

<div class='terms grid bold'>

- [✏️ Articles](/articles)
- [🍴 Ate](/Ate)
- [🔖 Bookmarks](/bookmarks)
- [📍 Checkins](/checkins)
- [🍺 Drank](/drank)
- [❤️ Likes](/likes)
- [💬 Micro](/micro)
- [💭 Notes](/notes)
- [📸 Photos](/photos)
- [📚 Reads](/reads)
- [💬 Replies](/replies)
- [📢 Reposts](/reposts)

</div>

### 🥐 Others {#others}

<div class='terms grid bold'>

- [🧔 About](/about)
- [⚙️ About This Website](/meta)
- [🗞 Blogroll](/blogroll)
- [✉️ Contact](/contact)
- [📝 Guestbook](/guestbook)
- [🤯 Impossible List](/impossible-list)
- [🎶 Listens](/listens)
- [📦 Projects](/projects)
- [🎓 Resume](/resume)
- [🔎 Search](/search)
- [🛠 Uses](/uses)
- [🎬 Watches](/watches)
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
