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
  const icon = (d, size) =>
    `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${d}"/></svg>`

  const preview = document.createElement('div')
  preview.id = 'preview'
  preview.className = 'dn'
  preview.role = 'dialog'
  preview.ariaModal = 'true'
  preview.ariaLabel = 'Photo preview'
  preview.innerHTML = `
    <div class="bar">
      <span class="count" aria-live="polite"></span>
      <button class="close" aria-label="Close">${icon('M18 6 6 18M6 6l12 12', 18)}</button>
    </div>
    <button class="prev" aria-label="Previous photo">${icon('m15 18-6-6 6-6', 20)}</button>
    <button class="next" aria-label="Next photo">${icon('m9 18 6-6-6-6', 20)}</button>
    <div class="info">
      <div class="caption"><strong></strong><span class="date"></span><a class="post">View post →</a></div>
    </div>`
  document.body.appendChild(preview)

  const [count, closeButton, prev, next, title, date, post] = [
    '.count',
    '.close',
    '.prev',
    '.next',
    '.caption strong',
    '.date',
    '.post',
  ].map((s) => preview.querySelector(s))

  // Images inside [data-preview-links] links open in the preview instead of
  // following the link, which is shown in the preview.
  const links = (img) => img.closest('[data-preview-links] a')
  const group = Array.from(
    document.querySelectorAll('article figure img, [data-preview-links] img'),
  ).filter((img) => links(img) || !img.closest('.card, a'))
  preview.classList.toggle('single', group.length < 2)

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

  // Smallest resized candidate that fills the screen, in the same format the
  // browser picked for the thumbnail, or the original upload if the screen can
  // show more than the largest.
  const previewSrc = (img, ratio) => {
    const sources = Array.from(
      img.closest('picture')?.querySelectorAll('source') ?? [],
    )
    const source =
      sources.find((s) => s.srcset.includes(img.currentSrc)) ?? sources[0]

    if (!source) {
      return img.src
    }

    const candidates = source.srcset
      .split(',')
      .map((c) => c.trim().split(/\s+/))
      .sort((a, b) => parseInt(a[1]) - parseInt(b[1]))
    const [src, w] = candidates.at(-1)
    const largest = parseInt(w)
    const needed = Math.min(innerWidth, innerHeight * ratio) * devicePixelRatio

    if (
      img.dataset.original &&
      needed > largest &&
      img.getAttribute('width') > largest
    ) {
      return img.dataset.original
    }

    return candidates.find((c) => parseInt(c[1]) >= needed)?.[0] ?? src
  }

  // Lazy-loaded thumbnails that haven't loaded yet have no natural size.
  const ratioOf = (img) =>
    img.naturalWidth / img.naturalHeight ||
    img.getAttribute('width') / img.getAttribute('height')

  // Preview image for img, named for the morph, decoded and ready to show.
  const load = async (img) => {
    const hi = previewSrc(img, ratioOf(img))

    const full = new Image()
    full.alt = img.alt
    full.src = img.currentSrc || hi // Thumbnail's, if already downloaded
    full.style.viewTransitionName = 'lightbox'
    await full.decode().catch(() => {})
    full.style.setProperty('--ratio', full.naturalWidth / full.naturalHeight)

    // Swap in the high-resolution version once it's ready.
    if (hi !== full.src) {
      const big = new Image()
      big.src = hi
      big.decode().then(
        () => (full.src = hi),
        () => {},
      )
    }

    return full
  }

  const show = (img, full) => {
    const i = group.indexOf(img)
    count.textContent = `${i + 1} / ${group.length}`
    prev.disabled = i === 0
    next.disabled = i === group.length - 1

    const link = links(img)
    preview.classList.toggle('captioned', !!link)
    if (link) {
      title.textContent = link.dataset.title
      date.textContent = link.dataset.date
      post.href = link.href
    }

    preview.querySelector('img')?.remove()
    preview.prepend(full)

    // Move focus in on open, and off a button that just got disabled.
    const focused = document.activeElement
    if (!preview.contains(focused) || focused.disabled) closeButton.focus()

    // Load the thumbnail too, so closing can morph into it.
    img.loading = 'eager'
    for (const n of [group[i - 1], group[i + 1]]) {
      if (n) new Image().src = previewSrc(n, ratioOf(n))
    }
  }

  const open = async (img) => {
    const full = await load(img)

    thumb = img
    img.style.viewTransitionName = 'lightbox'
    animate(() => {
      img.style.viewTransitionName = ''
      preview.classList.remove('dn')
      show(img, full)
    })
  }

  const go = async (step) => {
    const img = thumb && group[group.indexOf(thumb) + step]
    if (!img) return
    thumb = img
    const full = await load(img)
    if (thumb === img) show(img, full) // Unless closed or moved on meanwhile
  }

  const close = () => {
    if (!thumb) return
    const img = thumb
    thumb = null
    img.scrollIntoView({ block: 'nearest', behavior: 'instant' })
    ;(links(img) ?? img).focus({ preventScroll: true })
    animate(() => {
      img.style.viewTransitionName = 'lightbox'
      preview.classList.add('dn')
      preview.querySelector('img')?.remove()
    }).finally(() => {
      img.style.viewTransitionName = ''
    })
  }

  closeButton.addEventListener('click', close)
  prev.addEventListener('click', () => go(-1))
  next.addEventListener('click', () => go(1))
  preview.addEventListener('click', (e) => {
    if (!e.target.closest('img, button, a, .caption')) close()
  })

  // One-finger swipe, mostly horizontal.
  let touch = null
  preview.addEventListener(
    'touchstart',
    (e) => (touch = e.touches.length === 1 ? e.touches[0] : null),
    { passive: true },
  )
  preview.addEventListener('touchend', (e) => {
    if (!touch || e.touches.length) return
    const dx = e.changedTouches[0].clientX - touch.clientX
    const dy = e.changedTouches[0].clientY - touch.clientY
    touch = null
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) go(dx < 0 ? 1 : -1)
  })
  document.addEventListener('keydown', (e) => {
    // Keep Tab inside the open preview.
    if (e.key === 'Tab' && thumb) {
      const items = [
        ...preview.querySelectorAll('button:enabled, a[href]'),
      ].filter((el) => el.checkVisibility())
      const edge = e.shiftKey ? items[0] : items.at(-1)
      if (
        !preview.contains(document.activeElement) ||
        document.activeElement === edge
      ) {
        e.preventDefault()
        ;(e.shiftKey ? items.at(-1) : items[0]).focus()
      }
    }
    // Holding a key would download every photo passed: ignore repeated
    // arrows, and stop a held Enter from clicking a button again.
    if (e.repeat) {
      if (thumb && e.key === 'Enter') e.preventDefault()
      return
    }
    if (e.key === 'Escape') close()
    if (e.key === 'ArrowLeft') go(-1)
    if (e.key === 'ArrowRight') go(1)
  })

  group.forEach((img) => {
    const opener = links(img) ?? img
    if (opener === img) img.tabIndex = -1 // So focus can return to it
    img.style.cursor = 'zoom-in'
    opener.addEventListener('click', (e) => {
      // Modified and middle clicks still open links.
      if (e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
      e.preventDefault()
      open(img)
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
  'background-color: #FF10F0; color: white; font-weight: 700; font-size: 30px; font-family: sans-serif;',
)
