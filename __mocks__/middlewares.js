import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { readFileSync } from 'fs'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const dbPath = join(__dirname, 'db.json')

const removeAccents = (text) =>
    text.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

export default (req, res, next) => {
    if (req.method === 'GET' && req.query.title_like) {
        const data = JSON.parse(readFileSync(dbPath, { encoding: 'utf-8' }))
        const search = removeAccents(req.query.title_like.toLowerCase())

        const filteredData = data.products.filter((product) =>
            removeAccents(product.title.toLowerCase()).includes(search),
        )

        res.status(200).send(filteredData)
    } else {
        next()
    }
}
