/*
  createAsyncThunk - More Options
  ~~ npm install axios


******************************

  - instead of using fetch() -> we use axios 
    -> since fetch() cannot handle 404 error
      # the only thing it can handle is network error


******************************

  1. cartSlice.js


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
    dispatch(getCartItems())
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
