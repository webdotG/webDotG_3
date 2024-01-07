import React from 'react';
import style from './myPage.module.scss';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const MyPage: React.FC = () => {

  return (
    <div className={style['page-container']}>
      <Header />
      <div className={style['mypage-wrapper']}>
        <h2>Личный кабинет</h2>
        <p>Добро пожаловать в ваш личный кабинет!</p>
      </div>
      <Footer />
    </div>
  );
};

export default MyPage;
