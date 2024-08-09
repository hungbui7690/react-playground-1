import CartItem from './CartItem'
import { useSelector, useDispatch } from 'react-redux' // (2a) load useDispatch
import { clearCart } from '../features/cart/cartSlice' // (2b)

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart)
  const dispatch = useDispatch() // (2c)

  if (amount < 1) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
      </section>
    )
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />
        })}
      </div>
      {/* cart footer */}
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
          }} // (2d)
        >
          clear cart
        </button>
      </footer>
    </section>
  )
}

export default CartContainer
