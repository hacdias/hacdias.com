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

footnotes()
