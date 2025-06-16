const mql = window.matchMedia('(prefers-color-scheme: dark)')

function toggleTheme(to) {
  if (to) {
    localStorage.setItem('t', to)
  } else {
    localStorage.removeItem('t')
  }

  handleTheme()
}

function handleTheme(query) {
  if (!query) {
    query = mql
  }

  const userOption = localStorage.getItem('t')
  const addDark = userOption === null ? query.matches : userOption === 'd'

  if (addDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function setupTheme() {
  mql.addEventListener('change', handleTheme)
  handleTheme(mql)
}

setupTheme()

function addEmoji() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  let emoji = null
  let title = ''

  if (month === 1 && day <= 2) {
    emoji = '🥂'
    title = 'Happy New Year!'
  } else if (month === 5 && day === 17) {
    emoji = '🌈'
    title = 'International Day Against Homophobia, Biphobia and Transphobia'
  } else if (month === 6) {
    emoji = '🏳️‍🌈'
    title = 'Happy Pride Month!'
  } else if (month === 7 && day === 12) {
    emoji = '🎈'
    title = `Happy ${today.getFullYear() - 2014}th Birthday to This Website!`
  } else if (month === 10 && day === 22) {
    emoji = '🎂'
    title = 'Happy Birthday to Me!'
  } else if (month === 10 && day >= 30) {
    emoji = '🎃'
    title = 'Happy Halloween!'
  } else if (month === 11 && day === 1) {
    emoji = '👻'
    title = `Happy All Saint's Day!`
  } else if (month === 12 && day === 5) {
    emoji = '🍪'
    title = 'Prettige Sinterklaas!'
  } else if (month === 12 && day >= 20 && day <= 26) {
    emoji = '🎄'
    title = 'Happy Christmas!'
  }

  const el = document.querySelector('#header .name')
  if (emoji) {
    const span = document.createElement('span')
    span.title = title
    span.innerText = emoji
    el.innerHTML += ' '
    el.appendChild(span)
  }
}

function parseEmojis() {
  twemoji.parse(document.body, {
    base: 'https://cdn.hacdias.com/emojis/16.0.1/',
    folder: 'svg',
    ext: '.svg',
  })
}

function setupPreview() {
  const preview = document.createElement('div')

  preview.id = 'preview'
  preview.className = 'dn'
  preview.addEventListener('click', () => {
    preview.classList.add('dn')
    preview.innerHTML = ''
  })

  document.body.appendChild(preview)

  const images = document.querySelectorAll('article figure img')
  Array.from(images).forEach((img) => {
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', () => {
      preview.classList.remove('dn')
      preview.innerHTML = `<img src="${img.src}">`
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  addEmoji()
  parseEmojis()
  setupPreview()
})

console.log(
  "%cHi! 👋 It's @hacdias. Welcome to other side!",
  'background-color: #FF10F0; color: white; font-weight: 700; font-size: 30px; font-family: sans-serif;'
)
