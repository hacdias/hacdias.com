const mql = window.matchMedia('(prefers-color-scheme: dark)')

function toggleTheme (to) {
  if (to) {
    localStorage.setItem('t', to)
  } else {
    localStorage.removeItem('t')
  }

  handleTheme()
}

function handleTheme (query) {
  if (!query) {
    query = mql
  }

  const userOption = localStorage.getItem('t')
  const addDark = userOption === null ? query.matches : (userOption === 'd')

  if (addDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

function setupTheme () {
  mql.addEventListener('change', handleTheme)
  handleTheme(mql)
}

setupTheme()
