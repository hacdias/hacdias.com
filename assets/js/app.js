console.log(
  "%cHi! 👋 It's Henrique and welcome to my corner of the Interweb. Feel free to explore. If you have any questions, ping me @hacdias.",
  'background-color: #00449e ; color: white ; font-weight: 700 ; ' +
    'font-size: 30px ; ' +
    'font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif; text-shadow: 1px 1px 3px black ;'
)

function addEmoji(el) {
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

  if (emoji) {
    const span = document.createElement('span')
    span.title = title
    span.innerText = emoji
    el.innerHTML += ' '
    el.appendChild(span)
  }
}

function parseEmojis(el) {
  twemoji.parse(el, {
    base: 'https://cdn.hacdias.com/emojis/15.1.0/',
    folder: 'svg',
    ext: '.svg',
  })

  Array.from(document.querySelectorAll('img.emoji')).forEach((img) => {
    img.style.width = '1em'
    img.style.height = '1em'
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

addEmoji(document.querySelector('#header .name'))
parseEmojis(document.body)
setupPreview()
