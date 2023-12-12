import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../../axios/userApi';

interface typeUserState {
  isLoggedIn: boolean;
  error: string | null;
}

interface typeLoginData {
  username: string;
  password: string;
}

const initialState: typeUserState = {
  isLoggedIn: false,
  error: null,
};

export const loginAsync = createAsyncThunk<string, typeLoginData,{ rejectValue: { message: string | null;} }
>('user/login', async (userData, { rejectWithValue }) => {
  try {
    await loginUser(userData);
    return userData.username; // Возвращаем имя пользователя в случае успешного входа
  } catch (error) {
    return rejectWithValue({ message: error.response?.data || 'Login failed' });
  }
});



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
        state.error = action.payload?.message || 'Login failed';
      });
  },
});

export const { logout, login } = userSlice.actions;

export const userReducer = userSlice.reducer;
