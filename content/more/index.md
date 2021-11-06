---
dataId: 24766688aa6b4756daa80c41824f8a24dbd8c6479c080012ada2a74732db2a5f
title: More
date: 2020-01-25T22:56:48Z
lastmod: 2021-11-06T10:15:52.528616384Z
aliases:
- /experiments
emoji: "\U0001F308"
noMentions: true
menu:
  main:
    weight: 7
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

### 📃 Categories {#categories}

<ul class='terms grid bold'>
  <li>{{< link-emoji "/stream" >}}</li>
  <li>{{< link-emoji "/articles" >}}</li>
  <li>{{< link-emoji "/micro" >}}</li>
  <li>{{< link-emoji "/photos" >}}</li>
</ul>

### 🥐 Others {#others}

<ul class='terms grid bold'>
  <li>{{< link-emoji "/about" >}}</li>
  <li>{{< link-emoji "/meta" >}}</li>
  <li>{{< link-emoji "/contact" >}}</li>
  <li>{{< link-emoji "/guestbook" >}}</li>
  <li>{{< link-emoji "/impossible-list" >}}</li>
  <li>{{< link-emoji "/links" >}}</li>
  <li>{{< link-emoji "/listens" >}}</li>
  <li>{{< link-emoji "/projects" >}}</li>
  <li>{{< link-emoji "/resume" >}}</li>
  <li>{{< link-emoji "/search" >}}</li>
  <li>{{< link-emoji "/uses" >}}</li>
  <li>{{< link-emoji "/watches" >}}</li>
  <li>{{< link-emoji "/reads" >}}</li>
  <li>{{< link-emoji "/tags" >}}</li>
</ul>


### 🧪 Experiments {#experiments}

A galaxy, a black hole, whatever you wanna call it. This is a place for some weird experiments.
Weird things can happen, you can feel dizzy, be aware of cats. <span id='trigger'>Or they will bite you!</span>

<ul id='experiments-list' class='terms grid bold'>
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

<!-- Micro More Photos Articles About this website Notes Reads Impossible List Links Stuff I use About Contact Guestbook Listens Log Projects Resume Search Watches -->
