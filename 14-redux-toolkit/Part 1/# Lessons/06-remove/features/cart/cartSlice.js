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

  reducers: {
    clearCart: (state) => {
      // Method 1
      // state.cartItems = []

      // 1. Method 2: can return if we want
      return { cartItems: [] }
    },

    // 2. to remove item, we need to have the id -> action.payload -> go to CartItem.jsx
    removeItem: (state, action) => {
      console.log(action)
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      )
    },
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem } = cartSlice.actions // 3. export removeItem -> go to cartItem.jsx
