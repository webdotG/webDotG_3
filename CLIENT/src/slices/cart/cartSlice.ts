import { createSlice , PayloadAction } from '@reduxjs/toolkit';


interface CartState {
  selectedItems: number[]; // Предполагается, что ID элементов являются числами
}

const initialState: CartState = {
  selectedItems: [], // Начальное состояние - пустой массив
};


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      state.selectedItems = [...state.selectedItems, itemId];
    },
    removeFromCart: (state, action: PayloadAction<{ itemId: number }>) => {
      const { itemId } = action.payload;
      state.selectedItems = state.selectedItems.filter(id => id !== itemId);
    },
    clearCart: state => {
      state.selectedItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export const selectItems = (state: { cart: CartState }) => state.cart.selectedItems;

export default cartSlice.reducer;