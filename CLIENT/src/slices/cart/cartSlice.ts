// cartSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Определение начального состояния для корзины
interface CartState {
  selectedInputs: string[];
  total: number;
}

const initialState: CartState = {
  selectedInputs: [],
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<string[]>) {
      state.selectedInputs = action.payload;
    },
    setTotalPrice(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    clearCart(state) {
      state.selectedInputs = [];
      state.total = 0;
    },
  },
});

export const { setCartItems, setTotalPrice, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
