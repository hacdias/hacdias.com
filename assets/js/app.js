console.log(
  "%cHi! 👋 It's Henrique and welcome to my corner of the Interweb. Feel free to explore. If you have any questions, ping me @hacdias.",
  "background-color: #00449e ; color: white ; font-weight: bold ; " +
  "font-size: 30px ; " +
  "font-family: -apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica,helvetica neue,ubuntu,roboto,noto,segoe ui,arial,sans-serif; text-shadow: 1px 1px 3px black ;"
)

function parseEmojis (el) {
  twemoji.parse(el, {
    base: 'https://cdn.hacdias.com/emojis/13.1.0/',
    folder: 'svg',
    ext: '.svg'
  })
}

// For MathJax enabled pages
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
}

if (window.mermaid) {
  mermaid.initialize({ theme: 'forest' });
  mermaid.init('.language-mermaid');
}

parseEmojis(document.body)
