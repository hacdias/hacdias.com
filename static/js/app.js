'use strict'

let oldScroll = window.scrollY

function scrollEvent (event) {
  let down = oldScroll < window.scrollY
  oldScroll = window.scrollY

  if (down) {
    document.querySelectorAll('.on-scroll-down').forEach(el => el.classList.add('visible'))
  } else {
    document.querySelectorAll('.on-scroll-down').forEach(el => el.classList.remove('visible'))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  scrollEvent()
  window.addEventListener('scroll', scrollEvent)
})
