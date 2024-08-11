import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../data'

const initialState = {
  cartItems: cartItems,
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  // 1. we don't have to return the states
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export default cartSlice.reducer
export const { clearCart } = cartSlice.actions // 2. go to CartContainer.jsx
