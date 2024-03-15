import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

import "./styles/global.css"
import { Toaster } from 'react-hot-toast'
import { JsonProvider } from './context/json-context'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <JsonProvider>
     <App />
     <Toaster position="bottom-center" reverseOrder={false} />
    </JsonProvider>
  </React.StrictMode>,
)
