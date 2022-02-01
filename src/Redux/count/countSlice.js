import { createSlice } from '@reduxjs/toolkit';
export const countSlice = createSlice({
  name: 'count',
  initialState: {
    value: 0,
    cartItems: [],
  },
  reducers: {
    increase_count: (state, action) => {
      state.value += 1;
      const existingIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.cartId;
      });
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          qty: state.cartItems[existingIndex].qty + 1,
        };
      } else {
        let productItem = { id: action.payload.cartId, qty: 1 };
        state.cartItems.push(productItem);
      }
    },
    decrease_count: (state, action) => {
      state.value = state.value > 0 ? state.value - 1 : 0;
      const existingIndex = state.cartItems.findIndex((item) => {
        return item.id === action.payload.cartId;
      });
      if (existingIndex >= 0) {
        state.cartItems[existingIndex] = {
          ...state.cartItems[existingIndex],
          qty:
            state.cartItems[existingIndex].qty > 0
              ? state.cartItems[existingIndex].qty - 1
              : 0,
        };
      }
    },
  },
});
export const { increase_count, decrease_count } = countSlice.actions;
export default countSlice.reducer;
