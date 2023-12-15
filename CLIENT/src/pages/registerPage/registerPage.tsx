import React, { useState, FormEvent } from 'react';
import styles from './registerPage.module.scss';
// import axios from 'axios';
import { User } from '@prisma/client';
import { useRegisterMutation} from '../../api/authApi';

type typeRegisterData = Omit<User, "id"> 

const RegistrPage = () => {
  const [user, setUser] = useState({name: '',email: '', password: '', confirmPassword: ''});
  const [error, setError] = useState({name: '', email: '', password: '', confirmPassword: ''});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const isValidPassword = (password: string): boolean => {
    return password.length >= 3;
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
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

  const [registerUser] = useRegisterMutation()
// console.log("USE_REGISTER_MUTATION : ", registerUser )

  const handleSubmit = async (user: typeRegisterData, e: React.FormEvent<HTMLFormElement>) => {
    console.log("REGISTER PAGE FORM SUBMIT DATA : ", user)
    e.preventDefault();
    registerUser(user)
  }

  return (
    <div className={styles['registration-form-container']}>
      <h2>Форма регистрации</h2>
      <form onSubmit={(e) => handleSubmit(user, e)}>
        <div>
          <label>
            Имя пользователя:
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          {error.name && <p className={styles['error-message']}>{error.name}</p>}
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

// const handleSubmitAxios = async (e: FormEvent) => {
//   e.preventDefault();
//   try {
//     const response = await axios.post('/auth/register', { ...user });

//     console.log(response.data);
//     if (response.status === 200) {
//       setRedirectToUserPage(true);
//     }
//   } catch (error) {
//     console.error('Ошибка:', error);
//   }
// };

// if (redirectToUserPage) {
//   window.location.href = '/myPage';
//   return null;
// }