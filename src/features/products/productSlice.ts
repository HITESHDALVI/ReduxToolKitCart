import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState, AppThunk } from "../../app/store"
import { fetchProducts } from "./ProductAPI"

export interface ProductState {
  products: Array<T>
  status: "idle" | "loading" | "failed"
}

const initialState: ProductState = {
  products: [],
  status: "idle",
}

export const fetchProductAsync = createAsyncThunk(
  "product/fetchProduct",
  async () => {
    const response = await fetchProducts()
    return response.data
  },
)

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchProductAsync.fulfilled, (state, action) => {
        state.status = "idle"
        state.products = action.payload
      })
      .addCase(fetchProductAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const {} = productSlice.actions
export const selectProduct = (state: RootState) => state.products

export const incrementIfOdd =
  (amount: number): AppThunk =>
  (dispatch, getState) => {
    const currentValue = selectProduct(getState())
    if (currentValue % 2 === 1) {
    }
  }

export default productSlice.reducer
