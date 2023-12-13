// import axios  from "axios";
// import { User } from "@prisma/client";

// export type typeUserData = Omit<User, 'id'>;
// export type typeUserLoginData = User & { token: string };



// const baseURL = "http//localhost:8000/"; // Замените это на базовый URL вашего API

// const axiosInstance = axios.create({
//   baseURL,
// });

// // Объект для выполнения запросов авторизации
// export const authApi = {
//   // Функция для входа пользователя
//   login: async (userData: typeUserData): Promise<typeUserLoginData> => {
//     try {
//       const response = await axiosInstance.post("/user/login", userData);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Ошибка входа");
//     }
//   },
//   // Функция для регистрации пользователя
//   register: async (userData: typeUserData): Promise<typeUserLoginData> => {
//     try {
//       const response = await axiosInstance.post("/user/register", userData);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Ошибка регистрации");
//     }
//   },
//   // Функция для получения данных о текущем пользователе
//   current: async (): Promise<typeUserLoginData> => {
//     try {
//       const response = await axiosInstance.get("/user/current");
//       return response.data;
//     } catch (error) {
//       throw new Error(error.response?.data?.message || "Не удалось получить данные о текущем пользователе");
//     }
//   },
// };

// // Функция для выполнения мутации входа пользователя
// export const useLoginMutation = async (userData: typeUserData) => {
//   try {
//     return await authApi.login(userData);
//   } catch (error) {
//     throw new Error(error.message || "Ошибка выполнения запроса на вход");
//   }
// };

// // Функция для выполнения мутации регистрации пользователя
// export const useRegisterMutation = async (userData: typeUserData) => {
//   try {
//     return await authApi.register(userData);
//   } catch (error) {
//     throw new Error(error.message || "Ошибка выполнения запроса на регистрацию");
//   }
// };

// // Функция для выполнения запроса на получение данных о текущем пользователе
// export const useCurrentQuery = async () => {
//   try {
//     return await authApi.current();
//   } catch (error) {
//     throw new Error(error.message || "Ошибка выполнения запроса на получение данных о текущем пользователе");
//   }
// };
