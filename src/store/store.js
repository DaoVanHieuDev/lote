import { configureStore } from "@reduxjs/toolkit";
import { listProduct } from "./products";
const store = configureStore({
  reducer: {
    listTable:listProduct.reducer,
  },
});

export default store;