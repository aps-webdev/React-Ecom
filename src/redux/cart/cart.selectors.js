import { createSelector } from 'reselect';

const selectCart = (state) => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

export const selectCartItemCount = createSelector(
  [selectCartItem],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.quantity, 0)
);

export const selectCartTotal = createSelector(
  [selectCartItem],
  (cartItems) => cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
);
