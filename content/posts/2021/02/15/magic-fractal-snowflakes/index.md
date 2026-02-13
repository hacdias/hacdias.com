---
title: The Magic of Fractal Snowflakes
date: 2021-02-15T06:30:00Z
lastmod: 2021-02-15T06:49:43.435183405Z
categories:
  - writings
tags:
  - art
  - javascript
  - mathematics
syndication:
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/app.bsky.feed.post/3meqn2yugev2q
  - at://did:plc:xsx3bphrwkgeo3qnfjhzmdra/site.standard.document/3medsfpsu7526
feedContentWarning: true
---

The winter ❄️ has finally come. I have been wishing for snow for a long time. Coming from a warm country such as Portugal, snow is not the most common thing to see. In fact, I only saw snow in Portugal once when I was a kid when I went to [Serra da Estrela](https://en.wikipedia.org/wiki/Serra_da_Estrela), the highest mountain in continental Portugal.

<!--more-->

Since then, I've only seen snow a few other times when traveling, but never that experience of being outside while it is actually snowing. That has changed! The Netherlands has been suffering from low temperatures, reaching even -15°C where I'm living. It's been over a week without positive temperatures!

<figure>
  <video autoplay muted loop>
    <source src="https://media.hacdias.com/2021-02-15-snow-eindhoven.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</figure>

However, it is not the weather of the Netherlands that brought you here. Due to the snowy situation, I had the idea of searching how to recursively generate snowflakes. The first method that I found, and probably the most known one, is the [Koch snowflake](https://en.wikipedia.org/wiki/Koch_snowflake). Even so, I am not going to talk about it today. Maybe some other day!

After a bit of digging, I found quite a nice [video](https://www.youtube.com/watch?v=HXTC5LSep3M) where it was explained how to create a fractal snowflake in JavaScript. I'm basing this post on that same code, with some slight changes and the possibility for you to try it out, live!

First and foremost: what is a fractal? I found this definition [online](https://iternal.us/what-is-a-fractal) that I think explains pretty well what a fractal is:

> A Fractal is a type of mathematical shape that are infinitely complex. In essence, a Fractal is a pattern that repeats forever, and every part of the Fractal, regardless of how zoomed in, or zoomed out you are, it looks very similar to the whole image.

Usually, when we think about fractals, we think about infinitely repeating shapes. Nonetheless, that does not need to happen. There is a fantastic [video by 3Blue1Brown](https://www.youtube.com/watch?v=gB9n2gHsHN4) that I would highly recommend to you if you're interested in self-similarity and fractals.

Let's get started then! But first, here's the demo of the final "product" so you can see what we are trying to build. This demo is interactive, so you can change the parameters. I chose some default parameters that make the snowflake look really nice in my opinion!

<div class="snowflakes media">
  <canvas data-mode=interactive />
</div>

<div id=controls>
  <div>
    <label>Levels</label>
    <input id=maxLevel type=range min=1 max=5 value=5 step=1/>
  </div>
  <div>
    <label>Branches</label>
    <input id=branches type=range min=1 max=5 value=2 step=1/>
  </div>
  <div>
    <label>Spread</label>
    <input id=spread type=range min=0 max=1 value="0.83" step='0.01'/>
  </div>
  <div>
    <label>Sides</label>
    <input id=sides type=range min=3 max=15 value=6 step=1 />
  </div>
</div>

**Tip:** you can right click on the image above and save it. Did you get something unique? Share it with the rest of us!

You will be amazed by how little code this requires. Seriously, it's not even 50 lines of code and that includes empty lines! We will be using the [canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) so let's start by assuming you have an HTML document with a canvas element on it, just like the following:

```html
<canvas id="painting" />
```

The first step is already concluded! You can now add some fancy CSS to add a background for it to look better and some dimensions. In this case I'm creating a radial gradient with two shades of blue, as well as setting the height and width to the same as of the screen.

```css
#painting {
  background: radial-gradient(#4b7bec, #3867d6);
  height: 100vh;
  width: 100vw;
}
```

Now that we have enough HTML and enough CSS, let's start with the actual code. First of all, we need to get the canvas element, as well as its 2D context in order to work with it. Then, we translate the context to the center of the canvas so we work from the center to the edges.

```javascript
const canvas = document.querySelector('#painting')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Move the context to the center
ctx.translate(canvas.width / 2, canvas.height / 2)
```

Fantastic! Now we can jump into the actual code. As you saw before, there are quite a few options we wil work with. Those are: the number of levels, the number of branches, the number of sides and the spread.

Let's start by defining the sides variable. This variable determines how many branches out of the center the snowflake will have. I will keep it as 6, but feel free to change it. After that, we call a function `draw` the same amount of times as the number of sides.

Following each call to `draw`, we must also rotate the 2D context. Knowing that `2π` is a full circle, we need to rotate it `2π / sides` each time so we can draw each branch.


```javascript
let sides = 6
// ... more variables ...

function draw (level) {
  // ...most magic happens here...
}

for (let i = 0; i < sides; i++) {
  draw(0)
  ctx.rotate(Math.PI * 2 / sides)
}
```

Did you notice that we called `draw` with an argument of 0? That is the current level. The level represents the number of recursive iterations. To ensure that we don't run into an infinite loop, we must decide on a maximum levl. For now, I will set it as 5. If we reach that level, we stop.

```javascript
// ... more variables ...
let maxLevel = 5

function draw (level) {
  if (level > maxLevel) {
    return
  }

  ctx.strokeStyle = '#d1d8e0'
  ctx.lineWidth = 4

  ctx.beginPath()
  ctx.moveTo(0, 0)
  ctx.lineTo(125, 0)
  ctx.stroke()

  // ... more magic ...
}
```

After checking if the current level is the last one, we start working on our snowflake! The first thing we set is the color and the width of the lines of the snowflake. Then, we start drawing! The lines you see above are quite self-explanatory. It starts by beginning a path, then we move the context to the center, and draw a line from (0, 0) to (125, 0).

You can try changing the values to see what you get. For now, you should see something like this:

<figure class="media">
  <div class="snowflakes">
    <canvas data-mode=static data-levels=0 data-branches=0 data-spread=0 data-sides=6 />
  </div>
  <figcaption><p>Partial snowflake with 6 sides</p></figcaption>
</figure>

Quite bare, mhmm? Now (almost) the most exciting part: the `branches`! This number represents the number of branches coming out of each branch. Thus, inside the `draw` function, we need to add a loop for each branch.

```javascript
// ... more variables ...
let branches = 2

function draw (level) {
  // ... more magic ...

  for (let i = 1; i <= branches; i++) {
    // ... the magic loop ...
  }
}
```

We're almost there! Let's define the `spread` value, which will be multiplied by `2π` to get the angle. Hence, this value represents the angle between a branch and its leafs. The largest the spread, the largest the angle. You could set the angle directly. However, for simplicity, it's easier to define this value between 0 and 1 that will then be multiplied by the `2π`.

```javascript
// ... more variables ...
let spread = 0.83
let angle = Math.PI * 2 * spread
```

Now let's fill the loop! In each iteration of the loop, we save the context so we can restore back to that state later. This is important in order to ensure we are drawing on the correct places and that we can go back to the previous spot without transformations applied.

```javascript
for (let i = 1; i <= branches; i++) {
  ctx.save()
  ctx.translate(150 * i / (branches + 1), 0)
  ctx.scale(0.5, 0.5)
  ctx.save()

  ctx.rotate(angle)
  draw(level + 1, opts)
  ctx.restore()
  ctx.save()

  ctx.rotate(-angle)
  draw(level + 1, opts)
  ctx.restore()

  ctx.restore()
}
```

The first translation and scale define where we start drawing the next branch. This value depends on the number of branches and the dimension of each branch. Here I set it to 150, even though the initial branch size is 125. You can play with this values for nicer results. I simply found out this to work better.

<details>
  <summary>The whole code</summary>

  ```javascript
  const canvas = document.querySelector('#painting')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const maxLevel = 5
  const branches = 2
  const sides = Math.floor((Math.random() * 10) + 3)
  const spread = (Math.random() * 0.48) + 0.51
  const strokeColor = '#d1d8e0'
  const lineWidth = 4
  const angle = Math.PI * 2 * spread

  function draw (level) {
    if (level > maxLevel) {
      return
    }

    ctx.strokeStyle = strokeColor
    ctx.lineWidth = lineWidth
    ctx.beginPath()
    ctx.moveTo(0, 0)
    ctx.lineTo(125, 0)
    ctx.stroke()

    for (let i = 1; i <= branches; i++) {
      ctx.save()
      ctx.translate(150 * i / (branches + 1), 0)
      ctx.scale(0.5, 0.5) // smaller from now on
      ctx.save()

      ctx.rotate(angle)
      draw(level + 1, opts)
      ctx.restore()
      ctx.save()

      ctx.rotate(-angle)
      draw(level + 1, opts)
      ctx.restore()

      ctx.restore()
    }
  }

  for (let i = 0; i < sides; i++) {
    draw(0)
    ctx.rotate(Math.PI * 2 / sides)
  }
  ```
</details>

In order to actually draw the branches, we now rotate the context by the angle and call `draw` recursively for the next level. Then, we do exactly the same for the symmetric angle so we draw leafs coming out of each side of the branch.

<figure class="media">
  <div class="snowflakes">
    <canvas data-mode=static data-levels="5" data-branches="2" data-spread="0.83" data-sides="6" />
  </div>
  <figcaption><p>Snowflake: 5 levels, 2 branches, 0.83 spread, 6 sides</p></figcaption>
</figure>

Right now, you should be able to see a similar snowflake as the one above. Play with the values, share with me your results. I hope you enjoyed this article as much as I did writing it.

Please enjoy your winter, cause spring is almost coming! For those of you in the southern hemisphere, enjoy the summer and I hope this post gave you some chills of winter. 🥶
