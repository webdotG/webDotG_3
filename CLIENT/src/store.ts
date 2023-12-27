import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { authReducer } from '../src/slices/auth/authSlice'
import cartReducer from './slices/cart/cartSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer
  },
  //   getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>