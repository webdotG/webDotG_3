import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../axios/userApi';

interface UserState {
  isLoggedIn: boolean;
  error: string | null;
}

interface LoginData {
  username: string;
  password: string;
}

export const loginAsync = createAsyncThunk<
  string,
  LoginData,
  { rejectValue: string }
>('user/login', async (userData, { rejectWithValue }) => {
  try {
    await loginUser(userData);
    return userData.username; // Возвращаем имя пользователя в случае успешного входа
  } catch (error) {
    return rejectWithValue(error.response?.data || 'Login failed');
  }
});

const initialState: UserState = {
  isLoggedIn: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.isLoggedIn = false;
    },
    login: (state) => {
      state.isLoggedIn = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.fulfilled, (state) => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoggedIn = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout, login } = userSlice.actions;

export const userReducer = userSlice.reducer;

