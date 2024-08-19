import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux' // 3. load useDispatch
import { clearCart } from '../features/cart/cartSlice' // 4.

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch() // 5.

  if (amount < 1) {
    return (
      <section className='cart'>
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      <header>
        <h2>your bag</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      <footer>
        <hr />
        <div className='cart-total'>
          <h4>
            total <span>${total}</span>
          </h4>
        </div>
        <button
          className='btn clear-btn'
          onClick={() => {
            dispatch(clearCart())
          }} // 6.
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
