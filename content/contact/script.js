const span = document.getElementById('timezone-note')
const time = span.querySelector('time')

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Europe/Amsterdam',
})

const updateDate = () => {
  const formattedDate = formatter.format(new Date())
  time.innerText = formattedDate
}

updateDate()
span.classList.remove('dn')
setTimeout(() => {
  updateDate()
  setInterval(updateDate, 60 * 1000)
}, (60 - new Date().getSeconds()) * 1000)
