
import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

interface CartItem {
  itemId: number;
  name: string;
  price: number;
}

interface CartState {
  selectedItems: CartItem[];
}

const initialState: CartState = {
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartItem>) {
      state.selectedItems.push(action.payload);
    },
    removeFromCart(state, action) {
      state.selectedItems = state.selectedItems.filter(item => item !== action.payload);
    },
    clearCart(state) {
      state.selectedItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



// import { createSlice , PayloadAction } from '@reduxjs/toolkit';


// interface CartState {
//   selectedItems: number[]; // Предполагается, что ID элементов являются числами
// }

// const initialState: CartState = {
//   selectedItems: [], // Начальное состояние - пустой массив
// };


// export const cartSlice = createSlice({
//   name: 'cart',
//   initialState,
//   reducers: {
//     addToCart: (state, action: PayloadAction<{ itemId: number }>) => {
//       const { itemId } = action.payload;
//       state.selectedItems = [...state.selectedItems, itemId];
//     },
//     removeFromCart: (state, action: PayloadAction<{ itemId: number }>) => {
//       const { itemId } = action.payload;
//       state.selectedItems = state.selectedItems.filter(id => id !== itemId);
//     },
//     clearCart: state => {
//       state.selectedItems = [];
//     },
//   },
// });

// export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

// export const selectItems = (state: { cart: CartState }) => state.cart.selectedItems;

// export default cartSlice.reducer;