import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import { authReducer } from './slices/auth/auth'
// import auth from './slices/auth/authSlice1'
// import { api } from './api/api'

export const store = configureStore({
  reducer: {
    auth: authReducer
    // [api.reducerPath]: api.reducer,
    // auth
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
  
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>