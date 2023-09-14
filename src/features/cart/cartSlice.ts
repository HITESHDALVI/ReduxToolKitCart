import {
  createAsyncThunk,
  createSlice,
  current,
  PayloadAction,
} from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchCart, addToCart, updateItem, deleteItem } from "./cartApi"
import { cartDataType } from "./cart-type"
export interface cartState {
  cart: Array<T>
  status: "idle" | "loading" | "failed"
}

const initialState: cartState = {
  cart: [],
  status: "idle",
}

export const fetchCartAsync = createAsyncThunk("cart/fetchcart", async () => {
  const response = await fetchCart()
  return response.data
})
export const addAsyncCart = createAsyncThunk("cart/addToCart", async (item) => {
  const {
    id,
    title,
    brand,
    price,
    rating,
    description,
    thumbnail,
    discountPercentage,
  } = item
  const response = await addToCart({
    id,
    title,
    brand,
    price,
    rating,
    description,
    thumbnail,
    discountPercentage,
    quantity: 1,
  })
  return response.data
})
export const deleteAsyncItem = createAsyncThunk(
  "cart/deleteItem",
  async (id: number) => {
    const response = await deleteItem(id)
    return response.data
  },
)
export const updateAsyncItem = createAsyncThunk(
  "cart/updateItem",
  async ({ id, item }) => {
    const response = await updateItem(id, item)
    return response.data
  },
)
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.cart = action.payload
      })
      .addCase(fetchCartAsync.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(addAsyncCart.pending, (state) => {
        state.status = "loading"
      })
      .addCase(addAsyncCart.fulfilled, (state, action) => {
        state.status = "idle"
        state.cart.push(action.payload)
      })
      .addCase(addAsyncCart.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(deleteAsyncItem.pending, (state) => {
        state.status = "loading"
      })
      .addCase(deleteAsyncItem.fulfilled, (state, action) => {
        state.status = "idle"
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        )
        state.cart.splice(index, 1)
      })
      .addCase(deleteAsyncItem.rejected, (state) => {
        state.status = "failed"
      })
      .addCase(updateAsyncItem.pending, (state) => {
        state.status = "loading"
      })
      .addCase(updateAsyncItem.fulfilled, (state, action) => {
        state.status = "idle"
        const index = state.cart.findIndex(
          (item) => item.id === action.payload.id,
        )
        state.cart.splice(index, 1, action.payload)
      })
      .addCase(updateAsyncItem.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const {} = cartSlice.actions
export const selectCart = (state: RootState) => state.cart

export default cartSlice.reducer
