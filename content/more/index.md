---
title: More
lastmod: 2021-09-21T06:29:38.122924359Z
aliases:
- /experiments
emoji: "\U0001F308"
noMentions: true
---

This website contains more things than it looks at first glance. This page is a list of (almost) everything you can find this on this website. Have fun exploring 🧭!

### 📃 Content Categories {#content-categories}

<ul class='terms bold'>
  <li><a title="Contact" href="../articles/">✏️ Articles</a></li>
  <li><a title="Resume" href="../micro/">💬 Micro</a></li>
  <li><a title="Projects" href="../photos/">📸 Photos</a></li>
  <li><a title="Meta" href="../notes/">📓 Notes</a></li>
  <li><a title="Meta" href="../all/">🪵 Log</a></li>
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
Weird things can happen, you can feel dizzy, be aware of dragons. 🐉 Or they will bite you!

<ul id='experiments' class='terms bold'>
  <li><a rel="noopener noreferrer" target="_link" title="Blue Screen of Death" href="../minisites/bsod/">🔵 Blue Screen of Death</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Glitch" href="../minisites/glitch/">📡 Glitch</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Impossible List" href="../minisites/mapgen/">🗺 Procedural Map Generator</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="PixelColorMania" href="../minisites/pixelcolormania/">🏳️‍🌈 PixelColorMania</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="Thunderstorm" href="../minisites/thunderstorm/">⛈ Thunderstorm</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="TV Noise" href="../minisites/tv-noise/">📺 TV Noise</a></li>
  <li><a rel="noopener noreferrer" target="_link" title="XKCD Clone" href="http://xkcd.hacdias.com/">💥 XKCD Clone</a></li>
</ul>

<script>
function emojiToDataURL (emoji, size = '64') {
  const canvas = document.createElement('canvas')
  canvas.height = size
  canvas.width = size

  const ctx = canvas.getContext('2d')
  ctx.font = `${size}px serif`
  ctx.fillText(emoji, 0, size)
  return canvas.toDataURL()
}

const experiments = document.querySelectorAll('#experiments a')
const rocket = window.emojiToDataURL('🚀', 24)
const cursor = `url(${rocket}), auto`

Array.from(experiments).forEach(exp => exp.style.cursor = cursor)
</script>
