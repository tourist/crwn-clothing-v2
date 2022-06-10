import { CART_ACTION_TYPES } from './cart.types';

import { createReducer } from '@reduxjs/toolkit';

export const CART_INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export const cartReducer = createReducer(CART_INITIAL_STATE, (builder) => {
  builder
    .addCase(CART_ACTION_TYPES.SET_CART_ITEMS, (state, action) => {
      state.cartItems = action.payload;
    })
    .addCase(CART_ACTION_TYPES.TOGGLE_CART_OPEN, (state, action) => {
      state.isCartOpen = action.payload;
    });
});
