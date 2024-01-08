import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../src/slices/auth/authSlice'
import { postsReducer } from './slices/posts/postsSlice';
import cartReducer, { loadCartState } from './slices/cart/cartSlice';


// Функция, которая проверяет localStorage и загружает данные
const loadState = () => {
  try {
    const cartStateFromLocalStorage = localStorage.getItem('cartState');
    if (cartStateFromLocalStorage) {
      const cartState = JSON.parse(cartStateFromLocalStorage);
      return cartState;
    }
  } catch (error) {
    // Можно обработать ошибку
    return undefined;
  }
}

// Загружаю данные из localStorage
const preloadedState = loadState();


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    posts: postsReducer
  },
  preloadedState: {
    cart: {
      selectedItems: preloadedState ? preloadedState.selectedItems : [],
    },
  },
})

// Если данные были загружены из localStorage, обновляем состояние в хранилище
if (preloadedState) {
  store.dispatch(loadCartState(preloadedState.selectedItems));
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>