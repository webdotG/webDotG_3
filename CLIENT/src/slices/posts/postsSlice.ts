import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios'
import { RootState } from "../../types";

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const {data} = await axios.get('/api/posts/')
  // console.log('POSTSLICE AXIOS GET API/POSTS DATA : ', data)
  return data 
})

export const fetchTags = createAsyncThunk('posts/fetchTags', async () => {
  const {data} = await axios.get('/api/tags')
  // console.log('POSTSLICE AXIOS GET API/TAGS DATA : ', data)
  return data 
})

interface DeleteResponse {
  id: number;
}
export const fetchRemovePost = createAsyncThunk<DeleteResponse, number>('posts/fetchRemovePost', async (id) => {
  const {data} = await axios.delete<DeleteResponse>(`/api/posts/${id}`)
  console.log('POSTSLICE AXIOS DELETE API/POSTS ID, DATA : ', id, data)
  return data 
})

const initialState: RootState = {
  posts: {
    items: [],
    status: 'loading'
  },
  tags: {
    items: [],
    status: 'loading'
  }
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    builder 
    //получение постов
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
    //получение тегов
    .addCase(fetchTags.pending, (state) =>{
      state.tags.status = 'loading'
      state.tags.items = []
    })
    .addCase(fetchTags.fulfilled, (state, action) =>{
      state.tags.status = 'loaded'
      state.tags.items = action.payload
    })
    .addCase(fetchTags.rejected, (state) =>{
      state.tags.status = 'error'
      state.tags.items = []
    })
    //удаление поста
    .addCase(fetchRemovePost.pending, (state) =>{ //, action
      state.posts.status = 'loading';
      // state.posts.items = state.posts.items.filter(obj => obj.id !== action.payload)
    })
    .addCase(fetchRemovePost.fulfilled, (state, action) => {
      // action.payload здесь содержит данные, возвращенные  санком fetchRemovePost
      const deletedPostId = action.payload?.id; 
      // state.posts.items = state.posts.items.filter((post) => post.id !== deletedPostId);
      if (deletedPostId) {
        state.posts.items = state.posts.items.filter((post) => post.id !== deletedPostId);
      }
    })
    .addCase(fetchRemovePost.rejected, (state) =>{
      state.posts.status = 'error'
    })
  }

})

export const postsReducer = postsSlice.reducer