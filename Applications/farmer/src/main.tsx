
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'

import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { GreenSyncApolloProvider } from 'greensync-ui';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GreenSyncApolloProvider>
      <BrowserRouter><App/></BrowserRouter>
    </GreenSyncApolloProvider>
  </React.StrictMode>
)