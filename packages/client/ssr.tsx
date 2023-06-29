import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';

import { matchPath } from 'react-router-dom'

import App from './src/App'
import { createStore } from '@/store/store'
import listRoutes from '@/utils/routesMapping'
// import serialize from 'serialize-javascript'

export async function render(uri: string, /*, repository*/) {

  const { store, initialState } = await storeByUri(uri)

  let didError = false;
  const reactHtml  = renderToString(
    <StaticRouter location={uri}>
        <App store={store}/>
    </StaticRouter>,
  );


  return [initialState, reactHtml]
}


async function storeByUri(uri: string) {
  const store = createStore(/*repository*/)

  const [pathname] = uri.split('?')
  const currentRoute = listRoutes.find(route => matchPath(pathname, route.path))

  const loader = currentRoute?.loader
  if (loader) {
    await loader(store.dispatch)
  }

  const initialState = store.getState()
  return {store, initialState};
}
