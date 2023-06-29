import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { createStore, type AppState } from './store'

const initialStateString = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

if (initialStateString) {
  const initialState = (JSON.parse(initialStateString) as AppState) || {}
  ReactDOM.hydrateRoot(
    document.querySelector('#root') as HTMLElement,
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={createStore(initialState)}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  )
}
