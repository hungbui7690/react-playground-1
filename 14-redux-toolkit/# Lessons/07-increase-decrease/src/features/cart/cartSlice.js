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
      return { cartItems: [] }
    },
    removeItem: (state, action) => {
      console.log(action)

      const itemId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId)
    },

    // (1a)
    increase: (state, { payload }) => {
      console.log(state.cartItems)

      const cartItem = state.cartItems.find((item) => item.id === payload.id) // because in step (2), we pass as an object >> payload now is not id >> to get id, it must be payload.id
      console.log(cartItem)

      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1

      // *** Method 1 if amount is 1, we then remove that item > we can set here, or can set in CartItem.jsx
      // if (cartItem.amount === 1)
      //   state.cartItems = state.cartItems.filter(
      //     (item) => item.id !== payload.id
      //   )
      // else cartItem.amount = cartItem.amount - 1
    },
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease } = cartSlice.actions // (1b) go to CartItem.jsx
