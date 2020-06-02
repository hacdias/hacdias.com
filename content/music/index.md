---
description: |
  An extensive list of TV shows and movies I have or am watching right now.
emoji: "\U0001F37F"
properties: {}
title: Music
type: page
---

<style>
body {
  background: url(prisms.jpg);
  background-size: 512px;
  filter: var(--shadow);
}
</style>

{{< figure src="cd.gif" alt="Popcorn" class="left pixelated" style="max-width: 50px; margin-top: 0; margin-right: 1rem" >}}

This is a short summary of my most listened artists and genres 🎶 over the past 4 weeks. I use [Spotify's API](https://developer.spotify.com/documentation/web-api/reference-beta/#category-personalization) to gather the information.

<div class="grid">
  <div>
    <h2>Artists</h2>
    {{< artists >}}
  </div>

  <div>
    <h2>Genres</h2>
    {{< genres >}}
  </div>
</div>
