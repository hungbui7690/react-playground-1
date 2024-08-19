import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../data' // 1. data

const initialState = {
  cartItems: cartItems, // 2. load from data file -> check Redux Dev Tools to see info changes -> go to CartContainer.jsx
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

export default cartSlice.reducer
