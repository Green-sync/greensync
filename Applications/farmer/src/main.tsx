
import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.tsx'
import { ApolloProvider } from '@apollo/client';
import {graphQL} from "./utils/graphql.config";

import './index.css'
import {BrowserRouter} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ApolloProvider client={graphQL}>
    <BrowserRouter><App/></BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
)