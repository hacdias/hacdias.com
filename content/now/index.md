---
date: 2020-01-30T14:05:45.350Z
description: >
  This is a simple page for me to join the nownownow movement. You can find
  information about what I'm doing at the moment and some other curious
  information.
emoji: ⏱
menu:
  main:
    weight: 5
properties:
  category: &ref_0 []
publishDate: 2020-01-21T15:06:00.000Z
tags: *ref_0
title: Now
type: page
---

This is a [now](https://nownownow.com/about) page. <span id="info"></span>

At the moment, I'm focusing on the following things:

- Improving this website; and
- Decentralizing the web!

I'm also reading the following books:

{{< books type="reading" >}}

<script>
fetch('https://hacdias.com/api/now')
  .then(b => b.json())
  .then(({ time, battery, plugged, weather }) => {
    const date = new Date(time)
    document.getElementById('info').innerHTML = `It is ⏱${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}, 🌡${weather.value.toFixed(1)}ºC and ${weather.desc.toLowerCase()} in my location. My phone is ${plugged ? 'plugged' : 'unplugged'} and its battery is at 🔋${Math.floor(battery * 100)}%.`
  })
</script>