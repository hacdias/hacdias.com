const element = document.getElementById('hello')
const helloText = ['Hi, I’m', 'Hoi, Ik ben', 'Olá, sou o']

let helloTextIndex = 0

setInterval(() => {
  helloTextIndex = (helloTextIndex + 1) % 3
  element.innerText = helloText[helloTextIndex]
}, 2000)
