  import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
  import axios from '../../axios'
  import { RootState } from "../../store";

  export const fetchAddUserCommunity = createAsyncThunk(
    'posts/fetchAddUserCommunity',
    async ( {name, dateOfBirth}: { name: string; dateOfBirth: Date | null }  ) => {
      try {
        console.log("COMMUNITY SLICE AXIOS NAME AGE: ", name, dateOfBirth);

        const response = await axios.post('/api/community', { name, dateOfBirth});

        console.log('Server Response:', response.data);

        return response.data;
      } catch (err) {
        console.error('Error:', err);
      }
    }
  );


  export const fetchCommunity = createAsyncThunk('posts/fetchCommunity', async () => {
    const { data } = await axios.get('/api/community/')
    console.log('COMMUNITYSLICE AXIOS GET API/COMMUNITY DATA : ', data)
    return data
  })

  const initialState = {
    community: {
      users: [
        {
          name: '',
          dateOfBirth: null 
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
          state.community.users.push({ name: action.payload, dateOfBirth: action.payload });
        })
        .addCase(fetchAddUserCommunity.rejected, (state) => {
          state.community.status = 'error'
          state.community.users = []
        })
        .addCase(fetchCommunity.pending, (state) => {
          state.community.status = 'loading'
          state.community.users = []
        })
        .addCase(fetchCommunity.fulfilled, (state, action) => {
          state.community.status = 'loaded'
          state.community.users = action.payload
        })
        .addCase(fetchCommunity.rejected, (state) => {
          state.community.status = 'error'
          state.community.users = []
        })
    },
  })

  export const communityReducer = communitySlice.reducer

  export const selectUsersCommunity = (state: RootState) => {
    // console.log("CommunitySlice SelectCommunity STATE.COMMUNITY.USERS : ", state.auth.data)
    return state.community.users !== null && typeof state.community.users === 'object' && state.community.users;
  };
