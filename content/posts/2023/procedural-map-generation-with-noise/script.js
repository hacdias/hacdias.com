const Noise = window.noise

function biome (e) {
  if (e < 0.3) {
    return '#2c52a0'
  } else if (e < 0.4) {
    return '#3766c8'
  } else if (e < 0.45) {
    return '#d0d080'
  } else if (e < 0.55) {
    return '#589619'
  } else if (e < 0.60) {
    return '#426220'
  } else if (e < 0.70) {
    return '#5c453e'
  } else if (e < 0.85) {
    return '#4d3b39'
  } else {
    return '#ffffff'
  }
}

function render (canvas, { noise = 'perlin', seed = Math.random(), scale = 150, octaves = 5, persistence = 0.5, lacunarity = 2.5 } = {}) {
  console.log({ seed, scale, octaves, persistence, lacunarity })
  console.time('RENDER')

  Noise.seed(seed)

  const ctx = canvas.getContext('2d', { alpha: false })
  const height = Math.floor(canvas.height)
  const width = Math.floor(canvas.width)

  let elev = [...Array(height)].map(e => Array(width))

  // Keep the minimum and maximum values so we can do linear interpolation
  // to determine the color to assign each pixel.
  let min = Number.POSITIVE_INFINITY
  let max = Number.NEGATIVE_INFINITY

  const algo = noise === 'perlin' ? Noise.perlin2 : Noise.simplex2

  // Generate the elevation map for every pixel in the canvas.
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let amplitude = 1
      let frequency = 1
      let noise = 0

      // Apply each one of the octaves on top of each other.
      for (let i = 0; i < octaves; i++) {
        let sX = x / scale * frequency
        let sY = y / scale * frequency
        noise += algo(sX, sY) * amplitude

        amplitude *= persistence
        frequency *= lacunarity
      }

      // Update maximum and minimum values.
      max = Math.max(noise, max)
      min = Math.min(noise, min)
      elev[y][x] = noise
    }
  }

  for (let [y] of elev.entries()) {
    for (let [x] of elev[y].entries()) {
      // Use linear interpolation to get the elevation value between 0 a 1.
      let n = (elev[y][x] - min) / (max - min)

      // Fill the rectangle with right color representing this value.
      ctx.fillStyle = biome(n)
      ctx.fillRect(x * 1, y * 1, 1, 1)
    }
  }

  console.timeEnd('RENDER')
}

function buildFromInput () {
  render(document.querySelector('#map canvas'), {
    seed: Number.parseInt(document.getElementById('in-seed').value),
    noise: document.getElementById('in-noise').value,
    scale: Number.parseInt(document.getElementById('in-scale').value),
    octaves: Number.parseInt(document.getElementById('in-octaves').value),
    persistence: Number.parseFloat(document.getElementById('in-persistence').value),
    lacunarity: Number.parseFloat(document.getElementById('in-lacunarity').value),
  })
}

buildFromInput()

document.getElementById('in-seed').addEventListener('change', () => buildFromInput())
document.getElementById('in-scale').addEventListener('change', () => buildFromInput())
document.getElementById('in-octaves').addEventListener('change', () => buildFromInput())
document.getElementById('in-persistence').addEventListener('change', () => buildFromInput())
document.getElementById('in-lacunarity').addEventListener('change', () => buildFromInput())
document.getElementById('in-noise').addEventListener('change', () => buildFromInput())
