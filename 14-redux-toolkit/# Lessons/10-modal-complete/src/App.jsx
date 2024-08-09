/*
  Modal Slice
  - create features/modal/modalSlice.js

*/

import { useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals } from './features/cart/cartSlice'
import Modal from './components/Modal'

function App() {
  const { cartItems } = useSelector((state) => state.cart)
  const { isOpen } = useSelector((state) => state.modal) // (3a)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  // (3b) cartContainer.jsx
  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
