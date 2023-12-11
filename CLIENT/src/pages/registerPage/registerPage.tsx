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



// import React, { useState, FormEvent  } from 'react';
// import styles from './registerPage.module.scss'; 
// import axios from 'axios';

// interface User {
//   username: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }

// const RegistrPage: React.FC = () => {

//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [redirectToUserPage, setRedirectToUserPage] = useState(false);

//   const handleSubmitAxios = async (e: FormEvent) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('', {               // Отправляю данные на сервер
//         username,
//         email,
//         password,
//       });
//       console.log(response.data);                          // Логирую ответ сервера
//       // Проверяем успешность регистрации (можете использовать данные из ответа сервера)
//       if (response.status === 200) {
//         // Логика после успешной регистрации
//         setRedirectToUserPage(true); // Устанавливаем флаг перенаправления на страницу пользователя
//       }                                               // логика после успешной отправки данных на сервер
//     } catch (error) {
//       console.error('Ошибка:', error);
//                                                           // Обработка ошибок при отправке данных на сервер
//     }
//   };

//   const [user, setUser] = useState<User>({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [error, setError] = useState<Record<string, string>>({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

  
//   const isValidPassword = (password: string): boolean => {
//     return password.length >= 8;
//   };

//   const [showPassword, setShowPassword] = useState<boolean>(false);

//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleBlur = (e: React.FocusEvent<HTMLInputElement>): void => {
//     const { name, value } = e.target;
//     switch (name) {
//       case 'username':
//         if (value.trim() === '') {
//           setError({ ...error, [name]: 'Имя пользователя обязательно для заполнения' });
//         } else {
//           setError({ ...error, [name]: '' });
//         }
//         break;
//       case 'email':
//         if (!emailRegex.test(value)) {
//           setError({ ...error, [name]: 'Введите корректный адрес электронной почты' });
//         } else {
//           setError({ ...error, [name]: '' });
//         }
//         break;
//       case 'password':
//         if (!isValidPassword(value)) {
//           setError({ ...error, [name]: 'Пароль должен содержать не менее 8 символов' });
//         } else {
//           setError({ ...error, [name]: '' });
//         }
//         break;
//       case 'confirmPassword':
//         if (user.password !== value) {
//           setError({ ...error, [name]: 'Пароль и подтверждение пароля должны совпадать' });
//         } else {
//           setError({ ...error, [name]: '' });
//         }
//         break;
//       default:
//         break;
//     }
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
//     setUser({
//       ...user,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleTogglePassword = (): void => {
//     setShowPassword(!showPassword);
//   };
  
//   // Проверяем, нужно ли перенаправлять пользователя на страницу пользователя
//   if (redirectToUserPage) {
//     window.location.href = '/user-page'; // Перенаправляем пользователя на страницу UserPage.tsx
//     return null; // Выход из рендеринга текущей страницы
//   }

//   // const getJWTToken = async (userData: User): Promise<string | null> => {
//   //   // ...  код получения JWT токена
//   // };

//   return (
//     <div className={styles['registration-form-container']}>
//       <h2>Форма регистрации</h2>
//       {error.submitError && <p className={styles['error-message']}>{error.submitError}</p>}
//       <form onSubmit={handleSubmitAxios}>
//         <div>
//           <label>
//             Имя пользователя:
//             <input
//               type="text"
//               name="username"
//               value={user.username}
//               onChange={(e) => {
//                 handleChange
//                 setUsername(e.target.value)
//               }}
//               onBlur={handleBlur}
//             />
//           </label>
//           {error.username && <p className={styles['error-message']}>{error.username}</p>}
//         </div>
//         <div>
//           <label>
//             Email:
//             <input
//               type="email"
//               name="email"
//               value={user.email}
//               onChange={(e) => {
//                 handleChange
//                 setEmail(e.target.value)}
//               }
//               onBlur={handleBlur}
//             />
//           </label>
//           {error.email && <p className={styles['error-message']}>{error.email}</p>}
//         </div>
//         <div>
//           <label>
//             Пароль:
//             <input
//               type={showPassword ? 'text' : 'password'}
//               name="password"
//               value={user.password}
//               onChange={handleChange}
//               onBlur={handleBlur}
//             />
//           </label>
//           <button type="button" onClick={handleTogglePassword}>
//             {showPassword ? 'Скрыть пароль' : 'Показать пароль'}
//           </button>
//           {error.password && <p className={styles['error-message']}>{error.password}</p>}
//         </div>
//         <div>
//           <label>
//             Подтверждение пароля:
//             <input
//               type="password"
//               name="confirmPassword"
//               value={user.confirmPassword}
//               onChange={(e) => {
//                 handleChange
//                 setPassword(e.target.value)}}
//               onBlur={handleBlur}
//             />
//           </label>
//           {error.confirmPassword && <p className={styles['error-message']}>{error.confirmPassword}</p>}
//         </div>
//         <button type="submit">Зарегистрироваться</button>
//       </form>
//     </div>
//   );
// };

// export default RegistrPage;


