import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import totalPriceReducer from './slice/totalPriceSlice';
import userReducer from './slice/userSlice'; // Импортируйте ваш slice для пользователей


export const store = configureStore({
  reducer: {
    totalPrice: totalPriceReducer,
    user: userReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void>= ThunkAction<ReturnType,RootState,unknown,Action<string>>