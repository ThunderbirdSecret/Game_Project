import dotenv from 'dotenv'
import cors from 'cors'
import express from 'express'
import { fileURLToPath } from 'url'
import fs from 'fs'
import fallback from 'express-history-api-fallback'
import path from 'path'
import { createServer as createViteServer } from 'vite'

//import { createClientAndConnect } from './db'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const app = express()
const port = Number(process.env.SERVER_PORT) || 3001

async function createServer() {
 const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: 'custom'
 })
 app.use(vite.middlewares)

 app.use('*', async (req, res, next) => {
   // serve index.html
   const url = req.originalUrl

    try {
    // 1. Read index.html
      let template = fs.readFileSync(
        path.resolve(__dirname, 'index.html'),
        'utf-8',
    )

    template = await vite.transformIndexHtml(url, template)
    const { render } = await vite.ssrLoadModule('packages/client/src/server.ts')
    const appHtml = await render(url)

    const html = template.replace(`<!--ssr-outlet-->`, appHtml)

    res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
  } catch (e: any) {

    vite.ssrFixStacktrace(e)
    next(e)
  }
 })

 app.listen(port, () => {
  console.log(`  ➜ 🎸 SSR on: ${port}`)
})
}

createServer()

dotenv.config()
const root = path.resolve(__dirname, '../client/dist')

app.use(cors())

//createClientAndConnect()

//app.get('/', (_, res) => {
//  res.json('👋 Howdy from the server :)')
//})

app.use(express.static(root))
app.use(fallback('index.html', { root }))

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
})

// lsof -i :3001 -t
