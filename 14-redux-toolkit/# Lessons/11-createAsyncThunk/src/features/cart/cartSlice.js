import { createSlice, createAsyncThunk } from '@reduxjs/toolkit' // (1a) import createAsyncThunk
import cartItems from '../../cartItems'

const url = 'https://www.course-api.com/react-useReducer-cart-project' // (1b)

const initialState = {
  cartItems: cartItems,
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

// (1c)
export const getCartItems = createAsyncThunk('cart/getCartItems', () => {
  return fetch(url)
    .then((resp) => resp.json())
    .catch((err) => console.log(error))
})

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
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount + 1
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id)
      cartItem.amount = cartItem.amount - 1
    },
    calculateTotals: (state) => {
      let amount = 0
      let total = 0
      state.cartItems.forEach((item) => {
        amount += item.amount
        total += item.amount * item.price
      })
      state.amount = amount
      state.total = total
    },
  },

  // (1d) App.js
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true
    },
    [getCartItems.fulfilled]: (state, action) => {
      console.log(action)
      state.isLoading = false
      state.cartItems = action.payload // *** this will be set with new data
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false
    },
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions
