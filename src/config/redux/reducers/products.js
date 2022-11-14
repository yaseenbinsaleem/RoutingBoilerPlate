import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../../../utils/api";
import { Request } from "../../../utils/fetch";

const initialState = {
  Products: [],
  fetchingAccounts: false,
};

export const GetProducts = createAsyncThunk("GetProducts", async () => {
  const result = await Request(`${BASE_URL}/products`, "get");

  return result;
});

const productsReducer = createSlice({
  name: "product",

  initialState,
  reducers: {},
  extraReducers: {
    [GetProducts.fulfilled]: (state, action) => {
      const data = action.payload;
      state.Products = data;

      return state;
    },
  },
});
export default productsReducer.reducer;