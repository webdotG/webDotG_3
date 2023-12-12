import React, { useState } from 'react';
import Header from '../../components/header/header';
import style from './shopPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../STORE/slice/totalPriceSlice';
import { RootState } from '../../STORE/store';
import { calculateTotalPrice, typeSiteType } from '../../utilits_function/calculatePrice';

interface CheckboxValues {
  isLandingChecked: boolean;
  isMultPageChecked: boolean;
  isShopChecked: boolean;
}

export default function ShopPage(): JSX.Element {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.totalPrice.value);

  const [isThirdBlockVisible, setIsThirdBlockVisible] = useState(false);
  const [isSiteChecked, setIsSiteChecked] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>({
    isLandingChecked: false,
    isMultPageChecked: false,
    isShopChecked: false,
  });

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Убедимся, что значение отмечено как true, только если значение равно 'сайты' и отмечено
    setIsSiteChecked(e.target.value === 'сайты' && e.target.checked);
  };

  const handleSiteSecondeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType;
    const active = e.target.checked;

    // Изменяем состояние чекбоксов на основе предыдущего состояния
    setCheckboxValues({
      ...checkboxValues,
      [selectedType]: active,
    });

    // Проверяем, есть ли хотя бы один чекбокс отмечен во втором блоке
    const areAnyChecked = Object.values({ ...checkboxValues, [selectedType]: active }).some((value) => value);
    setIsThirdBlockVisible(areAnyChecked);

    const optionName = e.target.value;
    const optionChecked = e.target.checked;

    const newTotalPrice = calculateTotalPrice(selectedType, active, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const handleSiteTypeThirdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType;
    const optionName = e.target.value;
    const optionChecked = e.target.checked;

    const newCheckboxValues = {
      ...checkboxValues,
      [selectedType]: optionChecked,
    };

    setCheckboxValues(newCheckboxValues);

    // Проверяем, есть ли хотя бы один чекбокс отмечен в третьем блоке
    const areAnyChecked = Object.values(newCheckboxValues).some((value) => value);
    setIsThirdBlockVisible(areAnyChecked);

    const newTotalPrice = calculateTotalPrice(selectedType, optionChecked, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const handleDesignOptionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const newTotalPrice = calculateTotalPrice('', true, totalPrice, name, checked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const isThirdBlockChecked = Object.values(checkboxValues).some((value) => value);
  const isFourthBlockVisible = isThirdBlockChecked && Object.values(checkboxValues).some((value) => value);

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

        {isSiteChecked && (
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
        )}

        {isThirdBlockVisible &&  (
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
        )}

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
