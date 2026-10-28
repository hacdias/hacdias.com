---
title: Ants on the Screen
date: 2026-10-28T08:32:55+01:00
categories:
  - writings
tags:
  - programming
  - javascript
  - art
  - algorithms
  - interactive
aliases:
  - /minisites/tv-noise/
feedContentWarning: true
---

It's been a while since I wrote an [interactive post](/tags/interactive/). With the cleanup of my website, I've been removing and rehousing things that no longer make sense to be where they were. One of those was a noise experiment I made years ago, whose goal was to replicate those old TVs. So I decided to bring that back as an interactive post, with more customization than ever!

<!--more-->

In the age of AI, making this sort of experiment is probably too easy, and many will not find it as interesting as it once was. However, I still think we should build software [for fun](/2025/07/23/software-for-fun/) and, with that, learn about random things.

## That Old TV

How many of us remember those old TVs with a very large and deep back that, when they lost signal, made a sound that, when too loud, could be unbearable? While making that sound -- noise -- you could also see a sort of moving black and white visual that we, in Portugal, called "formigueiro" -- literally "anthill". I think I understand why, it looks like small insects moving around.

<div id="noise" class="pixelated media">
  <button id=power aria-label=Power aria-pressed=false>⏻</button>
  <canvas />
</div>

<div id=controls>
  <div>
    <label for=in-pixel>Pixel Size</label>
    <input id=in-pixel type=range min=1 max=10 value=1 step=1/>
  </div>
  <div>
    <label for=in-brightness>Brightness</label>
    <input id=in-brightness type=range min=0 max=2 value="1.1" step="0.01"/>
  </div>
  <div>
    <label for=in-bandwidth>Bandwidth</label>
    <input id=in-bandwidth type=range min="0.05" max=1 value=1 step="0.01"/>
  </div>
  <div>
    <label for=in-interference>Interference</label>
    <input id=in-interference type=range min=0 max=1 value="0.15" step="0.01"/>
  </div>
  <div>
    <label for=in-roll>Roll</label>
    <input id=in-roll type=range min=0 max=3 value="0.5" step="0.05"/>
  </div>
  <div>
    <label for=in-volume>Volume</label>
    <input id=in-volume type=range min=0 max=1 value="0.05" step="0.01"/>
  </div>
</div>

You can try it out by pressing the **⏻ Power** button on the TV. The volume is low by default, since I thought it could be quite unpleasant and I didn't want you to be caught by surprise if your volume is high. When you're ready, raise the **Volume** to hear it better. Sound only plays if the TV is turned on.

Both the picture and the sound are randomly generated. Each pixel's brightness is a random number, and the hiss is a looped buffer of random samples. However, you can control some of them. Some controls change one of them, others change both:

- **Pixel size**: how many screen pixels wide each noise pixel is. Higher values make the picture chunkier, lower values make it more realistic I would say.
- **Brightness**: does also exactly what it says, and only changes how bright the picture is. The higher the value, the brighter it is. The lower, the darker.
- **Bandwidth**: how quickly the signal can change. Lower values run the noise through a low-pass filter: the picture starts smearing horizontally along the scan lines and the hiss gets muffled.
- **Interference**: how strong the rolling band is. The picture gets a deeper band (brighter on one side, darker on the other) and the volume also changes accordingly.
- **Roll**: how many times per second the band rolls down the screen, which also affects the sound.
- **Volume**: means exactly what the name says, changing how loud it is. Be careful with this option, since the loudness can vary quite fast. It starts low to avoid surprises.

I would just try it out. That's the whole point of this post. I kept the defaults at a place where both the sound and the visuals bring back memories, as they sort of resemble the TV my parents had. But it could be that your TV was slightly different, so feel free to play with it.

## How Does It Work?

Now, onto the code! The code for this experiment ended up growing a bit past the original one. To be able to add the new options, I had to add a volume control, a swell, a new image formula, and an audio filter. But the basic idea stayed the same.

Let's start by defining the required HTML and CSS, which I will keep short. We'll be working with a `<canvas>` which I decided to display with a 4:3 aspect ratio to honour the old TVs -- we need to stay true to the source.

```html
<div id="tv">
  <canvas />
</div>

<style>
#tv {
  background: black;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  image-rendering: pixelated;
}

#tv canvas {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
```

Also notice that the canvas in JavaScript will be created with a `1 / pixel` of the size it is displayed at, where `pixel` is the pixel size option I mentioned before. This means that CSS will stretch it back to fit the box, and that's how we create the pixel size effect. This is why we add `image-rendering: pixelated` so that browsers won't smooth the image.

Let's now define some boring options. On this example I'm not going into loading the options from the sliders to avoid more complexity than necessary. The code of `initializeAudio`, `draw` and `swell` is explained later on.

```js
// Define our options, same values as the default in the interaction above
const options = {
  pixel: 1,
  brightness: 1.1,
  bandwidth: 1,
  interference: 0.15,
  roll: 0.5,
  volume: 0.05,
}

// Get our canvas and initialize the audio
const canvas = document.querySelector('#tv canvas')
const gain = initializeAudio(options)

// Redraw the canvas and update the audio every 50 ms
setInterval(() => {
  const time = performance.now() / 1000
  draw(canvas, options, time)
  swell(gain, options, time)
}, 50)
```

Keep in mind that browsers block audio until the user interacts with the page. In practice, `initializeAudio` has to be called from a click handler, which is why the sound above only starts after pressing the **⏻ Power** button.

### The Image

