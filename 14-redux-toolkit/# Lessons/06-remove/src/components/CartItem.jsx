import { useDispatch } from 'react-redux'
import { removeItem } from '../features/cart/cartSlice'
import { ChevronDown, ChevronUp } from '../icons'

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch() // (3a)

  return (
    <article className='cart-item'>
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className='item-price'>${price}</h4>
        {/* (3b) remove button >> in this case, ID === action.payload */}
        <button className='remove-btn' onClick={() => dispatch(removeItem(id))}>
          remove
        </button>
      </div>
      <div>
        {/* increase amount */}
        <button className='amount-btn'>
          <ChevronUp />
        </button>
        {/* amount */}
        <p className='amount'>{amount}</p>
        {/* decrease amount */}
        <button className='amount-btn'>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
