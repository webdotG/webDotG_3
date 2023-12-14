import React, { useState} from 'react';
import styles from './LoginPage.module.scss';
import { typeUserData, useLoginMutation } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { isErrorWithMessage, typeErrorWithMessage } from '../../support_function/is_error_with_message';
import { useDispatch } from 'react-redux';
import axios from '../../axios';
import { fetchAuth } from '../../slices/auth/auth';
interface LoginData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginData>({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<Record<string, string>>({ username: '', password: '' });
  const [messageError, setMessageError] = useState('')
  const [formValid, setFormValid] = useState(false);

  const [loginUser, loginUserResult] = useLoginMutation()

  // const handleSubmit = async (data: typeUserData, ) => { //e: React.FormEvent<HTMLFormElement>
  //   console.log("ERROR LOGINUSER DATA : ")
  //   // e.preventDefault();
  //   if (!error.username && !error.password) {
  //     try {
  //       await loginUser(data).unwrap();
  //       navigate('/register');
  //     } catch (err) {
  //       console.log("LOGIN ERROR : ", err)
  //       const maybeError = isErrorWithMessage(err);
  //       if (maybeError) {
  //         const errorData = err as typeErrorWithMessage; // Приведение типа
  //         setMessageError(errorData.data.message);
  //       } else {
  //         setMessageError('Неизвестная ошибка');
  //       }
  //     }
  //    }
  // };
  //  setError({ ...error, login: 'Ошибка входа. Пожалуйста, проверьте введенные данные.' })


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, user: typeUserData) => {
    console.log("RESPONSE USER : ", user)
    e.preventDefault();
    if (!error.username && !error.password) {
      try {
        const response = await axios.post('/api/user/login', { ...user });
        console.log("RESPONSE API/USER/LOGIN: ", response)
        console.log("LOGIN PAGE RESPONSE DATA : ", response.data);
        // navigate('/register');
      } catch (error) {
        console.log("LOGIN ERROR 1000 : ")
        console.error('Ошибка:', error);
      }
    } else {
      console.log("LOGIN ERROR 11111 : ")
      console.log('Форма невалидна. Пожалуйста, заполните все поля корректно.');
    }
  };


  const isValidPassword = (password: string): boolean => {
    return password.length >= 3;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setError({ ...error, [name]: value.trim() === '' ? 'Email обязателен для заполнения' : '' });
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

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Форма входа</h2>
      <form className={styles['login-form-container']} onSubmit={(e) => handleSubmit(e, user)}>
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
        {messageError && <p className={styles['error-message']}>{messageError}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
