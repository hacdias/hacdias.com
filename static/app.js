'use strict'

function scrollEvent (event) {
  let nav = document.querySelector('body')

  if (window.scrollY === 0) {
    nav.classList.remove('scrolled')
  } else {
    nav.classList.add('scrolled')
  }
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').classList.add('loaded')
  scrollEvent()
  window.addEventListener('scroll', scrollEvent)
})
