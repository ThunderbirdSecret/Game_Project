import { isRoute } from '../../routes';
import { hashCode } from '../hashCode';
import Cache from './Cache';
import logger from '../logger';

const IGNORE_METHODS = new Set(["put", "post"]);

export type ManifestItem = {
  url: string;
  revision: string | null
}

type Props = {
  cache: Cache;
  pathItems: ManifestItem[];
}

export default class WormServiceWorker {

  private cache: Cache;

  private pathItems: ManifestItem[];

  constructor({ cache, pathItems }: Props) {
    this.cache = cache
    this.pathItems = pathItems;
  }

  install() {
    // добавляем новую статику в кеш
    return this.cache.saveAllStatic(this.pathItems.map(item => item.url));
  }

  activate() {
    // удаляем из кеша старую статику и fetch
    return this.cache.deteleOld();
  }

  private static isOkResponse(response: Response) {
    // response.type = basic: Normal, same origin response, with all headers exposed except "Set-Cookie".

    return (response && (response.status >= 200 && response.status < 300) && response.type === 'basic')
  }

  static useDefaultFetch(event: FetchEvent) {
    return (IGNORE_METHODS.has(event.request.method.toLocaleLowerCase()));
  }

  async fetch(event: FetchEvent) {

    let { url } = event.request;
    let isRouteUrl = false;

    const urlObj = new URL(url);
    const firstPath = urlObj.pathname.split("/")[1];
    if (firstPath) {
      isRouteUrl = (isRoute(`/${firstPath}`));
      if (isRouteUrl) {
        url = `${urlObj.origin}/index.html`;
      }
    }
     
    // Пытаемся найти ответ на такой запрос в кеше 
    let cachedResponse;
    if (isRouteUrl) {
      logger.log("route to ", url);
      cachedResponse = await this.cache.getSavedFetch(url)
    }
    else {
      cachedResponse = await this.cache.getSavedFetch(event.request)
    }

    // Если ответ найден, выдаём его 
    if (cachedResponse) {
      logger.log("cachedResponse");
      return cachedResponse;
    }

    logger.log("network");
    // В противном случае делаем запрос на сервер 
    const fetchRequest = event.request.clone();
    const response = await fetch(fetchRequest);

    // Если что-то пошло не так, выдаём в основной поток результат, но не кладём его в кеш 
    if (!WormServiceWorker.isOkResponse(response)) {
      return response;
    }

    const responseToCache = response.clone();
    this.cache.saveFetch(event.request, responseToCache);

    return response;
  }

}

export function calcVersion(pathItems: ManifestItem[]) {
  const str = pathItems.map(item => `${item.url}::${item.revision || ""}`).join("::");
  return pathItems.length > 0 ? String(hashCode(str)) : String((new Date()).getTime());
}

