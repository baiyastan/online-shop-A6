import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Todo/todoSlice";
import cartReducer from "./Cart/cartSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    cart: cartReducer,
  },
});

export default store;
