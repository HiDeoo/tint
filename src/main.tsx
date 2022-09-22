import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/App'

ReactDOM.createRoot(document.querySelector('#app') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
