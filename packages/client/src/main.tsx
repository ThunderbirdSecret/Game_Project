import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";

import { createStore } from '@/store/store'

import App from './App'
// import { store } from './store'

/* ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
*/

const store = createStore((window as any).initialState);

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <React.StrictMode>
    <BrowserRouter>
    <App store={store} />
    </BrowserRouter>
  </React.StrictMode>
)
