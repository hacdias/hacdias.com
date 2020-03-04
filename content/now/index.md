---
date: 2020-02-15T18:30:00.000Z
description: >
  This is a simple page for me to join the nownownow movement. You can find
  information about what I'm doing at the moment and some other curious
  information.
emoji: ⏱
menu:
  main:
    weight: 5
properties: {}
publishDate: 2020-01-21T15:06:00.000Z
tags: []
title: Now
type: page
---

<span id="info"></span>

This is a [now](https://nownownow.com/about) page. Here you can find what I'm focusing right now:

- Getting back to university
- Improving this website; and
- Learning a bit about photography...

I've currently paused my work at Protocol Labs. You can see why [here](/notes/2020/03/02/1/). 😕

<script>
fetch('https://hacdias.com/api/now')
  .then(b => b.json())
  .then(({ time, battery, plugged, weather }) => {
    const date = new Date(time)
    document.getElementById('info').innerHTML = `It is ⏱${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}, 🌡${weather.value.toFixed(1)}ºC and ${weather.desc.toLowerCase()} in my location. My phone is ${plugged ? 'plugged' : 'unplugged'} and its battery is at 🔋${Math.floor(battery * 100)}%.`
  })
</script>