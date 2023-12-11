import React from 'react';
import Chat from '../../components/chat/chat';
import styles from './MyPage.module.scss';

const MyPage = () => {
  return (
    <div className={styles.myPage}>
      <h2>Личный кабинет</h2>
      <p>Добро пожаловать в ваш личный кабинет!</p>
      <div className={styles.specialOption}>
        <h3 className={styles.optionHeader}>Special Option</h3>
        <select className={styles.select}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
      <Chat />
    </div>
  );
};

export default MyPage;
