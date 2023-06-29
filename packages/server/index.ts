import dotenv from 'dotenv'

dotenv.config()


import cors from 'cors'
import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'



//import { createClientAndConnect } from './db'

const app = express()
const isDev = () => process.env.NODE_ENV === 'development'


async function createServer() {
  const port = Number(process.env.SERVER_PORT) || 3001
  app.use(cors())


  let vite: ViteDevServer | undefined;
  // Достаем файлы из node_modules
  // Важно! папка client будет внутри server/dist только после создания и передачи yarn link "client"
  const distPath = path.dirname(require.resolve('client/dist/index.html'))
  const srcPath = path.dirname(require.resolve('client'))
  const ssrClientPath = require.resolve('client/ssr-dist/client.cjs')

  
  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom'
    })

    app.use(vite.middlewares)
  }

  app.get('/api', (_, res) => {
    res.json('👋 Howdy from the server :) 2')
  })

  // async function init() {
  //   await dbConnect();
  // }
    // app.use('/api', apiRouter);
//TODO добавить db и роутер

  if (!isDev()) {
    app.use('/assets', express.static(path.resolve(distPath, 'assets')))
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      let template: string;

      if (!isDev()) { // читаем index.html
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8',
        )
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8',
        )

        template = await vite!.transformIndexHtml(url, template)

      }

      let render: () => Promise<string>;

      if (!isDev()) {
        render = (await import(ssrClientPath)).render;
      } else {
        render = (await vite!.ssrLoadModule(path.resolve(srcPath, 'ssr.tsx'))).render;
      }

      const appHtml = await render()

      const html = template.replace(`<!--ssr-outlet-->`, appHtml) // замена коммента на HTML разметку

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

createServer()


//createClientAndConnect()

// lsof -i :3001 -t
