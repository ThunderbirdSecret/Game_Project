import dotenv from 'dotenv'

dotenv.config()

import cors from 'cors'
import express from 'express'
import * as fs from 'fs'
import * as path from 'path'
import { createServer as createViteServer } from 'vite'
import type { ViteDevServer } from 'vite'

import { createProxyMiddleware } from 'http-proxy-middleware'
import cookieParser from 'cookie-parser'
//import { YandexAPIRepository } from './repository/YandexAPIRepository'

//import { createClientAndConnect } from './db'

interface SSRModule {
  render: (
    uri: string//,
    // repository: any
  ) => Promise<[Record<string, any>, string]>
}

const enum PATHS {
  oauthProxy = '/api/v2',
  api = '/api',
  assets = '/assets',
};

const enum PROXY_URLS {
  yaOauth = 'https://ya-praktikum.tech'
};

const app = express()
const isDev = () => process.env.NODE_ENV === 'development'

async function createServer() {
  const port = Number(process.env.SERVER_PORT) || 3003
  app.use(cors())

  let vite: ViteDevServer | undefined
  // Достаем файлы из node_modules
  // Важно! папка client будет внутри server/dist только после создания и передачи yarn link "client"

  const clientPath = path.dirname(require.resolve('client'))
  const clientDistPath = path.dirname(require.resolve('client/dist/index.html'))
  const clientDistSSRPath = path.dirname(require.resolve('client/ssr-dist/client.cjs'))


  app.get(PATHS.api, (_, res) => {
    res.json('👋 Howdy from the server :) 2')
  })

  if (!isDev()) {
    app.use(PATHS.assets, express.static(path.resolve(clientDistPath, 'assets')))
  }

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: clientPath,
      appType: 'custom',
    })

    app.use(vite.middlewares)
  }

  app.use(
    PATHS.oauthProxy,
    createProxyMiddleware({
      changeOrigin: true,
      cookieDomainRewrite: {
        '*': '',
      },
      target: PROXY_URLS.yaOauth,
    })
  )

  app.use('*', cookieParser(), async (req, res, next) => {
    const url = req.originalUrl

    try {

      // читаем index.html
      let template = fs.readFileSync(path.resolve(isDev() ? clientPath : clientDistPath, 'index.html'),
        'utf-8')
      if (isDev()) {
        template = await vite!.transformIndexHtml(url, template)
      }

      let mod: SSRModule
      if (isDev()) {
        mod = (await vite!.ssrLoadModule(path.resolve(clientPath, 'ssr.tsx'))) as SSRModule
      } else {
        mod = await import(require.resolve(path.resolve(clientDistSSRPath, 'client.cjs')))
      }

      const { render } = mod //Promise<string>
      const [initialState, appHtml] = await render(
        url//,
        // new YandexAPIRepository(req.headers['cookie'], PROXY_URLS.yaOauth + PATHS.oauthProxy)
      )

      const initStateSerialized = JSON.stringify(initialState)

      const html = template
        .replace('<!--ssr-outlet-->', appHtml) // замена коммента на HTML разметку
        .replace('window.__ssr_inital_state__', initStateSerialized)

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html)

    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error)
      }
      next(e)
    }
  })

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`)
  })
}

createServer()


//createClientAndConnect()

// lsof -i :3001 -t
