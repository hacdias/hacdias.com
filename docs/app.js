'use strict'

function scrollEvent (event) {
  let nav = document.querySelector('body')

  if (window.scrollY === 0) {
    nav.classList.remove('scrolled')
  } else {
    nav.classList.add('scrolled')
  }
}

function slider (element, time) {
  let figure = element.querySelector('figure')
  let left = 0
  let stop = false

  let change = (value) => {
    left += value * 100

    if (value > 0 && left > 0) {
      left = (figure.childElementCount - 1) * -100
    } else if (value < 0 && left <= figure.childElementCount * -100) {
      left = 0
    }

    figure.style.left = left + '%'
  }

  element.querySelector('button.right').addEventListener('click', event => {
    event.preventDefault()
    stop = true
    change(-1)
  })

  element.querySelector('button.left').addEventListener('click', event => {
    event.preventDefault()
    stop = true
    change(1)
  })

  let auto = () => {
    if (stop) return
    change(-1)
    setTimeout(auto, time)
  }

  setTimeout(auto, time)
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('body').classList.add('loaded')
  scrollEvent()
  window.addEventListener('scroll', scrollEvent)

  let sliders = document.querySelectorAll('.slider')
  for (let i = 0; i < sliders.length; i++) {
    slider(sliders[i], 5000)
  }
})
