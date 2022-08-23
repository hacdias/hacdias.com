console.log(
  "%cHi! 👋 It's Henrique and welcome to my corner of the Interweb. Feel free to explore. If you have any questions, ping me @hacdias.",
  "background-color: #00449e ; color: white ; font-weight: bold ; " +
  "font-size: 30px ; " +
  "font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif; text-shadow: 1px 1px 3px black ;"
)

function parseEmojis (el) {
  twemoji.parse(el, {
    base: 'https://cdn.hacdias.com/emojis/14.0.1/',
    folder: 'svg',
    ext: '.svg'
  })
}

function setupPreview() {
  const preview = document.createElement("div")

  preview.id = 'preview'
  preview.className = 'dn'
  preview.addEventListener('click', () => {
    preview.classList.add('dn')
    preview.innerHTML = ''
  })

  document.body.appendChild(preview)

  const images = document.querySelectorAll('article figure img')
  Array.from(images).forEach(img => {
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', () => {
      preview.classList.remove('dn')
      preview.innerHTML = `<img src="${img.src}">`
    })
  })
}

parseEmojis(document.body)
setupPreview()

if (editor) {
  editor.setup()
}
