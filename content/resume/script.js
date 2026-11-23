const params = new URL(document.location).searchParams

for (const id of params.getAll('hide')) {
  let el = document.getElementById(id)
  el?.classList.add('dn')
  el = el?.nextSibling

  while (el?.classList.contains('resume-position')) {
    el.classList.add('dn')
    el = el.nextSibling
  }
}

for (const id of params.getAll('short')) {
  let el = document.getElementById(id).nextSibling

  while (el?.classList.contains('resume-position')) {
    el.querySelector('ul')?.classList.add('dn')
    el.querySelector('div > small + small')?.classList.add('dn')
    el = el.nextSibling
  }
}
