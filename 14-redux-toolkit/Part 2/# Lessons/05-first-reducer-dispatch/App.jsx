/*
  First Reducer - Clear Cart
  - remember: reducer is used to control the states of each slice (feature/functionality)
  - cartSlice -> create reducers 
  - button click -> call dispatch

******************************

  1. cartSlice.js
  2. CartContainer.jsx
  

******************************

  # Immer library: 
    - when working with useReducer(), we ALWAYS have to return the states 
    - but with redux-toolkit, we don't have to return anything
      -> because immer does all the heavy lifting for us 

      clearCart: (state) => {
        state.cartItems = []
      },
      => we can see that we mutate the state (set cartItems = [])


******************************

  - when working with useReducer(), we must create actions -> and use that to return the type
    -> but with redux-toolkit, we don't have to do this 
    -> above, we can see that we will ave the clearCart() that helps us do the same thing

        const ACTION_TYPE = 'ACTION_TYPE'

        const actionCreator = (payload) => {
          return { type: ACTION_TYPE, payload: payload };
        }


******************************

  - after have clearCart(), we can use:
    -> const dispatch = useDispatch()
  - and to call the function whenever we want
    -> dispatch(clearCart())


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
