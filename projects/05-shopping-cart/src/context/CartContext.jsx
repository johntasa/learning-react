import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []
  const [cart, setCart] = useState(cartInitialState)
  

  const updateLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
    console.log('cart:', state, window.localStorage)
  }

  const addItem = (item) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((cartItem) => cartItem.id === item.id)
      if (index === -1) {
        const newCart = [...prevCart, { ...item, quantity: 1 }]
        updateLocalStorage(newCart)
        return newCart
      } else {
        const newCart = [...prevCart]
        newCart[index].quantity++
        updateLocalStorage(newCart)
        return newCart
      }
    })
  }

  const removeItem = (itemId) => {
    setCart((prevCart) => {
      const index = prevCart.findIndex((cartItem) => cartItem.id === itemId)
      if (index === -1) {
        updateLocalStorage(prevCart)
        return prevCart
      } else {
        const newCart = [...prevCart]
        newCart[index].quantity--
        if (newCart[index].quantity === 0) {
          newCart.splice(index, 1)
        }
        updateLocalStorage(newCart)
        return newCart
      }
    })
  }

  const clearCart = () => {
    updateLocalStorage([])
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addItem,
      removeItem,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}