const locationElement = document.querySelector('input[name=location]')

if (locationElement) {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = (Math.round(position.coords.latitude * 100000) / 100000)
    const longitude = (Math.round(position.coords.longitude * 100000) / 100000)
    const accuracy = (Math.round(position.coords.accuracy * 100000) / 100000)
    const uri = `geo:${latitude},${longitude};u=${accuracy}`
    locationElement.value = uri
  }, console.error)
}
