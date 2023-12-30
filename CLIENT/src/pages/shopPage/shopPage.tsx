import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import style from './shopPage.module.scss';
import { useState, useEffect, ChangeEvent } from 'react';



export default function ShopPage() {
  // Добавим состояния для управления видимостью блоков
  const [showFirstRadio, setShowFirstRadio] = useState(true);
  const [showSecondeRadio, setShowSecondeRadio] = useState(false);
  const [showSite, setShowSite] = useState(false);
  const [showTelegram, setShowTelegram] = useState(false);
  const [showApp, setShowApp] = useState(false);
  const [showAdditional, setShowAdditional] = useState(false);

  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedItems2, setSelectedItems2] = useState<string[]>([]);
  const [selectedItems3, setSelectedItems3] = useState<string[]>([]);
  const [selectedItems4, setSelectedItems4] = useState<string[]>([]);
  const [selectedItems5, setSelectedItems5] = useState<string[]>([]);
  const [selectedItemsCheckbox, setSelectedItemsCheckbox] = useState<string[]>([]);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems([id]);
    } else {
      setSelectedItems([]);
    }
    setShowSecondeRadio(true)
  };
  const handleInputChange2 = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems2([id]);
    if (id === '3') {
      setShowSite(true);
    } else{
      setShowSite(false);
    }
    if (id === '4') {
      setShowTelegram(true);
    } else {
      setShowTelegram(false);
    }
    if (id === '5') {
      setShowApp(true);
    } else{
      setShowApp(false);
    }
    } else {
      setSelectedItems2([]);
    }
  };
  const handleInputChange3 = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems3([id]);
    } else {
      setSelectedItems3([]);
    }
    setShowAdditional(true)
  };
  const handleInputChange4 = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems4([id]);
    } else {
      setSelectedItems4([]);
    }
    setShowAdditional(true)
  };
  const handleInputChange5 = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems5([id]);
    } else {
      setSelectedItems5([]);
    }
    setShowAdditional(true)
  };
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    setSelectedItemsCheckbox((prevItems) => {
      if (checked) {
        return [...prevItems, id];
      } else {
        return prevItems.filter((item) => item !== id);
      }
    });
  };


  useEffect(() => {
    const mergedSelectedItems = [...selectedItems, ...selectedItems2, ...selectedItems3, ...selectedItems4, ...selectedItems5, ...selectedItemsCheckbox];
    console.log('НОВЫЙ МАССИВ ITEMS + ITEMS2 + ....', mergedSelectedItems);
  }, [selectedItems, selectedItems2, selectedItems3, selectedItems4, selectedItems5, selectedItemsCheckbox]);

  return (

    <div className={style['wrapper']}>

      <Header />
      <div className={style['form-wrapper']}>
        <h2 className={style['form-title']}>выберите желаемое</h2>
        <form className={style['shop-form']}
        >
        {showFirstRadio && ( 
         <div className={style['first-radio-wrapper']}>
            <span className={style['first-wrapper']}>

            </span>
            <span className={style['first-wrapper']}>
              <label>индивидуальный
                <input className={style['radio']}
                  // id='Custom'
                  // id='Индивидуальный'
                  id='1'
                  type='radio'
                  name='first-radio'
                  onChange={handleInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
              <label>шаблон
                <input className={style['radio']}
                  // id='Print'
                  // id='Шаблон'
                  id='2'
                  type='radio'
                  name='first-radio'
                  onChange={handleInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>
        )}
          {showSecondeRadio && (
            <div className={style['seconde-radio-wrapper']}>
              <span className={style['first-wrapper']}>
                <label className={style['label']} >сайты
                  <input className={style['radio']}
                    // id='websites'
                    // id='Сайты'
                    id='3'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleInputChange2}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label >боты
                  <input className={style['radio']}
                    // id='telegramBot'
                    // id='ТелеграмБот'
                    id='4'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleInputChange2}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>приложения
                  <input className={style['radio']}
                    // id='applications'
                    // id='Приложения'
                    id='5'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleInputChange2}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showSite &&(
            <div className={style['first-site-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>лендинг
                  <input className={style['radio']}
                    // id='lending'
                    // id='Лендинг'
                    id='6'
                    type='radio'
                    name='site-radio'
                    onChange={handleInputChange3}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>многостраничный
                  <input className={style['radio']}
                    // id='multipage'
                    // id='Многострaничный'
                    id='7'
                    type='radio'
                    name='site-radio'
                    onChange={handleInputChange3}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>магазин
                  <input className={style['radio']}
                    // id='shop'
                    // id='Магазин'
                    id='8'
                    type='radio'
                    name='site-radio'
                    onChange={handleInputChange3}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showTelegram &&(
            <div className={style['first-telegram-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>чат бот
                  <input className={style['radio']}
                    // id='chat-bot'
                    // id='ЧатБот'
                    id='9'
                    type='radio'
                    name='telegram-radio'
                    onChange={handleInputChange4}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>магазин бот
                  <input className={style['radio']}
                    // id='shop-bot'
                    // id='МагазинБ
                    id='10'
                    type='radio'
                    name='telegram-radio'
                    onChange={handleInputChange4}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showApp && (
            <div className={style['first-app-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>IOS & Android
                  <input className={style['radio']}
                    // id='IOS_&_Andriod'
                    id='11'
                    type='radio'
                    name='app-radio'
                    onChange={handleInputChange5}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>VK App
                  <input className={style['radio']}
                    // id='VK_App'
                    id='12'
                    type='radio'
                    name='app-radio'
                    onChange={handleInputChange2}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showAdditional && (
            <div className={style['additional-wrapper']}>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check1']}>графику от иллюстратора
                  <input className={style['checkbox']}
                    // id="customImages"
                    // id="Иллюстрации
                    id='13'
                    type='checkbox'
                    name='additional-first'
                    onChange={handleCheckboxChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check2']}>индивидуальные иконки
                  <input className={style['checkbox']}
                    // id="customIcons"
                    // id="Иконки"

                    id='14'
                    type='checkbox'
                    name='additional-seconde'
                    onChange={handleCheckboxChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check3']}> фотографии
                  <input className={style['checkbox']}
                    // id="photos"
                    // id="Фотографии"
                    id='15'
                    type='checkbox'
                    name='additional-therd'
                    onChange={handleCheckboxChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check4']}>СРОЧНО !!!
                  <input className={style['checkbox']}
                    // id="now"
                    // id="Срочно!"

                    id='16'
                    type='checkbox'
                    name='additional-fourth'
                    onChange={handleCheckboxChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}
          <div>
            <h3 className={style['total-select']}>ВЫБРАНО :
              {/* <p className={style['total-select-text']}>{combinedString}</p> */}
            </h3>
          </div>
          <button className={style['form-submit']}
            type='submit' />
        </form>

      </div>
      <Footer />
    </div>
  )

}


// id={testObj.find(element => element.name === 'Лендинг')?.id.toString()}