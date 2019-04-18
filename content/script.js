const message = '(◕‿◕) Hi! Welcome :)'

function welcomeMessage () {
  const title = document.title
  let index = 0

  const update = () => {
    document.title = message.slice(0, ++index)

    if (index === message.length) {
      setTimeout(() => { document.title = title }, 1000)
    } else {
      setTimeout(update, Math.max(1000 - index * 100, 200))
    }
  }

  setTimeout(update, 1000)
}

welcomeMessage()
