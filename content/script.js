var sentences = [
  document.title,
  'Hello!',
  'I\'m Henrique!',
  'aka @hacdias',
  'Welcome!',
  document.title
]

var which = 0

function removeText (callback) {
  let text = document.title
  let fn = () => {
    if (text.length === 1) {
      return callback()
    }

    text = text.slice(0, -1)
    document.title = text
    setTimeout(fn, 50)
  }

  fn()
}

function writeText (phrase, callback) {
  let n = 0

  let fn = () => {
    if (n === phrase.length) {
      return callback()
    }

    if (n === 0) {
      document.title = phrase[n]
    } else if (phrase[n] === ' ') {
      n++
      document.title = document.title + ' ' + phrase[n]
    } else {
      document.title = document.title + phrase[n]
    }

    n++
    setTimeout(fn, 50)
  }

  fn()
}

function updatePhrase () {
  which++
  if (which >= sentences.length) {
    return
  }

  removeText(() => {
    writeText(sentences[which], () => {
      setTimeout(updatePhrase, 2000)
    })
  })
}

setTimeout(updatePhrase, 2000)
