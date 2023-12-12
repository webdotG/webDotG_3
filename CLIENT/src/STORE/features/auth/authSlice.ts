import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface typeAuthState {
  user: string | null; 
  token: string | null;
}

const initialState: typeAuthState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth', 
  initialState, 
  reducers: {
    // для установки учетных данных (credentials)
    setCredentials: (state, action: PayloadAction<{ user: string; accessToken: string }>) => {
      const { user, accessToken } = action.payload;
      state.user = user; 
      state.token = accessToken; 
    },
    // для выхода из системы (logout)
    logOut: (state) => {
      state.user = null; 
      state.token = null; 
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

// Селекторы для выбора данных пользователя и токена из состояния
export const selectCurrentUser = (state: { auth: typeAuthState }) => state.auth.user; // Выбор данных пользователя
export const selectCurrentToken = (state: { auth: typeAuthState }) => state.auth.token; // Выбор текущего токена
