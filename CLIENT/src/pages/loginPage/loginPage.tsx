import React, { useState, useEffect } from 'react';
import styles from './LoginPage.module.scss';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLoginMutation, UserData } from '../../api/authApi';
import { selectUser } from "../../slices/auth/authSlice";
import { isErrorWithMessage } from '../../support_function/is_error_with_message';


// interface typeLoginData {
//   id?: string,
//   email?: string,
//   password?: string,
//   name?: string ,
//   token?: string | null
// }


const LoginPage: React.FC = () => {
  const [user, setUser] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({ email: '', password: '' });
  const [messageError, setMessageError] = useState('')
  const isValidPassword = (password: string): boolean => {
    return password.length >= 3;
  };
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setError({
          ...error,
          [name]: value.trim() === '' ? 'Email обязателен для заполнения' : !emailRegex.test(value) ? 'Некорректный email' : '',
        });
        break;
      case 'password':
        setError({ ...error, [name]: !isValidPassword(value) ? 'Пароль должен содержать не менее 3 символов' : '' });
        break;
      default:
        break;
    }
    if (name === 'email' && !emailRegex.test(value)) {
      setMessageError('Некорректный email');
    } else {
      setMessageError('');
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




  // const handleSubmit = async (user: UserData) => {
  //   console.log("HANDLE SUBMIT DATA : ", user)
  //   try {
  //     await loginUser(user).unwrap();

  //     navigate("/");
  //   } catch (err) {
  //     const maybeError = isErrorWithMessage(err);

  //     if (maybeError) {
  //       setErrorMes(err.data.message);
  //     } else {
  //       setErrorMes("Неизвестная ошибка");
  //     }
  //   }
  // };
  //  const handleSubmit = async (user: UserData, ) => { //e: React.FormEvent<HTMLFormElement>,
  //     console.log("DATA USER FORM EM PASS : ", user)       // e.preventDefault();
  //     try {
  //       if (!error.email && !error.password) {
  //         await loginUser(user).unwrap()
  //         // dispatch(fetchAuth(user))
  //         navigate('/');
  //       } else {
  //         console.log('Форма невалидна. Пожалуйста, заполните все поля корректно.');
  //       }
  //     } catch (err) {
  //       const ifError = isErrorWithMessage(err)
  //       if (ifError) {
  //         setErrorMes(err.data.message)
  //       } else {
  //         setErrorMes('непонятно')
  //       }
  //     }
  //   };
  const navigate = useNavigate();
  const userSelect = useSelector(selectUser);
  const [loginUser] = useLoginMutation()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>, user: UserData) => {
    console.log("RESPONSE USER : ", user)
    e.preventDefault();
    if (!error.email && !error.password) {
      try {
        await loginUser(user).unwrap()
      } catch (error) {
        console.error('ОШИБКА БЛЯДЬ ЗАПОЛНИ ФОРМУ : ', error);
      }
    }
    else {
      console.log('Форма невалидна. Пожалуйста, заполните все поля корректно.');
    }
  };

  useEffect(() => {
    if (userSelect) {
      navigate("/");
    }
  }, [userSelect, navigate]);

  return (
    <div>
      <h2 className={styles['login-form-title']}>Войти</h2>
      <form className={styles['login-form-container']} onSubmit={(e) => handleSubmit(e, user)}>
        <div className={styles['email-wrapper']}>
          <label className={styles['email-label']}>
            Email:
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={error.email ? styles['error'] : styles['email-input']}
            />
          </label>
          {error.email && <p className={styles['error-message']}>{error.email}</p>}
        </div>
        <div className={styles['password-wrapper']} >
          <label className={styles['password-label']}>
            Пароль:
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={error.password ? styles['error'] : styles['password-input']}
            />
            <button className={styles['btn-show-password']} type="button" onClick={handleTogglePassword}>
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </label>
          {error.password && <p className={styles['error-message']}>{error.password}</p>}
        </div>
        <button disabled={!!(error.email || error.password)} type="submit" className={styles['submit-button']}>Войти</button>
        {messageError && <p className={styles['error-message']}>{messageError}</p>}
      </form>
    </div>
  );
};

export default LoginPage;



// const handleSubmit = async (user: typeLoginData) => { //e: React.FormEvent<HTMLFormElement>,
//   console.log("DATA USER FORM EM PASS : ", user)       // e.preventDefault();

//   try {
//     if (!error.email && !error.password) {
//       await loginUser(user).unwrap()
//       // dispatch(fetchAuth(user))
//       navigate('/');
//     } else {
//       console.log('Форма невалидна. Пожалуйста, заполните все поля корректно.');
//     }
//   } catch (err) {
//     const ifError = isErrorWithMessage(err)
//     if (ifError) {
//       setErrorMes(err.data.message)
//     } else {
//       setErrorMes('непонятно')
//     }
//   }
// };




// try {
//   const response = await axios.post('/api/user/login', { ...user });
//   console.log("LOGIN PAGE AXIOS POST API/USER/LOGIN RESPONSE.DATA : ", response.data);
//   const { email, token, id, name } = response.data
//   console.log("EMAIL < TOKEN < ID < NAME : ", email, token, id, name)
//   if (email && token) {
//     dispatch(fetchAuth(user))
//     navigate('/');
//   }
// } catch (error) {
//   console.error('ОШИБКА : ', error);
// }