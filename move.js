const fs = require("fs")
const path = require("path")

const BASE_DIR = './content/blog'

const dirs = fs.readdirSync(BASE_DIR)
  .filter(p => fs.statSync(path.join(BASE_DIR, p)).isDirectory())

const pad = dirs.sort((a, b) => b.length - a.length)[0].length + 15

for (const dir of dirs) {
  const indexPath = path.join(BASE_DIR, dir, 'index.md')
  const index = fs.readFileSync(indexPath).toString()
    .replace('---\n', `---\nslug: ${dir}\n`, 1)

  const date = new Date(index.split('---\n')
    .filter(p => p !== '')[0]
    .split('\n')
    .filter(p => p.startsWith('date:'))[0]
    .replace('date:', '')
    .trim())

  const year = date.getFullYear()
  const month = date.getMonth() + 1

  const oldURL = `/blog/${dir}`
  const newURL = `/blog/${year}/${month}/${dir}`

  fs.writeFileSync(indexPath, index)
  fs.renameSync(path.join(BASE_DIR, dir), path.join(BASE_DIR, `${year}-${month}-${dir}`))

  console.log(`${oldURL.padEnd(pad)} ${newURL}`)
}