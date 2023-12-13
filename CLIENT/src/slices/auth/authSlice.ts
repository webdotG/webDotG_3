import { User } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth";
import { RootState } from "../../store";

interface typeInitialState {
  user: User & {token: string | null} | null,
  isAuthenticated: boolean
}

const initialState: typeInitialState = {
  user: null,
  isAuthenticated: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  
  reducers:{
    logOut: () => initialState,
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
      .addMatcher(authApi.endpoints.current.matchFulfilled, (state, action) => {
        state.user = action.payload
        state.isAuthenticated = true
      })
  }
})

export const {logOut} = authSlice.actions
export default authSlice.reducer

export const selectIsAuthenteceted = (state: RootState) => state.auth.isAuthenticated
export const selectUser = (state: RootState) => state.auth.user