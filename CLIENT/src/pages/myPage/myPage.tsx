import React, { useState } from 'react';
import Chat from '../../components/chat/chat';
import styles from './MyPage.module.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const MyPage: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className={styles.myPage}>
      <Header />
      <h2>Личный кабинет</h2>
      <p>Добро пожаловать в ваш личный кабинет!</p>
      <div className={styles.specialOption}>
        <h3 className={styles.optionHeader}>Special Option</h3>
        <select className={styles.select} onChange={handleSelectChange} value={selectedOption}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">чат</option>
        </select>
      </div>
      {/* {selectedOption === 'option3' && <Chat />} */}
      <Footer />
    </div>
  );
};

export default MyPage;
