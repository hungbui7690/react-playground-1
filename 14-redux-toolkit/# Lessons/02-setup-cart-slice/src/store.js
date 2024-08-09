import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/cartSlice' // (2a)

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  }, // *** this is the function that control the states (step 1b) in our slice
}) // (2b)
