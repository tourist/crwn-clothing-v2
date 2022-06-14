import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CartItems } from './cart.types';

interface CartState {
  isCartOpen: boolean;
  cartItems: CartItems;
}

export const CART_INITIAL_STATE: CartState = {
  isCartOpen: false,
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: CART_INITIAL_STATE,
  reducers: {
    setCartItems(state: CartState, action: PayloadAction<CartItems>) {
      state.cartItems = action.payload;
    },
    toogleCartOpen(state: CartState, action: PayloadAction<boolean>) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { setCartItems, toogleCartOpen } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
