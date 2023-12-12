import React, { useState, FormEvent } from 'react';
import styles from './registerPage.module.scss';
import axios from 'axios';

interface typeUser {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegistrPage: React.FC = () => {
  const [user, setUser] = useState<typeUser>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState<Record<string, string>>({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [redirectToUserPage, setRedirectToUserPage] = useState(false);

  const isValidPassword = (password: string): boolean => {
    return password.length >= 3;
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'username':
        setError({ ...error, [name]: value.trim() === '' ? 'Имя пользователя обязательно для заполнения' : '' });
        break;
      case 'email':
        setError({ ...error, [name]: !emailRegex.test(value) ? 'Введите корректный адрес электронной почты' : '' });
        break;
      case 'password':
        setError({ ...error, [name]: !isValidPassword(value) ? 'Пароль должен содержать не менее 8 символов' : '' });
        break;
      case 'confirmPassword':
        setError({ ...error, [name]: user.password !== value ? 'Пароль и подтверждение пароля должны совпадать' : '' });
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

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmitAxios = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/register', { ...user });

      console.log(response.data);
      if (response.status === 200) {
        setRedirectToUserPage(true);
      }
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  if (redirectToUserPage) {
    window.location.href = '/myPage';
    return null;
  }

  return (
    <div className={styles['registration-form-container']}>
      <h2>Форма регистрации</h2>
      <form onSubmit={handleSubmitAxios}>
        <div>
          <label>
            Имя пользователя:
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {error.username && <p className={styles['error-message']}>{error.username}</p>}
        </div>
        <div>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {error.email && <p className={styles['error-message']}>{error.email}</p>}
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
            />
          </label>
          <button type="button" onClick={handleTogglePassword}>
            {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
          </button>
          {error.password && <p className={styles['error-message']}>{error.password}</p>}
        </div>
        <div>
          <label>
            Подтверждение пароля:
            <input
              type="password"
              name="confirmPassword"
              value={user.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {error.confirmPassword && <p className={styles['error-message']}>{error.confirmPassword}</p>}
        </div>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegistrPage;

