import { createSlice } from '@reduxjs/toolkit'
import cartItems from '../../cartItems'

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
      // state.cartItems = []

      return { cartItems: [] } // (1) alt approach
    },

    // (2a) to remove item, we need to have the id >> action.payload >> go to CartItem.jsx
    removeItem: (state, action) => {
      console.log(action)

      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId) // no return
    },
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem } = cartSlice.actions // (2b)
