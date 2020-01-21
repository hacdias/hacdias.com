---
type:  page
title: Now
emoji: ⏱
date:  2020-01-21T15:06:00.000Z
menu:
  main:
    weight: 5
---

<span id="info">Loading information...</span>

---

This is a now page, inspired by the [nownownow](https://nownownow.com/about) movement.

<script>
fetch('https://hacdias.com/api/now')
  .then(b => b.json())
  .then(({ time, battery, plugged, weather }) => {
    const date = new Date(time)
    document.getElementById('info').innerHTML = `It is ⏱${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}, 🌡${weather.value.toFixed(1)}ºC and ${weather.desc.toLowerCase()} in my location. My phone is ${plugged ? 'plugged' : 'unplugged'} and its battery is at 🔋${Math.floor(battery * 100)}%.`
  })
</script>
