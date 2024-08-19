import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import cartItems from '../../data'
import { openModal } from '../modal/modalSlice'

const url = 'https://www.course-api.com/react-useReducer-cart-project'

const initialState = {
  cartItems: cartItems,
  amount: cartItems.amount,
  total: cartItems.total,
  isLoading: true,
}

export const getCartItems = createAsyncThunk(
  'cart/getCartItems',

  async (name, thunkAPI) => {
    thunkAPI.dispatch(openModal())

    try {
      const resp = await axios(url)

      return resp.data
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong')
    }
  }
)

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
  // OLD: extraReducer
  // extraReducers: {
  //   [getCartItems.pending]: (state) => {
  //     state.isLoading = true
  //   },
  //   [getCartItems.fulfilled]: (state, action) => {
  //     console.log(action)
  //     state.isLoading = false
  //     state.cartItems = action.payload
  //   },
  //   [getCartItems.rejected]: (state, action) => {
  //     state.isLoading = false
  //   },
  // },

  // NEW: builder callback notation -> logic won't change -> just there are some different with the way we write
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        // console.log(action);
        state.isLoading = false
        state.cartItems = action.payload
      })
      .addCase(getCartItems.rejected, (state, action) => {
        console.log(action)
        state.isLoading = false
      })
  },
})

export default cartSlice.reducer
export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions
