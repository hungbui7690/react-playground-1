/*
  Remove

*************************

  1. cartSlice.js
    -> we can also return the state if we want -> this is an alt approach
  2. components/CartItem.jsx


*************************

  dispatch(removeItem(id)) 
  -> action.payload === id 


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
