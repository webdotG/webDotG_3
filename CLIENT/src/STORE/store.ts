import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit'
import totalPriceReducer from './slice/totalPriceSlice';
import { userReducer } from './slice/userSlice'; 
import authReducer from './features/auth/authSlice';


export const store = configureStore({
  reducer: {
    totalPrice: totalPriceReducer,
    user: userReducer,
    auth: authReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void>= ThunkAction<ReturnType,RootState,unknown,Action<string>>