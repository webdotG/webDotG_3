import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchCommunity = createAsyncThunk('posts/fetchCommunity', async () => {
  const { data } = await axios.get('/api/community/')
  // console.log('COMMUNITYSLICE AXIOS GET API/COMMUNITY DATA : ', data)
  return data
})

const initialState = {
  community: {
    items: [],
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
    .addCase(fetchCommunity.pending, (state) =>{
      state.community.status = 'loading'    
      state.community.items = []
    })
    .addCase(fetchCommunity.fulfilled, (state, action) =>{
      state.community.status = 'loaded'    
      state.community.items = action.payload
    })
    .addCase(fetchCommunity.rejected, (state) =>{
      state.community.status = 'error'    
      state.community.items = []
    })
  },
})

export const communityReducer =communitySlice.reducer