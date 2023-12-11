import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import shopReducer from './slice/shopSlice/shopSlice';

export const store = configureStore({
  reducer: {
    shop: shopReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void>= ThunkAction<ReturnType,RootState,unknown,Action<string>>