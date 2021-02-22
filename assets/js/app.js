console.log(
  "%cHi! 👋 It's Henrique and welcome to my corner of the Interweb. Feel free to explore. If you have any questions, ping me @hacdias.",
  "background-color: #00449e ; color: white ; font-weight: bold ; " +
  "font-size: 30px ; " +
  "font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif; text-shadow: 1px 1px 3px black ;"
)

function parseEmojis (el) {
  twemoji.parse(el, {
    base: 'https://cdn.hacdias.com/emojis/13.0.0/',
    folder: 'svg',
    ext: '.svg'
  })
}

function footnotes () {
  const footnotes = document.querySelectorAll('.footnote-ref')
  if (footnotes.length === 0) {
    return
  }

  const wrapper = document.createElement('div')
  wrapper.classList.add('dn')
  wrapper.id = 'footnote'
  document.body.appendChild(wrapper)

  document.querySelectorAll('.footnote-ref').forEach((ref) => {
    const id = new URL(ref.href).hash.substring(1)
    const footnote = document.getElementById(id)

    ref.addEventListener('mouseover', evt => {
      const rect = ref.getBoundingClientRect();
      wrapper.classList.remove("dn")
      wrapper.style.left = `${rect.left + window.scrollX}px`
      wrapper.style.top = `${rect.top + window.scrollY + rect.height}px`
      wrapper.innerText = footnote.innerText.replace('↩︎', '').trim()
    })

    ref.addEventListener('mouseout', evt => {
      const x = evt.clientX
      const y = evt.clientY + 5

      const rect = wrapper.getBoundingClientRect()

      if (x >= rect.x && y >= rect.y && x <= rect.x + rect.width && y <= rect.y + rect.height) {
        wrapper.addEventListener('mouseout', () => {
          wrapper.classList.add("dn")
        }, { once: true })

        return
      }

      wrapper.classList.add("dn")
    })
  })
}

function toc () {
  if (!document.getElementById("toc")) {
    return
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`#toc a[href="#${id}"]`).classList.add('active');
      } else {
        document.querySelector(`#toc a[href="#${id}"]`).classList.remove('active');
      }
    })
  })

  document.querySelectorAll('h2[id], h3[id]').forEach((section) => {
    observer.observe(section);
  })
}

// For MathJax enabled pages
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
}

if (window.mermaid) {
  mermaid.initialize({ theme: 'forest' });
  mermaid.init('.language-mermaid');
}

parseEmojis(document.body)
footnotes()
toc()
