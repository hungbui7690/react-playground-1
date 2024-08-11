import { CartIcon } from '../icons'
import { useSelector } from 'react-redux' // 1.

const Navbar = () => {
  console.log(
    useSelector((store) => {
      console.log(store)
    })
  )
  const { amount } = useSelector((store) => store.cart) // 2. with useSelector, we can access to the entire state

  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className='nav-container'>
          <CartIcon />
          <div className='amount-container'>
            {/* 3. */}
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
