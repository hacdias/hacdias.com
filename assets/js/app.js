function addEmoji() {
  const today = new Date()
  const month = today.getMonth() + 1
  const day = today.getDate()
  let emoji = null
  let title = ''

  if ((month === 12 && day === 31) || (month === 1 && day <= 2)) {
    emoji = '🥂'
    title = 'Happy New Year!'
  } else if (month === 5 && day === 17) {
    emoji = '🌈'
    title = 'International Day Against Homophobia, Biphobia and Transphobia'
  } else if (month === 6) {
    emoji = '🏳️‍🌈'
    title = 'Happy Pride Month!'
  } else if (month === 7 && day === 12) {
    emoji = '🎂'
    const age = today.getFullYear() - 2014
    const suffix = { one: 'st', two: 'nd', few: 'rd', other: 'th' }[
      new Intl.PluralRules('en', { type: 'ordinal' }).select(age)
    ]
    title = `Happy ${age}${suffix} Cake Day, Website!`
  } else if (month === 10 && day === 22) {
    emoji = '🥳'
    title = 'Happy Birthday to Me!'
  } else if (month === 10 && day >= 30) {
    emoji = '🎃'
    title = 'Happy Halloween!'
  } else if (month === 11 && day === 1) {
    emoji = '🍞'
    title = `Happy All Saints' Day!`
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
    span.textContent = emoji
    el.innerHTML += ' '
    el.appendChild(span)
  }
}

function parseEmojis() {
  twemoji.parse(document.body, {
    base: 'https://media.hacdias.com/emoji/17.0.3/',
    folder: 'svg',
    ext: '.svg',
  })
}

function setupPreview() {
  const preview = document.createElement('div')
  preview.id = 'preview'
  preview.className = 'dn'
  document.body.appendChild(preview)

  let thumb = null

  const animate = (update) => {
    if (
      !document.startViewTransition ||
      matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      update()
      return Promise.resolve()
    }
    return document.startViewTransition(update).finished
  }

  // Largest resized candidate in the same format the browser picked for the
  // thumbnail, or the original upload if the screen can show more than that.
  const largestSrc = (img, ratio) => {
    const sources = Array.from(
      img.closest('picture')?.querySelectorAll('source') ?? [],
    )
    const source =
      sources.find((s) => s.srcset.includes(img.currentSrc)) ?? sources[0]

    if (!source) {
      return img.src
    }

    const [src, w] = source.srcset
      .split(',')
      .map((c) => c.trim().split(/\s+/))
      .sort((a, b) => parseInt(b[1]) - parseInt(a[1]))[0]
    const largest = parseInt(w)
    const needed = Math.min(innerWidth, innerHeight * ratio) * devicePixelRatio

    if (
      img.dataset.original &&
      needed > largest &&
      img.getAttribute('width') > largest
    ) {
      return img.dataset.original
    }

    return src
  }

  const open = async (img) => {
    const ratio =
      img.naturalWidth / img.naturalHeight ||
      img.getAttribute('width') / img.getAttribute('height')

    const full = new Image()
    full.alt = img.alt
    full.src = img.currentSrc || img.src // Already downloaded for thumbnail
    full.style.setProperty('--ratio', ratio)
    await full.decode().catch(() => {})

    thumb = img
    img.style.viewTransitionName = 'lightbox'
    animate(() => {
      img.style.viewTransitionName = ''
      full.style.viewTransitionName = 'lightbox'
      preview.replaceChildren(full)
      preview.classList.remove('dn')
    })

    // Swap in the high-resolution version once it's ready.
    const hi = largestSrc(img, ratio)
    if (hi !== full.src) {
      const big = new Image()
      big.src = hi
      big.decode().then(
        () => {
          if (preview.contains(full)) full.src = hi
        },
        () => {},
      )
    }
  }

  const close = () => {
    if (!thumb) return
    const img = thumb
    thumb = null
    animate(() => {
      img.style.viewTransitionName = 'lightbox'
      preview.classList.add('dn')
      preview.replaceChildren()
    }).finally(() => {
      img.style.viewTransitionName = ''
    })
  }

  preview.addEventListener('click', close)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') close()
  })

  const images = document.querySelectorAll('article figure img')
  Array.from(images).forEach((img) => {
    if (img.closest('.card, a')) return
    img.style.cursor = 'zoom-in'
    img.addEventListener('click', () => open(img))
  })
}

document.addEventListener('DOMContentLoaded', () => {
  addEmoji()
  parseEmojis()
  setupPreview()
})

console.log(
  "%cHi! 👋 It's @hacdias. Welcome to other side!",
  'background-color: #FF10F0; color: white; font-weight: 700; font-size: 30px; font-family: sans-serif;',
)
