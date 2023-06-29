import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { BrowserRouter } from 'react-router-dom'
import { createStore, type AppState } from './store'
import App from './App'

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={createStore({} as AppState)}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
)
