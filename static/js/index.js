var sentences = [
  'I study Computer Engineering.',
  'I am an Open Source advocate.',
  'I also enjoy writing and photography.'
]

var which = 0
var element = document.querySelector('.medium')

function removeText (callback) {
  let text = element.innerHTML
  let fn = () => {
    if (text.length === 1) {
      return callback()
    }

    text = text.slice(0, -1)
    element.innerText = text
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
      element.innerText = phrase[n]
    } else if (phrase[n] === ' ') {
      n++
      element.innerText = element.innerText + ' ' + phrase[n]
    } else {
      element.innerText = element.innerText + phrase[n]
    }

    n++
    setTimeout(fn, 50)
  }

  fn()
}

function updatePhrase () {
  which++
  if (which >= sentences.length) {
    which = 0
  }

  removeText(() => {
    writeText(sentences[which], () => {
      setTimeout(updatePhrase, 2000)
    })
  })
}

setTimeout(updatePhrase, 2000)
