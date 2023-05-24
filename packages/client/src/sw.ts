/// <reference lib="webworker" />д

import Cache from './utils/sw/Cache';
import WormServiceWorker, { calcVersion, createWormServiceWorker, ManifestItem } from './utils/sw/sw';

declare const self: ServiceWorkerGlobalScope;


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
  console.log("pathItems", pathItems);

  const cache = new Cache({
    cacheName: SW_CACHE_NAME,
    version: calcVersion(pathItems)
  })

  try {

    sw = await createWormServiceWorker({ cache, pathItems });
  }
  catch (exp) {
    console.error(exp);
  }
}

self.addEventListener('install', event => {
  event.waitUntil(sw.install())
})

self.addEventListener('activate', event => {
  console.info('activate111ggg');
  event.waitUntil(sw.activate())
})

self.addEventListener('fetch', event => {
  if (WormServiceWorker.defaultFetch(event)) return;

  event.respondWith(sw.fetch(event))
})


startServiceWorker()
