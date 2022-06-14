import { createSelector } from '@reduxjs/toolkit';
import { CartItem, CartItems } from './cart.types';
import { RootState } from '../store';

const selectCartReducer = (state: RootState) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);
export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems: CartItems) =>
    cartItems &&
    cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total: number, cartItem: CartItem) =>
      total + cartItem.quantity * cartItem.price,
    0
  )
);
