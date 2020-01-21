---
type:  page
title: Now
emoji: ⏱
date:  2020-01-21T15:06:00.000Z
menu:
  main:
    weight: 5
---

It is ⏱<span id="hours"></span>, 🌡<span id="weather_c"></span>ºC  and <span id="weather_desc"></span> in my location. My phone is <span id="plugged"></span> and its battery is at 🔋<span id="battery"></span>%.

---

This is a now page, inspired by the [nownownow](https://nownownow.com/about) movement.

<script>
fetch('https://hacdias.com/api/now')
  .then(b => b.json())
  .then(({ time, battery, plugged, weather }) => {
    const date = new Date(time)
    document.getElementById('hours').innerText = `${date.getHours()}:${date.getMinutes()}`
    document.getElementById('weather_c').innerText = weather.value.toFixed(1)
    document.getElementById('weather_desc').innerText = weather.desc.toLowerCase()
    document.getElementById('plugged').innerText = plugged ? 'plugged' : 'unplugged'
    document.getElementById('battery').innerText = Math.floor(battery * 100)
  })
</script>
