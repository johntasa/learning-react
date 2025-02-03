import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { CartContext } from '../context/CartContext.jsx'
import { useContext } from 'react'

export function Products ({ products }) {
  const { cart, addItem, removeItem } = useContext(CartContext)

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {
          products.slice(0, 15).map(product => {
            const isProductInCart = checkProductInCart(product)
            return(
              <li key={product.id}>
                <img src={product.thumbnail} alt={product.description} />
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button onClick={() => 
                    isProductInCart
                      ? removeItem(product.id)
                      : addItem(product)
                  }>
                    {
                      isProductInCart
                        ? <RemoveFromCartIcon />
                        : <AddToCartIcon />
                    }
                  </button>
                </div>
              </li>
            )
          })
        }
      </ul>
    </main>
  )
}