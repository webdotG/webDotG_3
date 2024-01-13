import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'
import { RootState } from "../../store";

export const fetchAddUserCommunity = createAsyncThunk(
  'posts/fetchAddUserCommunity',
  async ({ name, dateOfBirth }: { name: string; dateOfBirth: string | null }) => {
    try {
      // console.log("COMMUNITY SLICE AXIOS NAME AGE: ", name, dateOfBirth);

      const response = await axios.post('/api/community', { name, dateOfBirth });

      console.log('Server Response:', response.data);

      return response.data;
    } catch (err) {
      console.error('Error:', err);
    }
  }
);


export const fetchAllUserCommunity = createAsyncThunk(
  'posts/fetchAllUserCommunity',
  async () => {
    try {
      const response = await axios.get('/api/community');
      console.log('Server Response for fetchAllUserCommunity:', response.data);
      return response.data;
    } catch (err) {
      console.error('Error in fetchAllUserCommunity:', err);
      throw err; // Ретранслировать ошибку для обработки в компоненте
    }
  }
);

const initialState = {
  community: {
    users: [
      {
        id: null,
        name: '',
        date_of_birth: null,
        created_by_user_name: ''
      }
    ],
    status: 'loading'
  }
}

const communitySlice = createSlice({
  name: 'community',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
    builder
      .addCase(fetchAddUserCommunity.pending, (state) => {
        state.community.status = 'loading'
        state.community.users = []
      })
      .addCase(fetchAddUserCommunity.fulfilled, (state, action) => {
        state.community.status = 'loaded'
        state.community.users.push(action.payload);
      })
      .addCase(fetchAddUserCommunity.rejected, (state) => {
        state.community.status = 'error'
        state.community.users = []
      })
      .addCase(fetchAllUserCommunity.pending, (state) => {
        state.community.status = 'loading'
        state.community.users = []
      })
      .addCase(fetchAllUserCommunity.fulfilled, (state, action) => {
        state.community.status = 'loaded'
        state.community.users = action.payload.users;
      })
      .addCase(fetchAllUserCommunity.rejected, (state) => {
        state.community.status = 'error'
        state.community.users = []
      })
  },
})

export const communityReducer = communitySlice.reducer

export const selectUsersCommunity = (state: RootState) => state.community.community.users;
