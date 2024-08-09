import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
const container = document.getElementById('root')
const root = createRoot(container)

import { store } from './store' // (2a)
import { Provider } from 'react-redux'

// (2b)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
