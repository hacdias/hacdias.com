const message = '◕‿◕-hi!'

function welcomeMessage () {
  let index = 0

  const update = () => {
    window.location.hash = message.slice(0, ++index)
    if (index === message.length) return
    setTimeout(update, 1000 - index * 100)
  }

  update()
}

welcomeMessage()
