import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice' // 5.

export const store = configureStore({
  // 6. this is the function that control the states (step 2) in our slice
  reducer: {
    cart: cartReducer,
  },
})
