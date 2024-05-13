import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (state, action) => {
      // console.log(action.payload)
      const newItem = state.items.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        items: newItem
      }
    },
    removeAllFromBasket: (state, action) => {
      return {
        ...state,
        items: []
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToBasket, removeFromBasket, removeAllFromBasket } = basketSlice.actions;
export const selectBasketItems = (state) => state.basket.items;
export const selectBasketTotal = (state) =>  state.basket.items.reduce((total, item) => (total += item.price), 0);

export default basketSlice.reducer;
