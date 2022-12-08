import { createReducer } from "@reduxjs/toolkit";
const localItems = JSON.parse(localStorage.getItem("cartItemsInlocalStorage"))
export const cartReducer = createReducer(
    localItems?localItems:{
    cartItems: [],
    subTotal: 0, //item price * item quantity
    shipping: 0,
    tax: 0,
    total: 0,
  },
  {
    addToCart: (state, action) => {
      const item = action.payload;
      const isItemExist = state.cartItems.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i.id === item.id) i.quantity++;
        });
      } else {
        state.cartItems.push(item);
      }
    },

    increment: (state, action) => {
      const idd = action.payload;
      const decrementId = state.cartItems.find((i) => i.id === idd);
      if (decrementId) {
        state.cartItems.forEach((i) => {
          if (i.id === idd) {
            i.quantity++;
          }
        });
      }
    },

    decrement: (state, action) => {
      const idd = action.payload;
      const decrementId = state.cartItems.find((i) => i.id === idd);
      if (decrementId) {
        state.cartItems.forEach((i) => {
          if (i.id === idd) {
            if (i.quantity >= 2) {
              i.quantity--;
            }
          }
        });
      }
    },

    deleteItem: (state, action) => {
      const idd = action.payload;
      const decrementId = state.cartItems.find((i) => i.id === idd);
      if (decrementId) {
        state.cartItems = state.cartItems.filter((i) => i.id !== idd);
      }
    },

    calculate: (state, action) => {
      let sum = 0;
      state.cartItems.forEach((i) => (sum = sum + i.price * i.quantity));
      state.subTotal = sum;
      state.shipping = state.subTotal > 2000 ? 0 : 150;
      state.tax = + (state.subTotal * 0.18).toFixed();
      state.total = state.subTotal + state.shipping + state.tax;
    },
  }
);

export default cartReducer;
