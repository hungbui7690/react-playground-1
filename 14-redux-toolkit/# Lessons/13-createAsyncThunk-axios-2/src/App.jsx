/*
  createAsyncThunk - More Options
  - cartSlice.js

  *** in some situations, when we need to pass argument
    > instead of this:
        useEffect(() => {
          dispatch(getCartItems())
        }, [])
    > we want to have this: 
        useEffect(() => {
          dispatch(getCartItems('random value'))
        }, [])

  *** thunkAPI param
    > has a lot of useful functions
    > getState()
    > dispatch()
    > allow us to contact with other slice

*/

import { useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems('random value')) // (1) we want to have argument here >>  cartSlice.js
  }, [])

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
