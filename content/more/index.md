---
title: What Else Can I Find?
noWebmentions: true
---

This website contains more things than it looks at first glance. This page contains a list of every page that I deem important that is not on the main navigation. However, it does not show everything. Some things are up for you to <span id='trigger'>discover</span>!

<!--more-->

<div id='more-list' class='terms grid bold'>

- [🔖 Bookmarks](/bookmarks/)
- [🗞️ Blogroll](/blogroll/)
- [🖼️ Graphics](/graphics/)
- [🚀 Impossible List](/impossible-list/)
- [📚 Readings](/readings/)
- [🎓 Resume](/resume/)
- [📦 Shoebox](/shoebox/)
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

In footer:
- [❤️ Support](/support/)
-->

</div>

## 🗞️ Feeds {#feeds}

This website provides Atom and JSON feeds for the home page, which combines articles, photos, and book reviews, as well as for each one of the sections, individually. Your feed reader should be able to pick up the feed URL. If it doesn't, you can use the following URLs:

- **Home**: [Atom](/feed.xml), [JSON](/feed.json).
- **Articles**: [Atom](/articles/feed.xml), [JSON](/articles/feed.json).
- **Photos**: [Atom](/photos/feed.xml), [JSON](/photos/feed.json).
- **Readings**: [Atom](/readings/feed.xml), [JSON](/readings/feed.json).

<audio id="music" loop>
  <source src="https://cdn.hacdias.com/media/nyan-cat.mp3" type="audio/mpeg">
</audio>

<script>
const trigger = document.getElementById('trigger')
const more = document.getElementById('more-list')
const moreLinks = more.querySelectorAll('a')
const musicEl = document.getElementById('music')

trigger.dataset.status = 'clickable'
trigger.title = 'Should you click?'
musicEl.currentTime = 0
musicEl.load()

Array.from(moreLinks).forEach(el => {
  el.addEventListener('mouseenter', () => {
    if (more.classList.contains('nyan')) musicEl.play()
  })

  el.addEventListener('mouseleave', () => {
    if (more.classList.contains('nyan')) musicEl.pause()
  })
})

trigger.addEventListener('click', async () => {
  more.classList.toggle('nyan')
  trigger.dataset.status = 'clicked'
  trigger.title = 'You clicked... brave... what changed?'
})
</script>
