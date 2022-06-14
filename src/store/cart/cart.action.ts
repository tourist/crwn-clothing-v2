import { setCartItems, toogleCartOpen } from './cart.slice';
import { Item, CartItem, CartItems } from './cart.types';
export const setIsCartOpen = (boolean: boolean) => toogleCartOpen(boolean);

const addCartItem = (cartItems: CartItems, productToAdd: Item | CartItem) => {
  const existingProduct = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingProduct) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems: CartItems, productToRemove: CartItem) => {
  const existingProduct =
    cartItems &&
    cartItems.find((cartItem) => cartItem.id === productToRemove.id);

  if (existingProduct && existingProduct.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingProduct.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems: CartItems, cartItemToClear: CartItem) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

export const addItemToCart = (
  cartItems: CartItems,
  productToAdd: Item | CartItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItems,
  productToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
export const clearItemFromCart = (
  cartItems: CartItems,
  productToRemove: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);
  return setCartItems(newCartItems);
};
