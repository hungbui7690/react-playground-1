/*
  Calculate Totals
  (1) cartSlice.js

  *** we cannot return {} from cartSlice 
    > because we need to have a place to run calculateTotals()
    > the best place is from App.jsx

*/

import { useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'

function App() {
  const { cartItems } = useSelector((state) => state.cart) // (2a)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems]) // (2b) go to CartContainer

  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
