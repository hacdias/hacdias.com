const mql = window.matchMedia('(prefers-color-scheme: dark)');

function toggleT (to) {
  localStorage.setItem('t', to);
  theme(mql);
}

function theme (query) {
  const userOption = localStorage.getItem('t');

  document.body.id = userOption === null
    ? (query.matches ? 'dark' : '')
    : (userOption === 'd' ? 'dark' : '');
}

mql.addListener(theme);
theme(mql);
