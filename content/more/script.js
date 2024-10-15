const trigger = document.getElementById('trigger')
const more = document.getElementById('more-list')
const moreLinks = more.querySelectorAll('a')
const musicEl = document.getElementById('music')

trigger.dataset.status = 'clickable'
trigger.title = 'Should you click?'
musicEl.currentTime = 0
musicEl.load()

Array.from(moreLinks).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    if (more.classList.contains('nyan')) musicEl.play()
  })

  el.addEventListener('mouseleave', () => {
    if (more.classList.contains('nyan')) musicEl.pause()
  })
})

trigger.addEventListener(
  'click',
  async () => {
    more.classList.toggle('nyan')
    trigger.dataset.status = 'clicked'
    trigger.title = 'You clicked... brave... what changed?'
  },
  { once: true }
)
