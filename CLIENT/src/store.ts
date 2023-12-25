import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
// import { authReducer } from './slices/auth/authSliceAsyncThunk'
import auth from './slices/auth/authSlice'
import { api } from './api/api'
import { listenerMiddleware } from "./middleware/auth";
import cartReducer from './slices/cart/cartSlice';


export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // auth: authReducer
    [api.reducerPath]: api.reducer,
    auth
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).prepend(listenerMiddleware.middleware),

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>