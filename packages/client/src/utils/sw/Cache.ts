export default class Cache {

  cacheNameBase: string;

  cacheName: string;

  readonly version: string;

  constructor({ cacheName, version }: { cacheName: string, version: string }) {
    this.cacheNameBase = cacheName
    this.version = version
    this.cacheName = `${cacheName}::${version}`;
  }

  private async open() {
    return caches.open(this.cacheName);
  }

  async saveAllStatic(paths: string[]) {
    const cache = await this.open();
    return cache.addAll(paths)
  }

  async getSavedFetch(key: RequestInfo | URL) {
    return caches.match(key, { cacheName: this.cacheName });
  }

  async saveFetch(key: RequestInfo | URL, value: Response) {
    const cache = await this.open();
    cache.put(key, value);
  }

  async deteleOld() {
    const cacheNames = await caches.keys()
     
    return Promise.all(
      cacheNames
        .filter(name => name !== this.cacheName && name.startsWith(this.cacheNameBase))
        .map((name) => caches.delete(name))
    )

  }
}


