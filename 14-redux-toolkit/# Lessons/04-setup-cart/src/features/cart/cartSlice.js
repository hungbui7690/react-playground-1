import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems' // (1a)

const initialState = {
  cartItems: cartItems, // (1b) load from data file >> check Redux Dev Tools to see info changes
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
})

export default cartSlice.reducer
