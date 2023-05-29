/// <reference lib="webworker" />д

import logger from './utils/logger'
import Cache from './utils/sw/Cache'
import WormServiceWorker, { calcVersion, ManifestItem } from './utils/sw/sw'

declare const self: ServiceWorkerGlobalScope

// по-хорошему, надо сообщить пользователю, что он offline и попробовать анализировать флаг в utils/sw/sw
// window.addEventListener('offline', () => showOfflineBar());
// navigator.onLine
// запретить logout, редактирование профиля в offline

// export empty type because of tsc --isolatedModules flag
export type {}

const SW_CACHE_NAME = 'game-worms'
let sw: WormServiceWorker

function getPathItems() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (self.__WB_MANIFEST || []) as ManifestItem[]
}

async function startServiceWorker() {
  const pathItems = getPathItems()
  logger.log('pathItems', pathItems)

  const cache = new Cache({
    cacheName: SW_CACHE_NAME,
    version: calcVersion(pathItems),
  })

  sw = new WormServiceWorker({ cache, pathItems })
}

self.addEventListener('install', event => {
  logger.log('install')

  self.skipWaiting()
  event.waitUntil(sw.install())
})

self.addEventListener('activate', event => {
  logger.log('activate')
  event.waitUntil(sw.activate())
})

self.addEventListener('fetch', event => {
  logger.log(`fetch url:${event.request.url}`)

  if (WormServiceWorker.useDefaultFetch(event)) {
    logger.log('fetch ignore')
    return
  }

  event.respondWith(sw.fetch(event))
})

startServiceWorker()
