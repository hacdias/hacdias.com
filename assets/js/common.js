const favicon = document.querySelector('link[rel=icon]')

function emojiToDataURL (emoji, size = '64') {
  const canvas = document.createElement('canvas')
  canvas.height = size
  canvas.width = size

  const ctx = canvas.getContext('2d')
  ctx.font = `${size}px serif`
  ctx.fillText(emoji, 0, size)
  return canvas.toDataURL()
}

if (favicon) {
  const emoji = favicon.getAttribute('data-emoji')

  if (emoji) {
    favicon.href = emojiToDataURL(emoji)
  }
}
