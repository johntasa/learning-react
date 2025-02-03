import { useId, useContext } from 'react'
import './Cart.css'
import { CartIcon, ClearCartIcon } from './Icons.jsx'
import { CartContext } from '../context/CartContext'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, addItem, removeItem, clearCart } = useContext(CartContext)

  const handleClick = ({item, itemId}) => () => {
    itemId ? removeItem(itemId) : addItem(item)
  }

  return (
    <>
      <label className="cart-button" htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />
      <aside className='cart'>
        <h2>Cart</h2>
        <ul>
          {
            cart.map(item => {
              return (
                <li key={item.id}>
                  <img src={item.thumbnail} alt='Product' />
                  <div>
                    <strong>{item.title}</strong> - ${item.price}
                  </div>
                  <div>
                    <button onClick={handleClick({itemId: item.id})}>-</button>
                      {item.quantity}
                    <button onClick={handleClick({item})}>+</button>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div>
          <strong>Total</strong> - ${cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <button onClick={clearCart}>
            <ClearCartIcon />
          </button>
          <button>Checkout</button>
        </div>
      </aside>
    </>
  )
}