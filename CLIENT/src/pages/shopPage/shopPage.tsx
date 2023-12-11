import React, { useState } from 'react';
import Header from '../../components/header/header';
import style from './shopPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../STORE/slice/totalPriceSlice';
import { RootState } from '../../STORE/store';
import { calculateTotalPrice, typeSiteType } from '../../utilits_function/calculatePrice';



function ShopPage() {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.totalPrice.value);


  
  const [selectedSiteSecondeType, setSelectedSiteSecondeType] = useState('');
  const [isThirdBlockVisible, setIsThirdBlockVisible] = useState(false);
  const [isSiteChecked, setIsSiteChecked] = useState(false);
  const [isFourthBlockVisible, setIsFourthBlockVisible] = useState(false);

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSiteChecked(e.target.value === 'сайты' && e.target.checked);
  };

  const handleSiteSecondeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType; // Приводим значение к типу SiteType
    setSelectedSiteSecondeType(selectedType);
    const price = calculateTotalPrice(selectedType);
    dispatch(setTotalPrice(price));
    setSelectedSiteSecondeType(e.target.value);
    setIsThirdBlockVisible(true);
  };

  const handleSiteTypeThirdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFourthBlockVisible(e.target.checked);
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
              type='radio'
              name='siteType'
              value='сайты'
              onChange={handleSiteTypeChange}
            />
          </div>
        </div>

        {isSiteChecked && (
          <div className={style.site_seconde_blok_wrapper}>
            <label>лендинг</label>
            <input
              type='radio'
              name='siteTypeSeconde'
              value='лендинг'
              checked={selectedSiteSecondeType === 'лендинг'}
              onChange={handleSiteSecondeTypeChange}
            />
            <label>многостраничный</label>
            <input
              type='radio'
              name='siteTypeSeconde'
              value='многостраничный'
              checked={selectedSiteSecondeType === 'многостраничный'}
              onChange={handleSiteSecondeTypeChange}
            />
            <label>магазин</label>
            <input
              type='radio'
              name='siteTypeSeconde'
              value='магазин'
              checked={selectedSiteSecondeType === 'магазин'}
              onChange={handleSiteSecondeTypeChange}
            />
          </div>
        )}

        {isThirdBlockVisible && (
          <div className={style.site_third_blok_wrapper}>
            <label>индивидуальный</label>
            <input
              type='radio'
              name='siteTypeThird'
              value='индивидуальный'
              onChange={handleSiteTypeThirdChange}
            />
            <label>шаблон</label>
            <input
              type='radio'
              name='siteTypeThird'
              value='шаблон'
              onChange={handleSiteTypeThirdChange}
            />
          </div>
        )}

        {isFourthBlockVisible && (
          <div className={style.site_fourth_blok_wrapper}>
            <label>дизайн</label>
            <input type='checkbox' />
            <label>логотип</label>
            <input type='checkbox' />
            <label>фирменные цвета</label>
            <input type='checkbox' />
            <label>индивидуальные иконки</label>
            <input type='checkbox' />
            <label>индивидуальные картинки</label>
            <input type='checkbox' />
            <label>срочно</label>
            <input type='checkbox' />
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

export default ShopPage;
