import React, { useState, FormEvent } from 'react';
import styles from './LoginPage.module.scss';
import { typeUserData, useLoginMutation } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { isErrorWithMessage, typeErrorWithMessage } from '../../support_function/is_error_with_message';

interface LoginData {
  username: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginData>({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<Record<string, string>>({username: '', password: ''});
  const [messageError, setMessageError] = useState('')
  const [loginUser, loginUserResult] = useLoginMutation()

  const login = async (data: typeUserData) => {
    try {
      await loginUser(data).unwrap();
      console.log("ERROR LOGINUSER DATA : ", data)
      navigate('/register');
    } catch (err) {
      console.log("LOGIN ERROR : ", err)
      const maybeError = isErrorWithMessage(err);
      if (maybeError) {
        const errorData = err as typeErrorWithMessage; // Приведение типа
        setMessageError(errorData.data.message);
      } else {
        setMessageError('Неизвестная ошибка');
      }
    }
  };
  //  setError({ ...error, login: 'Ошибка входа. Пожалуйста, проверьте введенные данные.' })

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

  const handleTogglePassword = (): void => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <h2>Форма входа</h2>
      <form className={styles['login-form-container']} onSubmit={login}>
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
