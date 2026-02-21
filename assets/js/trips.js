const details = document.querySelectorAll('.trips details')

details.forEach((target) => {
  target.addEventListener('toggle', (e) => {
    if (e.target.open) {
      details.forEach((detail) => {
        if (detail !== e.target && detail.open) detail.open = false
      })
    }
  })
})
