import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import './index.css'
import { GreenSyncApolloProvider } from 'greensync-ui'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <GreenSyncApolloProvider>
  <App />
  </GreenSyncApolloProvider>
  </React.StrictMode>,
)
