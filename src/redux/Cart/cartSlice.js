import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducer: {
    addCart: (state, action) => {
      console.log(action);
    },
  },
});

export const { addCart } = cartSlice.actions;
export default cartSlice.reducer;
