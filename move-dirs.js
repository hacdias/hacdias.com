const fs = require("fs")
const yaml = require('js-yaml')
const path = require("path")

const BASE_DIR = './content/blog'

const dirs = fs.readdirSync(BASE_DIR)
  .filter(p => fs.statSync(path.join(BASE_DIR, p)).isDirectory())

// find . -type d -print | xargs rmdir

const toParse = {}

for (const dir of dirs) {
  const indexPath = path.join(BASE_DIR, dir, 'index.md')
  const [ frontmatter, markdown ] = fs.readFileSync(indexPath).toString().split('\n---\n')

  const meta = yaml.safeLoad(frontmatter)

  const date = new Date(meta.date)
  const year = date.getFullYear().toString()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')

  if (!toParse[year]) toParse[year] = {}
  if (!toParse[year][month]) toParse[year][month] = {}
  if (!toParse[year][month][day]) toParse[year][month][day] = []

  toParse[year][month][day].push({
    dir,
    indexPath,
    meta,
    markdown
  })
}

for (const year in toParse) {
  for (const month in toParse[year]) {
    for (const day in toParse[year][month]) {
      for (let i = 1; i <= toParse[year][month][day].length; i++) {
        let { indexPath, dir, meta, markdown } = toParse[year][month][day][i - 1]

        const num = i.toString().padStart('2', '0')

        if (meta.author) delete meta.author
        if (meta.image) delete meta.image
      
        meta.categories = [
          'blog'
        ]
      
        meta.aliases = [
          `/${year}/${month}/${day}/${num}/`
        ]
      
        const slug = meta.slug
        delete meta.slug
        delete meta.type

        const oldURL = `/${year}/${month}/${slug}`
        const newURL = `/${year}/${month}/${day}/${num}/${slug}`
      
        fs.writeFileSync(indexPath, `---\n${yaml.safeDump(meta, { sortKeys: true })}\n---\n${markdown}`)
      
        fs.mkdirSync(path.join('./content/', year, month, day, num), { recursive: true })
      
        fs.renameSync(
          path.join(BASE_DIR, dir),
          path.join('./content/', year, month, day, num, slug)
        )
      
        console.log(oldURL, newURL)
      }
    }
  }
}
