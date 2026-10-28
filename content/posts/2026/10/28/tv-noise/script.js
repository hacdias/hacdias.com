const canvas = document.querySelector('#noise canvas')
const ctx = canvas.getContext('2d', { alpha: false })
const power = document.getElementById('power')

let opts, image, timer
let audio, filter, gain

function options() {
  return {
    pixel: Number.parseInt(document.getElementById('in-pixel').value, 10),
    brightness: Number.parseFloat(
      document.getElementById('in-brightness').value,
    ),
    bandwidth: Number.parseFloat(document.getElementById('in-bandwidth').value),
    interference: Number.parseFloat(
      document.getElementById('in-interference').value,
    ),
    roll: Number.parseFloat(document.getElementById('in-roll').value),
    volume: Number.parseFloat(document.getElementById('in-volume').value),
  }
}

function resize() {
  canvas.width = Math.ceil(canvas.clientWidth / opts.pixel)
  canvas.height = Math.ceil(canvas.clientHeight / opts.pixel)
  image = ctx.createImageData(canvas.width, canvas.height)
}

function draw(time) {
  const { brightness, bandwidth, interference, roll, volume } = opts
  const { width, height, data } = image
  let v = 0.5

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

  // The sound follows the band at the middle of the screen.
  if (audio?.state === 'running') {
    const middle =
      1 + interference * Math.sin(2 * Math.PI * (0.5 - roll * time))
    gain.gain.setTargetAtTime(volume * middle, audio.currentTime, 0.02)
  }
}

function createAudio() {
  // iOS mutes Web Audio in silent mode unless the session is 'playback'.
  if (navigator.audioSession) {
    navigator.audioSession.type = 'playback'
  }

  audio = new AudioContext()

  const buffer = audio.createBuffer(1, 2 * audio.sampleRate, audio.sampleRate)
  const output = buffer.getChannelData(0)

  for (let i = 0; i < output.length; i++) {
    output[i] = Math.random() * 2 - 1
  }

  const source = audio.createBufferSource()
  source.buffer = buffer
  source.loop = true

  filter = audio.createBiquadFilter()
  gain = audio.createGain()
  gain.gain.value = 0
  source.connect(filter).connect(gain).connect(audio.destination)

  updateAudio()
  source.start()
}

function updateAudio() {
  if (!audio) {
    return
  }

  // Cutoff frequency of the same one-pole filter used for the image.
  filter.frequency.value = Math.min(
    (opts.bandwidth * audio.sampleRate) / (2 * Math.PI * (1 - opts.bandwidth)),
    audio.sampleRate / 2,
  )
}

function pressed(button) {
  return button.getAttribute('aria-pressed') === 'true'
}

function sync() {
  const on = pressed(power)

  clearInterval(timer)
  timer = on ? setInterval(() => draw(performance.now() / 1000), 50) : null

  if (on && !audio) {
    createAudio()
  } else if (audio) {
    on ? audio.resume() : audio.suspend()
  }
}

power.addEventListener('click', () => {
  power.setAttribute('aria-pressed', !pressed(power))
  sync()
})

document.getElementById('controls').addEventListener('input', () => {
  const pixel = opts.pixel
  opts = options()

  if (opts.pixel !== pixel) {
    resize()
  }

  updateAudio()

  if (!timer) {
    draw(performance.now() / 1000)
  }
})

opts = options()
resize()
draw(0)
