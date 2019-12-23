const favicon = document.querySelector('link[rel=icon]')
const mql = window.matchMedia('(prefers-color-scheme: dark)')

function emojiToDataURL (emoji, size = '64') {
  const canvas = document.createElement('canvas')
  canvas.height = size
  canvas.width = size

  const ctx = canvas.getContext('2d')
  ctx.font = `${size}px serif`
  ctx.fillText(emoji, 0, size)
  return canvas.toDataURL()
}

function toggleTheme (to) {
  if (to) {
    localStorage.setItem('t', to)
  } else {
    localStorage.removeItem('t')
  }
  
  handleTheme()
}

function handleTheme (query) {
  if (!query) {
    query = mql
  }

  const userOption = localStorage.getItem('t')

  if (userOption === null) {
    document.body.id = (query.matches ? 'dark' : '')
  } else {
    document.body.id = (userOption === 'd' ? 'dark' : '')
  }
}

function setupTheme () {
  mql.addListener(handleTheme)
  handleTheme(mql)
}

if (favicon) {
  const emoji = favicon.getAttribute('data-emoji')

  if (emoji) {
    favicon.href = emojiToDataURL(emoji)
  }
}

setupTheme()
