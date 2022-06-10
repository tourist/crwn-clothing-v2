import { createSlice } from '@reduxjs/toolkit';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems(state, action) {
      state.cartItems = action.payload;
    },
    toogleCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { setCartItems, toogleCartOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
