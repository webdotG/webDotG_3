import { User } from "@prisma/client";
import { api } from "./api";

export type typeUserData = Omit<User,'id'>
type typeUserLoginData = User & {token: string}

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<typeUserLoginData, typeUserData>({
      query: (userData) => ({
        url: '/login',
        method: 'POST',
        body: userData,
      })
    }),
    register: builder.mutation<typeUserLoginData, typeUserData>({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      })
    }),
    current: builder.query<typeUserLoginData, void>({
      query: () => ({
        url: '/current',
        method: 'GET',
      })
    }),
  })
})

export const {useLoginMutation, useRegisterMutation, useCurrentQuery} = authApi
export const {endpoints: {login, register, current}} = authApi