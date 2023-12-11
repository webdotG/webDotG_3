import React, { useState } from 'react';
import Header from '../../components/header/header';
import style from './shopPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../STORE/slice/totalPriceSlice';
import { RootState } from '../../STORE/store';
import { calculateTotalPrice, typeSiteType } from '../../utilits_function/calculatePrice';

export default function ShopPage() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.totalPrice.value);

  const [isThirdBlockVisible, setIsThirdBlockVisible] = useState(false);
  const [isThirdBlockChecked, setIsThirdBlockChecked] = useState(false)
  const [isSiteChecked, setIsSiteChecked] = useState(false);
  const [isFourthBlockVisible, setIsFourthBlockVisible] = useState(false);

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSiteChecked(e.target.value === 'сайты' && e.target.checked);
  };

  const handleSiteSecondeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType;
    const active = e.target.checked;
    const optionName = ''; // Задайте значение переменной optionName
    const optionChecked = true; // Задайте значение переменной optionChecked

    const newTotalPrice = calculateTotalPrice(selectedType, active, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));

    setIsThirdBlockVisible(true);
  };


  const handleSiteTypeThirdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsThirdBlockChecked(e.target.checked);

    const selectedType = e.target.value as typeSiteType;
    const active = e.target.checked;
    const optionName = ''; // Задайте значение переменной optionName
    const optionChecked = true; // Задайте значение переменной optionChecked

    const newTotalPrice = calculateTotalPrice(selectedType, active, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));

    setIsFourthBlockVisible(e.target.checked);
  };

  const handleDesignOptionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const newTotalPrice = calculateTotalPrice('', true, totalPrice, name, checked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  return (
    <>
      <Header />
      <div className={style.shop_page__wrapper}>
        <h1 className={style.shop_page__title}>магазин</h1>
        <h2>выберите:</h2>
        <div className={style.check_first}>
          <div className={style.site_blok_wrapper}>
            <label>сайты</label>
            <input
              type='checkbox'
              name='siteType'
              value='сайты'
              onChange={handleSiteTypeChange}
            />
          </div>
        </div>

        {isSiteChecked ? (
          <div className={style.site_seconde_blok_wrapper}>
            <label>лендинг</label>
            <input
              type='checkbox'
              name='siteTypeSeconde'
              value='лендинг'
              onChange={handleSiteSecondeTypeChange}
            />
            <label>многостраничный</label>
            <input
              type='checkbox'
              name='siteTypeSeconde'
              value='многостраничный'
              onChange={handleSiteSecondeTypeChange}
            />
            <label>магазин</label>
            <input
              type='checkbox'
              name='siteTypeSeconde'
              value='магазин'
              onChange={handleSiteSecondeTypeChange}
            />
          </div>
        ) : null}

        {isThirdBlockVisible ? (
          <div className={style.site_third_blok_wrapper}>
            <label>индивидуальный</label>
            <input
              type='checkbox'
              name='siteTypeThird'
              value='индивидуальный'
              onChange={handleSiteTypeThirdChange}
            />
            <label>шаблон</label>
            <input
              type='checkbox'
              name='siteTypeThird'
              value='шаблон'
              onChange={handleSiteTypeThirdChange}
            />
          </div>
        ) : null}


        {isFourthBlockVisible && (
          <div className={style.site_fourth_blok_wrapper}>
            <label>дизайн</label>
            <input type='checkbox' name='дизайн' onChange={handleDesignOptionsChange} />
            <label>логотип</label>
            <input type='checkbox' name='логотип' onChange={handleDesignOptionsChange} />
            <label>фирменные цвета</label>
            <input type='checkbox' name='фирменные цвета' onChange={handleDesignOptionsChange} />
            <label>индивидуальные иконки</label>
            <input type='checkbox' name='индивидуальные иконки' onChange={handleDesignOptionsChange} />
            <label>индивидуальные картинки</label>
            <input type='checkbox' name='индивидуальные картинки' onChange={handleDesignOptionsChange} />
            <label>срочно</label>
            <input type='checkbox' name='срочно' onChange={handleDesignOptionsChange} />
          </div>
        )}

        {totalPrice > 0 && (
          <div className={style.total_price_wrapper}>
            <p>Общая цена: {totalPrice} рублей</p>
          </div>
        )}
      </div>
    </>
  );
}
