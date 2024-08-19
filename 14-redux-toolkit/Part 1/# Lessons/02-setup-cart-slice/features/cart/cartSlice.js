/*
  Setup Cart Slice
  - slice == "application features"


*****************************

  1. create features/cart/cartSlice.js
  2. store.js


*****************************

  - we have 2 cart features in our project -> cartSlice
    -> clear cart 
      # click -> show modal -> confirm
    -> increase/decrease items in cart


*****************************

  1. cartSlice:
    -> default states
  2. store:
    -> reducer


*/

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItems: [],
  amount: 0, // how many item of that specific products
  total: 0, // total price
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState, // #
})

console.log(cartSlice) // {name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}

export default cartSlice.reducer // reducer: is the one that control the states in our slice -> go to store.js
