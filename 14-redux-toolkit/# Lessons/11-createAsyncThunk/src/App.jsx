/*
  IMPORTANT UPDATE
  - The latest version of Redux-Toolkit no longer supports the "object" form for both createReducer and createSlice.extraReducers in RTK 2.0. 
  - This is because the builder callback form is equally concise in terms of lines of code, and it integrates more effectively with TypeScript.

  - I will address this in the Builder Callback Notation video. 
  - For now, you can set up functions and extraReducers, but please be aware that we will refactor the code later. 
  - Therefore, don't be surprised if the following code does not work:

    // WILL NOT WORK !!!!
    extraReducers: {
      [getCartItems.pending]: (state) => {
        state.isLoading = true;
      },
      [getCartItems.fulfilled]: (state, action) => {
        console.log(action);
        state.isLoading = false;
        state.cartItems = action.payload;
      },
      [getCartItems.rejected]: (state) => {
        state.isLoading = false;
      },
    },


  - Instead we need to use builder callback form
    extraReducers: (builder) => {
        builder
          .addCase(getCartItems.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getCartItems.fulfilled, (state, action) => {
            // console.log(action);
            state.isLoading = false;
            state.cartItems = action.payload;
          })
          .addCase(getCartItems.rejected, (state, action) => {
            console.log(action);
            state.isLoading = false;
          });
      },

//////////////////////////////

  Async Functionality with createAsyncThunk
  - Course API: https://www.course-api.com/
    > https://www.course-api.com/react-useReducer-cart-project

  - before, we use data from cartitems.js
    > but after this lesson, data will be loaded from the API > async
    > this is why we need to use AsyncThunk

  *** export const getCartItems = createAsyncThunk('cart/getCartItems', () => {}
      > 'cart/getCartItems' is the action
      > callback function must return a promise

  *** extraReducers: {
        [getCartItems.pending]: (state) => {},
        [getCartItems.fulfilled]: (state, action) => {},
        [getCartItems.rejected]: (state) => {},
      },
      >> "pending", "fulfilled", "rejected" MUST BE WRITE CORRECTLY 
          + this comes from redux-toolkit library
          + these actions are the "3 lifecycle actions"

  (1) cartSlice.js
  

  - after done, check pic


*/

import { useSelector } from 'react-redux'
import CartContainer from './components/CartContainer'
import Navbar from './components/Navbar'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { calculateTotals, getCartItems } from './features/cart/cartSlice' // (2a) import
import Modal from './components/Modal'

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart) // (2b) isLoading
  const { isOpen } = useSelector((state) => state.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, []) // (2c)

  // (2d)
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
