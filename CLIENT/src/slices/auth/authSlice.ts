import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axios from '../../axios'
import { RootState } from "../../store"; // Замените на ваш путь к RootState
import { typeUser } from "../../types";


interface UserData {
  user: typeUser & { token: string} | null;
}

interface AuthState {
  data: UserData | null;
  status: 'loading' | 'loaded' | 'error';
}

export const fetchAuth = createAsyncThunk<UserData, void, { state: RootState }>(
  'auth/fetchUserData',
  
  async (params) => {
    console.log("AUTH SLICE AXIOS PARAMS : ", params)
    try {
      const response: AxiosResponse<UserData> = await axios.post('api/user/login', { params });
      console.log("AUTH SLICE AXIOS RESPONSE : ", response)
      return response.data;
    } catch (error) {
      throw Error("Ошибка при получении данных пользователя");
    }
  }
);

const initialState: AuthState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchAuth.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchAuth.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchAuth.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});

export const authReducer = authSlice.reducer;
