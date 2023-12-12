import React, { useState, FormEvent } from 'react';
import axios from 'axios';
import styles from './LoginPage.module.scss';

interface LoginData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const [user, setUser] = useState<LoginData>({
    username: '',
    password: ''
  });

  const [error, setError] = useState<Record<string, string>>({
    username: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);

  const isValidPassword = (password: string): boolean => {
    return password.length >= 3;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setError({ ...error, [name]: value.trim() === '' ? 'Имя пользователя обязательно для заполнения' : '' });
        break;
      case 'password':
        setError({ ...error, [name]: !isValidPassword(value) ? 'Пароль должен содержать не менее 3 символов' : '' });
        break;
      default:
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmitAxios = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', { ...user });

      console.log(response.data);
      if (response.status === 200) {
        // Redirect to user page or perform necessary actions upon successful login
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Форма входа</h2>
      <form className={styles['login-form-container']} onSubmit={handleSubmitAxios}>
        <div>
          <label>
            Имя пользователя:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={error.username ? styles['error'] : ''}
            />
          </label>
          {error.username && <p className={styles['error-message']}>{error.username}</p>}
        </div>
        <div>
          <label>
            Пароль:
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={error.password ? styles['error'] : ''}
            />
          </label>
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          </button>
          {error.password && <p className={styles['error-message']}>{error.password}</p>}
        </div>
        <button type="submit" className={styles['submit-button']}>Войти</button>
      </form>
    </div>
  );
};

export default LoginPage;
