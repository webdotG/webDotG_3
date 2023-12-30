import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../src/slices/auth/authSlice'
import cartReducer , { loadCartState } from './slices/cart/cartSlice';


// Функция, которая проверяет localStorage и загружает данные
const loadState = () => {
  try {
    const cartStateFromLocalStorage = localStorage.getItem('cartState');
    if (cartStateFromLocalStorage) {
      const cartState = JSON.parse(cartStateFromLocalStorage);
      return cartState;
    }
  } catch (error) {
    // Можно обработать ошибку, если требуется
  }
  return undefined;
};

// Загружаем данные из localStorage
const preloadedState = loadState();


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
  preloadedState: {
    cart: {
      selectedItems: preloadedState ? preloadedState.selectedItems : [],
    },
  },
  //   getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),

})

// Если данные были загружены из localStorage, обновляем состояние в хранилище
if (preloadedState) {
  store.dispatch(loadCartState(preloadedState.selectedItems));
}

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>