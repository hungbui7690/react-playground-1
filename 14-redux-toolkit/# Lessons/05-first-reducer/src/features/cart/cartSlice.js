import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems' // (1a)

const initialState = {
  cartItems: cartItems,
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,

  // (1a) we don't have to return the states
  reducers: {
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export default cartSlice.reducer
export const { clearCart } = cartSlice.actions // (1b) go to CartContainer.jsx
