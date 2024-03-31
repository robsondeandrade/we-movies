import pkg from 'json-server'
const { create, router: _router, defaults } = pkg
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import customMiddleware from './middlewares.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const server = create()
const middlewares = defaults()
const dbRouter = _router(join(__dirname, 'db.json'))

server.use(middlewares)
server.use(customMiddleware)
server.use(dbRouter)

server.listen(5000, () => {})
