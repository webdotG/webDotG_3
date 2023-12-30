
  import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

  export interface CartItem {
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
        state.selectedItems = [
          ...state.selectedItems, action.payload
        ]
        localStorage.setItem('cartState', JSON.stringify(state));
      },

      clearCart(state) {
        state.selectedItems = [];
        localStorage.removeItem('cartState');
      },

      loadCartState(state, action: PayloadAction<CartItem[]>) {
        state.selectedItems = action.payload;
      },
    },
  });

  export const { addToCart, clearCart, loadCartState } = cartSlice.actions;
  export default cartSlice.reducer;


  // export const selectItems = (state: { cart: CartState }) => state.cart.selectedItems;
  // export const selectItems = () => {
  //   const cartStateFromLocalStorage = localStorage.getItem('cartState');
  //   if (cartStateFromLocalStorage) {
  //     const cartState = JSON.parse(cartStateFromLocalStorage);
  //     return cartState.selectedItems || []; // Возвращаем selectedItems из состояния или пустой массив, если данных нет
  //   }
  //   return []; // Если данных в localStorage нет, возвращаем пустой массив
  // };