---
title: Listens
description: |
  An extensive list of TV shows and movies I have or am watching right now.
noInteractions: true
template: listens
---

<style>
:root {
  --action: #25a9e1;
}
body {
  background: url(discs.jpg);
  background-size: 400px;
  background-attachment: fixed;
}
figure.fig-cute {
  max-width: 100px;
  margin-top: 0;
  margin-right: 1rem
}
</style>

{{< figure src="https://cdn.hacdias.com/u/2021-05-cute-music.gif" alt="CD Icon" class="right pixelated fig-cute" >}}

This is a short summary of my most listened artists and tracks over the past week 🎶. I use [Last.fm's API](https://www.last.fm/api) to gather the information.

## Artists

{{< artists >}}

## Tracks

{{< tracks >}}
