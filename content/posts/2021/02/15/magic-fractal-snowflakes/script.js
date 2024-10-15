function random() {
  maxLevel = 5
  branches = 2
  sides = Math.floor(Math.random() * 10 + 3)
  spread = Math.random() * 0.48 + 0.51
}

function draw(level, opts) {
  const { ctx, maxLevel, branches, angle, strokeColor, lineWidth } = opts
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
    ctx.translate((150 * i) / (branches + 1), 0)
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

function drawSnowflake(opts) {
  const { ctx, maxLevel, branches, spread, sides, strokeColor, lineWidth } =
    opts

  ctx.resetTransform()
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
  ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2)

  let angle = Math.PI * 2 * spread

  for (let i = 0; i < sides; i++) {
    draw(0, { angle, ctx, ...opts })
    ctx.rotate((Math.PI * 2) / sides)
  }
}

function drawFromInput(ctx) {
  const values = {
    ctx,
    maxLevel: Number.parseInt(document.getElementById('maxLevel').value),
    branches: Number.parseInt(document.getElementById('branches').value),
    spread: Number.parseFloat(document.getElementById('spread').value),
    sides: Number.parseInt(document.getElementById('sides').value),
    strokeColor: '#d1d8e0',
    lineWidth: 4,
  }

  drawSnowflake(values)
}

const snowflakes = Array.from(
  document.querySelectorAll('.snowflakes canvas')
).forEach((canvas) => {
  const mode = canvas.dataset.mode
  const ctx = canvas.getContext('2d')
  canvas.width = canvas.height = 400

  if (mode === 'interactive') {
    drawFromInput(ctx)

    document
      .getElementById('maxLevel')
      .addEventListener('change', () => drawFromInput(ctx))
    document
      .getElementById('branches')
      .addEventListener('change', () => drawFromInput(ctx))
    document
      .getElementById('spread')
      .addEventListener('change', () => drawFromInput(ctx))
    document
      .getElementById('sides')
      .addEventListener('change', () => drawFromInput(ctx))
  } else {
    drawSnowflake({
      ctx,
      maxLevel: Number.parseInt(canvas.dataset.levels),
      branches: Number.parseInt(canvas.dataset.branches),
      spread: Number.parseFloat(canvas.dataset.spread),
      sides: Number.parseInt(canvas.dataset.sides),
      strokeColor: '#d1d8e0',
      lineWidth: 4,
    })
  }
})
