/*
  Setup Cart Slice
  - slice == "application feature"


*****************************

  1. create features/cart/cartSlice.js
  2. store.js


*****************************

  - we have 2 features in our project:
    + clear cart 
      -> click -> show modal -> confirm
    + increase/decrease items in cart
  -> we will create 2 files:
    # features/cart/cartSlice.js
    # features/cart/clearCartSlice.js
    

*****************************

  cartSlice:
  - default states
  store:
  - reducer


*/

import { createSlice } from '@reduxjs/toolkit' // 1.

const initialState = {
  cartItems: [],
  amount: 0, // how many item of that specific products
  total: 0, // total price
  isLoading: true,
} // 2.

const cartSlice = createSlice({
  name: 'cart',
  initialState,
}) // 3.

console.log(cartSlice) // {name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}

export default cartSlice.reducer // 4. reducer: is the one that control the states in our slice -> go to store.js