```js
function draw(canvas, options, time = performance.now() / 1000) {
  const { brightness, bandwidth, interference, roll, pixel } = options
  const ctx = canvas.getContext('2d', { alpha: false })

  // Downscale appropriately
  canvas.width = Math.ceil(canvas.clientWidth / pixel)
  canvas.height = Math.ceil(canvas.clientHeight / pixel)

  // Initialize image and parameters
  const image = ctx.createImageData(canvas.width, canvas.height)
  const { width, height, data } = image
  let v = 0.5

  // Do the magic!
  for (let y = 0; y < height; y++) {
    const band =
      1 + interference * Math.sin(2 * Math.PI * (y / height - roll * time))

    for (let x = 0; x < width; x++) {
      // One-pole low-pass filter along the scan lines.
      v += bandwidth * (Math.random() - v)

      const i = (y * width + x) * 4
      data[i] = data[i + 1] = data[i + 2] = 255 * brightness * band * v
      data[i + 3] = 255
    }
  }

  ctx.putImageData(image, 0, 0)
}
```

Let's walk through the code above, which draws the image. The first part is just destructuring the options, initializing the canvas context, downscaling if necessary and a few initializations. The interesting part comes in the nested `for` loops.

The noise comes from `Math.random()` which provides enough randomness for this sort of experiment. With it, we generate a sequence of pseudo-random numbers between 0 and 1, with all frequencies in similar amounts, which is what we can call [white noise](https://en.wikipedia.org/wiki/White_noise).

We pass this noise through a one-pole [low-pass filter](https://en.wikipedia.org/wiki/Low-pass_filter) in the form of an exponential moving average, which smooths out high frequency noise. This filter is defined as `v += bandwidth * (random - v)` and this way we can customize how much of the high frequencies are attenuated. If `bandwidth` is 1, then nothing is filtered. At `0.05`, it moves much slower, without abrupt changes. Averaging ends up pulling the values towards the middle, so the lower the bandwidth, the grayer the picture will be.

The interference is just a nice [sine wave](https://en.wikipedia.org/wiki/Sine_wave). There's so much you can do with sine waves, and this is just one of those random things. This sine wave cycles every "screen" (read, canvas) height, shifting down by `roll` cycles every second. Since it multiplies by the brightness, then we get darker and lighter areas of the TV. This mimics the bands you'd get on older TVs when there was interference.

The brightness is probably the simplest: it just turns the value, between 0 and 1, into a gray level, which is written to all the RGB channels. We don't need to clip the maximum values to 255, since the canvas already does it automatically. Higher brightness means more white pixels.

### The Audio

```js
function initializeAudio(options) {
  const { bandwidth } = options
  const audio = new AudioContext()

  // Create a 2 second long buffer
  const buffer = audio.createBuffer(1, 2 * audio.sampleRate, audio.sampleRate)
  const output = buffer.getChannelData(0)

  // Fill the buffer with random samples between -1 and 1
  for (let i = 0; i < output.length; i++) {
    output[i] = Math.random() * 2 - 1
  }

  // Plug the buffer into the audio, and loop it
  const source = audio.createBufferSource()
  source.buffer = buffer
  source.loop = true

  const filter = audio.createBiquadFilter()
  const gain = audio.createGain()
  source
    .connect(filter)
    .connect(gain)
    .connect(audio.destination)

  // Cutoff frequency of the same one-pole filter used for the image
  filter.frequency.value = Math.min(
    (bandwidth * audio.sampleRate) / (2 * Math.PI * (1 - bandwidth)),
    audio.sampleRate / 2,
  )

  // Start silent, swell() sets the volume on every frame
  gain.gain.value = 0

  // Start playing
  source.start()
  return gain
}

function swell(gain, options, time) {
  const { interference, roll, volume } = options

  // Follow the band at the middle of the screen
  const middle = 1 + interference * Math.sin(2 * Math.PI * (0.5 - roll * time))
  gain.gain.setTargetAtTime(volume * middle, gain.context.currentTime, 0.02)
}
```

The idea for the audio generation is very similar to the image: at the end of the day, they're both noise. Therefore, we start by creating a 2 second long pseudo-random noise buffer, which loops indefinitely. Similarly, this buffer goes through a low-pass filter and then a volume control in the shape of a gain control. Then, onto the speakers!

The low-pass filter in this case is a [biquad filter](https://en.wikipedia.org/wiki/Digital_biquad_filter), which is available natively with the Web Audio API. This is not exactly the same filter as before. The image filter is a first-order filter, while this is a second-order filter, so it cuts in a different way above the cutoff than the image's filter. In addition, it takes a cutoff frequency instead of a coefficient.

Wikipedia's [low-pass filter](https://en.wikipedia.org/wiki/Low-pass_filter#Discrete-time_realization) article explains how both are related: `fc = bandwidth / ((1 - bandwidth) * 2π * ΔT)`, where `ΔT` is the time between samples, `1 / sampleRate`. At 0.05, that's around 400 Hz, which sounds muffled. At 0.5, it's around 7 to 8 kHz, depending on the sample rate. From about 0.76 up, it goes past half the sample rate, so it's capped there and nothing is filtered.

The swell you hear follows the band in the picture. On every frame, `swell` sets the volume to `volume` times the band's value at the middle of the screen: the same formula as the image, with `y / height` fixed at `0.5`. The sound is loudest when the bright part of the band crosses the middle of the screen, and both always stay in sync. To avoid abrupt jumps -- or clicks! -- `setTargetAtTime` smooths the transition.

---

I hope you liked this experiment as much as I did. Rewriting this to include more control forced me to also learn some new concepts, as well as refresh others from university time. I also hope all the information I gave is accurate, so let me know if there's anything wrong! Enjoy the old TV nostalgia.
