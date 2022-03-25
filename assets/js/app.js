console.log(
  "%cHi! 👋 It's Henrique and welcome to my corner of the Interweb. Feel free to explore. If you have any questions, ping me @hacdias.",
  "background-color: #00449e ; color: white ; font-weight: bold ; " +
  "font-size: 30px ; " +
  "font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif; text-shadow: 1px 1px 3px black ;"
)

function parseEmojis (el) {
  twemoji.parse(el, {
    base: 'https://cdn.hacdias.com/emojis/13.1.0/',
    folder: 'svg',
    ext: '.svg'
  })
}

function setupLightbox() {
  const lightbox = document.createElement("div")
  
  lightbox.id = 'lightbox';
  lightbox.className = 'dn cp'
  
  lightbox.addEventListener('click', () => {
    lightbox.classList.add('dn')
    lightbox.innerHTML = ''
  })
  
  document.body.appendChild(lightbox)
  
  const images = document.querySelectorAll('article figure img')
  Array.from(images).forEach(img => {
    img.classList.add('cp')
    img.addEventListener('click', () => {
      lightbox.classList.remove('dn')
      lightbox.innerHTML = `<img src="${img.src}">`
    })
  })
}

parseEmojis(document.body)
setupLightbox()
