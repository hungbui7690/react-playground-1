import { createSlice } from '@reduxjs/toolkit' // (1a)

const initialState = {
  cartItems: [],
  amount: 0, // how many item of that specific products
  total: 0, // total price
  isLoading: true,
} // (1b)

const cartSlice = createSlice({
  name: 'cart',
  initialState,
}) // (1c)

console.log(cartSlice) // {name: 'cart', actions: {…}, caseReducers: {…}, reducer: ƒ, getInitialState: ƒ}

export default cartSlice.reducer // (1d) reducer: is the one that control the states in our slice >> go to store.js
