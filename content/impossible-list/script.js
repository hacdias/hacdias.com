function setDisplay(parentElement, option) {
  if (!parentElement) {
    return false
  }

  const items = Array.from(parentElement.querySelectorAll(':scope > li'))
  if (items.length === 0) {
    return false
  }

  for (const item of items) {
    const checked = item.querySelector('input[type="checkbox"]').checked
    const hasVisibleChildren = setDisplay(
      item.querySelector(':scope > ul'),
      option
    )

    switch (option) {
      case 'checked':
        if (checked) {
          item.classList.remove('dn')
        } else if (!hasVisibleChildren) {
          item.classList.add('dn')
        }

        break

      case 'unchecked':
        if (checked) {
          if (!hasVisibleChildren) item.classList.add('dn')
        } else {
          item.classList.remove('dn')
        }

        break

      default:
        item.classList.remove('dn')
        break
    }
  }

  return items.some((item) => !item.classList.contains('dn'))
}

const option = new URL(document.location).searchParams.get('show')
if (option) {
  Array.from(document.querySelectorAll('.checklist')).forEach((checklist) => {
    setDisplay(checklist, option)
  })
}
