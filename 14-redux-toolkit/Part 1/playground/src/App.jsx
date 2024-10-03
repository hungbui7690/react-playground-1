/*
  Setup Cart


*********************************

  1. features/cart/cartSlice.js

    const initialState = {
      cartItems: <cartItems>,
      amount: <cartItems>.amount, 
      total: <cartItems>.total,
      isLoading: true,
    }
    -> cartItems is loaded from <data.js> -> it's an array -> <cartItems.amount> is <undefined> -> should be <cartItems[0].amount>


*********************************

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
