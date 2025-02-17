import { createRoot } from 'react-dom/client'
import { ApolloProvider } from '@apollo/client'
import App from './App.jsx'
import client from './api/client.js'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
)
