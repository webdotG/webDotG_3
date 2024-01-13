import Footer from '../../components/footer/footer'
import Header from '../../components/header/header'
import styles from './communityPage.module.scss'
// import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchAddUserCommunity, fetchCommunity, selectUsersCommunity } from '../../slices/community/communitySlice'
import { ChangeEvent, useEffect, useState } from 'react'
// import { fetchCommunity } from '../../slices/community/communitySlice'


export default function CommunityPgae() {
  const dispatch = useAppDispatch()
  const communityUsers = useAppSelector(selectUsersCommunity)

  const [name, setName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState<string | null>(null)

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const name = e.target.value;
    setName(name);
  };

  const handleDateOfBirthChange = (e: ChangeEvent<HTMLInputElement>) => {
    const dateValue = e.target.value;
    setDateOfBirth(dateValue);
  };

  const formattedDate = (date: Date | null): string => {
    if (!date) return '';
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Проверка имени
    if (name.length < 3) {
      alert('Имя должно содержать не менее 3 символов.');
      return;
    }
    // Проверка возраста
    if (dateOfBirth) {
      const currentDate = new Date();
      const birthDate = new Date(dateOfBirth);
      const ageDifference = currentDate.getFullYear() - birthDate.getFullYear();

      if (ageDifference < 18) {
        alert('Возраст должен быть не менее 18 лет.');
        return;
      }
    }

    // преобразование строки даты рождения в объект Date
    const dateOfBirthDate = dateOfBirth ? new Date(dateOfBirth) : null;
    // преобразование объекта Date в строку в нужном формате
    const formattedDateOfBirth = formattedDate(dateOfBirthDate);
    
    dispatch(fetchAddUserCommunity({ name, dateOfBirth: formattedDateOfBirth }));
  };

  useEffect(() => {
    fetchCommunity()
  },[dispatch])

  return (
    <div className={styles['page-container']}>
      <Header />
      <div className={styles['community']}>
        <h1 className={styles['community-title']}></h1>

        <form className={styles['form-add-user']}
          onSubmit={handleSubmit}
        >
          <button className={styles['add-user']}
            type='submit'
          >
            добавить человека
          </button>
          <label>
            <input type='text'
              placeholder='имя'
              value={name}
              onChange={handleNameChange}
            />
            имя
          </label>
          <label>
            дата рождения (месяц.день.год):
            <input type='date'

              onChange={handleDateOfBirthChange}
            />
          </label>
        </form>

        <ul className={styles['users-list']}>
          
          {communityUsers.map((user) => (
            <li key={user.id} className={styles['users-item']}>
              {user.name}, {user.age}
            </li>
          ))} 

        </ul>
      </div>
      <Footer />
    </div>
  )
}
