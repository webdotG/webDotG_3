import React, { useState } from 'react';
import Header from '../../components/header/header';
import style from './shopPage.module.scss';

function ShopPage() {
  const [selectedSiteSecondeType, setSelectedSiteSecondeType] = useState('');
  const [isThirdBlockVisible, setIsThirdBlockVisible] = useState(false);
  const [isSiteChecked, setIsSiteChecked] = useState(false);

  const handleSiteTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSiteChecked(e.target.value === 'сайты' && e.target.checked);
  };

  const handleSiteSecondeTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSiteSecondeType(e.target.value);
    setIsThirdBlockVisible(true);
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
            />
            <label>шаблон</label>
            <input
              type='radio'
              name='siteTypeThird'
              value='шаблон'
            />
          </div>
        )}
      </div>
    </>
  );
}

export default ShopPage;

// import React, { useState } from 'react';
// import Header from '../../components/header/header';
// import style from './shopPage.module.scss';

// function ShopPage() {

//   return (
//     <>
//       <Header />
//       <div className={style.shop_page__wrapper}>
//         <h1 className={style.shop_page__title}>магазин</h1>
//         <h2>выберите :</h2>

//         <div className={style.check_first}>
//           <div className={style.site_blok_wrapper}>
//             <label>сайты</label>
//             <input
//               type='radio'
//               name='siteType'
//               value='сайты'
//             />
//           </div>
//         </div>

//           <div className={style.site_seconde_blok_wrapper}>
//           <label>лендинг</label>
//           <input
//             type='radio'
//             name='siteTypeSeconde'
//             value='лендинг'
//             checked={selectedSiteSecondeType === 'лендинг'}
//           />
//           <label>многостраничный</label>
//           <input
//             type='radio'
//             name='siteTypeSeconde'
//             value='многостраничный'
//             checked={selectedSiteSecondeType === 'многостраничный'}
//           />
//           <label>магазин</label>
//           <input
//             type='radio'
//             name='siteTypeSeconde'
//             value='магазин'
//             checked={selectedSiteSecondeType === 'магазин'}
//           />
//         </div>

//           

//           <div className={style.site_fourth_blok_wrapper}>
//             <label>дизайн</label>
//             <input type='checkbox' />
//             <label>логотип</label>
//             <input type='checkbox' />
//             <label>фирменные цвета</label>
//             <input type='checkbox' />
//             <label>индивидуальные иконки</label>
//             <input type='checkbox' />
//             <label>индивидуальные картинки</label>
//             <input type='checkbox' />
//             <label>срочно</label>
//             <input type='checkbox' />
//           </div>
//       </div>
//     </>
//   );
// }

// export default ShopPage;

