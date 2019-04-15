---
type: html
emoji: 🏳️‍🌈
title: Pixel-color-mania
date:  2019-04-14
description: >
  A little colorful experiment where you can randomly create squares, lines and
  adjust their size and sobreposition settings.
raw: true
---

<div>
  <div>
    <input onclick="set(event, 'overlay')" type="checkbox" id="overlay">
    <label for="overlay">Overlay</label>
  </div>
  <div>
    <input onclick="set(event, 'lines')" type="checkbox" id="lines">
    <label for="lines">Lines</label>
  </div>
  <div>
    <label>Size</label>
    <input onchange="setSize(event)" type="range" min="10" max="500" value="100">
  </div>
  <button onclick="reset()">Clear Canvas</button>
</div>
