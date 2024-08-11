/*
  Setup Cart


*********************************

  1. features/cart/cartSlice.js
  2. create: 
    -> components/CartContainer.jsx
    -> components/CartItem.jsx


*/

import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'

function App() {
  return (
    <main>
      <Navbar />
      <CartContainer />
    </main>
  )
}
export default App
