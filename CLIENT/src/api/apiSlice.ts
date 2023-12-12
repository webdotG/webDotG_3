import { createAsyncThunk } from '@reduxjs/toolkit';
import { setCredentials, logOut } from '../STORE/features/auth/authSlice'; 
import { RootState } from '../STORE/store'; 


export const fetchData = createAsyncThunk('api/fetchData', async (_, thunkAPI) => {
  // Получаю состояние хранилища (store) для доступа к данным авторизации
  const state = thunkAPI.getState() as RootState;
  const token = state.auth.token; // Получаю токен из состояния

  try {
    const headers = new Headers(); // Создаю объект Headers для установки заголовков запроса
    headers.append('Authorization', `Bearer ${token}`); // Устанавливаю заголовок Authorization с токеном

    // Выполняю запрос на сервер с установленными заголовками
    const response = await fetch('http://localhost:3500', {
      headers,
    });

    // Проверяю успешность запроса, если ответ не ok, генерирую ошибку
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // Возвращаю данные в формате JSON из ответа сервера
    return await response.json();
  } catch (error) {
    // Обрабатываю возможные ошибки, связанные с запросом
    if (error instanceof Error && error.message === 'Network response was not ok') {
      // Если ошибка связана с некорректным ответом сервера
      if (error instanceof Response) {
        // Проверяю статус ошибки - если это ошибка 403 (Forbidden)
        if (error.status === 403) {
          try {
            // Выполняю запрос на обновление токена
            const refreshResponse = await fetch('http://localhost:3500/refresh', {
              headers,
            });

            // Проверяею успешность запроса на обновление токена
            if (!refreshResponse.ok) {
              throw new Error('Network response was not ok');
            }

            // Получаю новый токен из ответа на запрос обновления токена
            const refreshData = await refreshResponse.json();
            const newToken = refreshData.accessToken;
            const user = state.auth.user; // Получаю информацию о пользователе

            // Обновляю токен и информацию о пользователе в хранилище
            thunkAPI.dispatch(setCredentials({ user, accessToken: newToken }));

            // Создаю обновленные заголовки с новым токеном
            const updatedHeaders = new Headers();
            updatedHeaders.append('Authorization', `Bearer ${newToken}`);

            // Повторно отправляю запрос на сервер с обновленными заголовками
            const updatedResponse = await fetch('http://localhost:3500', {
              headers: updatedHeaders,
            });

            // Проверяю успешность запроса после обновления токена
            if (!updatedResponse.ok) {
              throw new Error('Network response was not ok');
            }

            // Возвращаю обновленные данные в формате JSON из ответа сервера
            return await updatedResponse.json();
          } catch (refreshError) {
            // Если возникла ошибка при обновлении токена, разлогиниваем пользователя
            thunkAPI.dispatch(logOut());
            throw refreshError;
          }
        }
      }
    }

    // Возвращаю общую ошибку, если нет конкретных сценариев обработки ошибок
    throw error;
  }
});
