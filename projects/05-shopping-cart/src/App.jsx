// import { products as initialProducts } from './mocks/products.json'

import { Cart } from "./components/Cart.jsx"
import { Header } from "./components/Header.jsx"
import { Products } from "./components/Products.jsx"
import { useFilters } from './hooks/useFilters.js'
import { CartProvider } from './context/CartContext.jsx'
import { useProducts } from "./hooks/useProducts.js"

function App() {
  const { filterProducts } = useFilters()
  const { products, loading } = useProducts()

  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      {
        loading
          ? <p>Loading...</p>
          : <Products products={filteredProducts} />
      }
      <Cart />
    </CartProvider>
  )
}

export default App
