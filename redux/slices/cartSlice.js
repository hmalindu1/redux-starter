import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      // Your logic for addToCart
      const { id, title, price, image } = action.payload;

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.qty += 1;
      } else {
        state.push({
          id,
          title,
          price,
          image,
          qty: 1,
        });
      }

      console.log("State from addToCart :", state);
      console.log("Action from addToCart :", action);
    },
    removeFromCart: (state, action) => {
      // Your logic for removeFromCart
      console.log("State from removeFromCart :", state);
      console.log("Action from removeFromCart :", action);
      const { id } = action.payload;

      return state.filter((item) => item.id !== id);
    },
    incrementQty: (state, action) => {
      console.log("State from incrementQty :", state);
      console.log("Action from incrementQty :", action);
      // Your logic for incrementQty
      const { id } = action.payload;

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        (existingItem.qty += 1);
      }
    },
    decrementQty: (state, action) => {
      console.log("State from decrementQty :", state);
      console.log("Action from decrementQty :", action);
      // Your logic for decrementQty
      const { id } = action.payload;

      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        (existingItem.qty -= 1);
      }
    },
  },
});

export const { addToCart, removeFromCart, incrementQty, decrementQty } =
  cartSlice.actions;
export default cartSlice.reducer;
