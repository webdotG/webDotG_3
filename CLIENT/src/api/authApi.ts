import { User } from ''; // Или импорт из файла с вашей схемой

// Использование типа User в вашем коде

import { api } from "./api";

export type UserData = Omit<User, 'id' | 'name'> & Partial<Pick<User, 'id' | 'name'>>;
type ResponseLoginData = User & { token: string };

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/user/login",
        method: "POST",
        body: userData,
      }),
    }),
    register: builder.mutation<ResponseLoginData, UserData>({
      query: (userData) => ({
        url: "/user/register",
        method: "POST",
        body: userData,
      }),
    }),
    current: builder.query<ResponseLoginData, void>({
      query: () => ({
        url: "/user/current",
        method: "GET",
      }),
    }),
  }),
});

export const { useRegisterMutation, useLoginMutation, useCurrentQuery } =
  authApi;

export const {
  endpoints: { login, register, current },
} = authApi;