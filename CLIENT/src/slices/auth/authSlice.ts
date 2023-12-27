import { createSlice, createAsyncThunk, PayloadAction, Dispatch  } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import axios from '../../axios'
import { RootState } from "../../store";
import { typeUser } from "../../types";


interface UserData {
  user: typeUser & { token: string } | null;
}

interface AuthState {
  data: UserData | null;
  status: 'loading' | 'loaded' | 'error';
}

export const fetchLogin = createAsyncThunk<UserData, { email: string, password: string }, { state: RootState }>(
  'auth/fetchLogin',

  async (values) => {
    console.log("AUTH SLICE AXIOS EMAIL LOGIN : ", values)
    try {
      const { email, password } = values;
      const response: AxiosResponse<UserData> = await axios.post('/api/user/login', { email, password });//{ params }
      console.log("AUTH SLICE AXIOS RESPONSE LOGIN : ", response)
      return response.data;
    } catch (error) {
      throw Error("Ошибка при получении данных пользователя");
    }
  }
);

export const fetchRegister = createAsyncThunk<UserData, {
  email: string,
  password: string,
  confirmPassword: string,
  name: string
}, { state: RootState }>(
  'auth/fetchRegister',

  async (values) => {
    console.log("AUTH SLICE AXIOS EMAIL REGISTER : ", values)
    try {
      const { email, password, confirmPassword, name } = values;
      const response: AxiosResponse<UserData> = await axios.post('/api/user/register', {
        email,
        password,
        confirmPassword,
        name
      });//{ params }
      console.log("AUTH SLICE AXIOS RESPONSE REGISTER : ", response)
      return response.data;
    } catch (error) {
      throw Error("Ошибка при получении данных пользователя");
    }
  }
);

// export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
//   const { data } = await axios.get('api/user/current')
//   console.log("FETCH AUTH API/USER/CURRENT DATA : ", data)
//   return data
// })


export const fetchAuth = createAsyncThunk('auth/fetchAuth', async () => {
  try {
    const { data } = await axios.get('/api/user/current');
    console.log("FETCH AUTH API/USER/CURRENT DATA : ", data);
    return data;
  } catch (error) {
    throw Error("Ошибка при получении данных пользователя");
  }
});


// Новая action для проверки авторизации при загрузке страницы
export const checkAuth = () => async (dispatch: Dispatch) => {
  try {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      // Если токен есть в Local Storage, выполняем запрос для проверки авторизации
      const response = await axios.get('/api/user/current', {
        headers: {
          Authorization: `Bearer ${storedToken}`, // Предполагается использование токена для авторизации
        },
      });
      dispatch(fetchAuth.fulfilled(response.data)); // Устанавливаем данные пользователя в store при успешной проверке
    }
  } catch (error) {
    console.error("Ошибка проверки авторизации:", error);
    // В случае ошибки можно очистить данные пользователя в store или выполнить другие действия
    dispatch(fetchAuth.rejected()); // Отмечаем, что проверка авторизации завершилась неудачно
  }
};

const initialState: AuthState = {
  data: null,
  status: 'loading',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

    logOut: (state) => {
      state.data = null
      localStorage.removeItem('token');
    }

  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchLogin.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchLogin.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchLogin.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      })
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
      })
      .addCase(fetchRegister.pending, (state) => {
        state.status = 'loading';
        state.data = null;
      })
      .addCase(fetchRegister.fulfilled, (state, action: PayloadAction<UserData>) => {
        state.status = 'loaded';
        state.data = action.payload;
      })
      .addCase(fetchRegister.rejected, (state) => {
        state.status = 'error';
        state.data = null;
      });
  },
});


export const selectIsAuth = (state: RootState) => {
  return state.auth.data !== null && typeof state.auth.data === 'object' && 'token' in state.auth.data;
};

export const authReducer = authSlice.reducer;

export const { logOut } = authSlice.actions