function typewriter() {
  const element = document.getElementById('hello')
  const greetings = ["Hi, I'm", 'Hoi, ik ben', 'Olá, sou o']
  const name = 'Henrique'
  const suffix = '!'

  let greetingIndex = 0,
    charIndex = 0,
    isDeleting = false

  function buildHTML(count) {
    const greeting = greetings[greetingIndex]
    const chars = [...greeting, ' ', ...name, ...suffix]
    const p = greeting.length + 1
    const n = p + name.length
    const pre = chars.slice(0, Math.min(count, p)).join('')
    const mid = chars.slice(p, Math.min(count, n)).join('')
    const suf = chars.slice(n, count).join('')
    return pre + (mid ? `<span style="color:var(--c)">${mid}</span>` : '') + suf
  }

  function type() {
    isDeleting ? charIndex-- : charIndex++
    element.innerHTML = buildHTML(charIndex)
    const fullLen =
      greetings[greetingIndex].length + 1 + name.length + suffix.length
    let delay = isDeleting ? 50 : 80
    if (!isDeleting && charIndex === fullLen) {
      delay = 2000
      isDeleting = true
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false
      greetingIndex = (greetingIndex + 1) % greetings.length
      delay = 400
    }
    setTimeout(type, delay)
  }

  charIndex = greetings[0].length + 1 + name.length + suffix.length
  element.innerHTML = buildHTML(charIndex)

  setTimeout(() => {
    isDeleting = true
    type()
  }, 2000)
}

if (!window.matchMedia('(prefers-reduced-motion)').matches) {
  typewriter()
}
