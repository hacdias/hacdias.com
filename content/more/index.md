---
title: More
lastmod: 2021-09-21T10:38:46.554359591Z
aliases:
- /experiments
emoji: "\U0001F308"
noMentions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

### 📃 Content Categories {#content-categories}

<ul class='terms bold'>
  <li><a title="Articles" href="../articles/">✏️ Articles</a></li>
  <li><a title="Micro" href="../micro/">💬 Micro</a></li>
  <li><a title="Photos" href="../photos/">📸 Photos</a></li>
  <li><a title="Notes" href="../notes/">📓 Notes</a></li>
  <li><a title="Log" href="../all/">🪵 Log</a></li>
</ul>

### 🥐 Others {#others}

<ul class='terms bold'>
  <li><a title="About" href="../about/">🧔 About</a></li>
  <li><a title="Contact" href="../contact/">✉️ Contact</a></li>
  <li><a title="Guestbook" href="../guestbook/">📝 Guestbook</a></li>
  <li><a title="Impossible List" href="../impossible-list/">🤯 Impossible List</a></li>
  <li><a title="Links" href="../links/">📌 Links</a></li>
  <li><a title="Listens" href="../listens/">🎶  Listens</a></li>
  <li><a title="Meta" href="../meta/">⚙️ Meta</a></li>
  <li><a title="Projects" href="../projects/">📦 Projects</a></li>
  <li><a title="Reads" href="../reads/">📚 Reads</a></li>
  <li><a title="Resume" href="../resume/">📄 Resume</a></li>
  <li><a title="Search" href="../search/">🔎 Search</a></li>
  <li><a title="Tags" href="../tags/">🏷 Tags</a></li>
  <li><a title="Uses" href="../uses/">🛠️ Uses</a></li>
  <li><a title="Watches" href="../watches/">🎬 Watches</a></li>
</ul>


### 🧪 Experiments {#experiments}

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats. <span id='trigger'>Or they will bite you!</span>

<ul id='experiments-list' class='terms bold'>
  <li><a rel="noopener noreferrer" target="_link" title="Blue Screen of Death" href="../minisites/bsod/">🔵 Blue Screen of Death</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Glitch" href="../minisites/glitch/">📡 Glitch</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Procedural Map Generator" href="../minisites/mapgen/">🗺 Procedural Map Generator</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="PixelColorMania" href="../minisites/pixelcolormania/">🏳️‍🌈 PixelColorMania</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Thunderstorm" href="../minisites/thunderstorm/">⛈ Thunderstorm</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="TV Noise" href="../minisites/tv-noise/">📺 TV Noise</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="XKCD Clone" href="http://xkcd.hacdias.com/">💥 XKCD Clone</a></li>
</ul>

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
