import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'
import { CharactersProvider } from './context/CharactersContext.jsx'
import { ApolloProvider } from '@apollo/client'
import client from './api/client.js'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
    <CharactersProvider>
      <App />
    </CharactersProvider>
  </ApolloProvider>
  </StrictMode>
)
