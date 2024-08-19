import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice' // 2a.

export default configureStore({
  reducer: {
    counter: counterReducer, // 2b.
  },
})
