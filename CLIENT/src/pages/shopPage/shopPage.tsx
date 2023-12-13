

import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import style from './shopPage.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setTotalPrice } from '../../STORE/slice/totalPriceSlice';
import { RootState } from '../../store';
import { calculateTotalPrice, typeSiteType } from '../../support_function/calculatePrice';

interface CheckboxValues {
  [key: string]: boolean;
}

const initialCheckboxValues: CheckboxValues = {
  isLandingChecked: false,
  isMultPageChecked: false,
  isShopChecked: false,
  isIndividualChecked: false,
  isTemplateChecked: false,
};

export default function ShopPage(): JSX.Element {
  const dispatch = useDispatch();
  const totalPrice = useSelector((state: RootState) => state.totalPrice.value);

  const [isThirdBlockVisible, setIsThirdBlockVisible] = useState(false);
  const [isSiteChecked, setIsSiteChecked] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState<CheckboxValues>(initialCheckboxValues);

  useEffect(() => {
    const anySecondBlockChecked = Object.values(checkboxValues).some((value) => value);
    setIsThirdBlockVisible(anySecondBlockChecked);
  }, [checkboxValues]);

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSiteChecked(e.target.value === 'сайты' && e.target.checked);
  };

  const handleSiteTypeChangeSecondBlock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType;
    const active = e.target.checked;

    setCheckboxValues({
      ...checkboxValues,
      [selectedType]: active,
    });

    const optionName = e.target.value;
    const optionChecked = e.target.checked;

    const newTotalPrice = calculateTotalPrice(selectedType, active, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const handleSiteTypeChangeThirdBlock = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedType = e.target.value as typeSiteType;
    const optionName = e.target.value;
    const optionChecked = e.target.checked;

    setCheckboxValues({
      ...checkboxValues,
      [selectedType]: optionChecked,
    });

    const newTotalPrice = calculateTotalPrice(selectedType, optionChecked, totalPrice, optionName, optionChecked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const handleDesignOptionsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    const newTotalPrice = calculateTotalPrice('', true, totalPrice, name, checked);
    dispatch(setTotalPrice(newTotalPrice));
  };

  const isFourthBlockVisible = isThirdBlockVisible && Object.values(checkboxValues).some((value) => value);

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
              onChange={handleSiteTypeChangeSecondBlock}
            />
            <label>многостраничный</label>
            <input
              type='checkbox'
              name='siteTypeSeconde'
              value='многостраничный'
              onChange={handleSiteTypeChangeSecondBlock}
            />
            <label>магазин</label>
            <input
              type='checkbox'
              name='siteTypeSeconde'
              value='магазин'
              onChange={handleSiteTypeChangeSecondBlock}
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
              onChange={handleSiteTypeChangeThirdBlock}
            />
            <label>шаблон</label>
            <input
              type='checkbox'
              name='siteTypeThird'
              value='шаблон'
              onChange={handleSiteTypeChangeThirdBlock}
            />
          </div>
        )}

        {isThirdBlockVisible && isFourthBlockVisible && (
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
