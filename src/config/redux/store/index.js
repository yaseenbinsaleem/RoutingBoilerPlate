import { configureStore } from "@reduxjs/toolkit";
import Products from "../reducers/products";


export const store = configureStore({
  reducer: {
    products: Products, 
  },
});