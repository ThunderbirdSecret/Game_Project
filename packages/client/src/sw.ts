/// <reference lib="webworker" />д

import Cache from './utils/sw/Cache';
import WormServiceWorker, { calcVersion, ManifestItem } from './utils/sw/sw';
// import { NavigationRoute } from 'workbox-routing/NavigationRoute';
// import { createHandlerForURL } from 'workbox-precaching/createHandlerForURL';

declare const self: ServiceWorkerGlobalScope;

// по-хорошему, надо сообщить пользователю, что он offline и попробовать анализировать флаг в utils/sw/sw
// window.addEventListener('offline', () => showOfflineBar());

// export empty type because of tsc --isolatedModules flag
export type { };

const SW_CACHE_NAME = 'game-worms'
let sw: WormServiceWorker;

function getPathItems() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return (self.__WB_MANIFEST || []) as ManifestItem[];
}

async function startServiceWorker() {
  const pathItems = getPathItems();

  const cache = new Cache({
    cacheName: SW_CACHE_NAME,
    version: calcVersion(pathItems)
  })

  sw = new WormServiceWorker({ cache, pathItems });
}

self.addEventListener('install', event => {

  // self.skipWaiting()
  event.waitUntil(sw.install())
})

self.addEventListener('activate', event => {

  event.waitUntil(sw.activate())
})

self.addEventListener('fetch', event => {
  if (WormServiceWorker.useDefaultFetch(event)) return;

  event.respondWith(sw.fetch(event))
})


startServiceWorker()
