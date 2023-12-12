import axios, { AxiosResponse, AxiosError } from 'axios';

interface LoginData {
  username: string;
  password: string;
}

// Функция для отправки запроса на сервер для входа пользователя
export const loginUser = async (userData: LoginData): Promise<AxiosResponse> => {
  const response = await axios.post('/api/login', userData);
  return response;
};

// Пример использования функции loginUser
const userCredentials: LoginData = {
  username: 'example_user',
  password: 'example_password',
};

// Вызываем функцию loginUser с передачей учетных данных пользователя для входа
loginUser(userCredentials)
  .then((response) => {
    console.log('Login response:', response.data); // Результат успешного входа
    // Здесь вы можете обрабатывать ответ от сервера при успешной аутентификации
  })
  .catch((error: AxiosError) => {
    console.error('Login error:', error); // Обработка ошибок при входе
    // Здесь вы можете обрабатывать ошибки входа, например, отображать сообщения об ошибке пользователю
  });
