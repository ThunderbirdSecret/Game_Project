class Resources {
  resourceCache: Record<string, any> = {}

  loading = []

  readyCallbacks: any[] = []

  load(urlOrArr: any) {
    if (urlOrArr instanceof Array) {
      urlOrArr.forEach(async url => {
        await this._load(url)
      })
    } else {
      this._load(urlOrArr)
    }
  }

  // eslint-disable-next-line consistent-return
  _load(url: string) {
    if (this.resourceCache[url]) {
      return this.resourceCache[url]
    }

    const img = new Image()
    img.onload = () => {
      this.resourceCache[url] = img

      if (this.isReady()) {
        this.readyCallbacks.forEach((func: any) => {
          func()
        })
      }
    }
    this.resourceCache[url] = false
    img.src = url
  }

  get(url: string) {
    return this.resourceCache[url]
  }

  isReady() {
    let ready = true
    // eslint-disable-next-line no-restricted-syntax
    for (const k in this.resourceCache) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.resourceCache.hasOwnProperty(k) && !this.resourceCache[k]) {
        ready = false
      }
    }
    return ready
  }

  onReady(func: any) {
    this.readyCallbacks.push(func)
  }
}

export default new Resources()
