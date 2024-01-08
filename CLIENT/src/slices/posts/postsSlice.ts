import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const {data} = await axios.get('/api/posts')
  console.log('POST SLICE AXIOS GET API/POSTS DATA : ', data)
  return data 
})

const initialState = {
  posts: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  }
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder 

    .addCase(fetchPosts.pending, (state) =>{
      state.posts.status = 'loading'
      state.posts.items = []
    })
    .addCase(fetchPosts.fulfilled, (state, action) =>{
      state.posts.status = 'loaded'
      state.posts.items = action.payload
    })
    .addCase(fetchPosts.rejected, (state) =>{
      state.posts.status = 'error'
      state.posts.items = []
    })
  }

})

export const postsReducer = postsSlice.reducer