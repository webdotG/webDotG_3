import style from './shopPage.module.scss';
import { useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks'; //, useAppSelector 
import { addToCart } from '../../slices/cart/cartSlice';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PRICE = [
  { id: 1, name: 'Шаблон', price: 1 },
  { id: 2, name: 'Индивидуальный', price: 2 },
  { id: 3, name: 'Сайты', price: 0 },
  { id: 4, name: 'ТелеграмБот', price: 0 },
  { id: 5, name: 'Приложения', price: 0 },
  { id: 6, name: 'Лендинг', price: 6 },
  { id: 7, name: 'Многостраничный', price: 7 },
  { id: 8, name: 'Магазин', price: 8 },
  { id: 9, name: 'ЧатБот', price: 9 },
  { id: 10, name: 'Магазин Бот', price: 10 },
  { id: 11, name: 'IOS & Andriod', price: 11 },
  { id: 12, name: 'VK App', price: 12 },
  { id: 13, name: 'Иллюстрации', price: 13 },
  { id: 14, name: 'Иконки', price: 14 },
  { id: 15, name: 'Фотографии', price: 15 },
  { id: 16, name: 'Срочно!', price: 16 },
]

export default function ShopPage() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [showFirstRadio] = useState(true);
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
  console.log(selectedItems2)
  const [showSelectItemMessage, setShowSelectItemMessage] = useState(false);

  const handleChangeFirsRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems([id]);
    } else {
      setSelectedItems([]);
    }
    setShowSecondeRadio(true)
  };

  const handleChangeSecondRadio = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems2([id]);
      if (id === '3') {
        setShowSite(true);
      } else {
        setShowSite(false);
      }
      if (id === '4') {
        setShowTelegram(true);
      } else {
        setShowTelegram(false);
      }
      if (id === '5') {
        setShowApp(true);
      } else {
        setShowApp(false);
      }
    } else {
      setSelectedItems2([]);
    }
  };

  const handleChangeSite = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems3([id]);
    } else {
      setSelectedItems3([]);
    }
    setShowAdditional(true)
  };

  const handleChangeTelegram = (event: ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSelectedItems4([id]);
    } else {
      setSelectedItems4([]);
    }
    setShowAdditional(true)
  };

  const handleChangeApp = (event: ChangeEvent<HTMLInputElement>) => {
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

  const mergedSelectedItems = selectedItems.concat(
    selectedItems3,
    selectedItems4,
    selectedItems5,
    selectedItemsCheckbox
  );

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    const selectedItemsIds = [
      ...selectedItems,
      ...selectedItems3,
      ...selectedItems4,
      ...selectedItems5,
      ...selectedItemsCheckbox,
    ];

    selectedItemsIds.forEach((selectedItemId) => {
      const selectedItem = PRICE.find((item) => item.id.toString() === selectedItemId);
      if (selectedItem) {
        totalPrice += selectedItem.price;
      }
    });

    return totalPrice;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.removeItem('cartState');


    const allSelectedItems = [
      ...selectedItems,
      ...selectedItems3,
      ...selectedItems4,
      ...selectedItems5,
      ...selectedItemsCheckbox,
    ].map((selectedItemId) => {
      const selectedItem = PRICE.find((item) => item.id.toString() === selectedItemId);
      return selectedItem
        ? {
          itemId: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
        }
        : { itemId: -1, name: '', price: 0 };
    });
    allSelectedItems.forEach(item => {
      dispatch(addToCart(item));
    });
    setSelectedItems([]);
    setSelectedItems2([]);
    setSelectedItems3([]);
    setSelectedItems4([]);
    setSelectedItems5([]);
    setSelectedItemsCheckbox([]);

    navigate('/confirmation')
  };

  const variants = {
    initial: {
      x: 0,
      y: 5,
      opacity: 0
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.25,
        duration: 1.25,
        staggerChildren: 0.25,
      }
    },
  
  }
  

  return (
    <>
      <section className={style['shop-page']}>
        <div className={style['form-wrapper']}>
          <h2 className={style['form-title']}>магазин</h2>

          <form className={style['shop-form']}
            onSubmit={handleSubmit}
          >
            {showFirstRadio && (
              <motion.div 
              // ref={ref}
              variants={variants}
              initial='initial'
              animate='animate'
              className={style['first-radio-wrapper']}>
                <span className={style['first-wrapper']}>
                </span>
                <span className={style['first-wrapper']}>
                  <label>шаблон
                    <input className={style['radio']}
                      // id='Print'
                      // id='Шаблон'
                      id='1'
                      type='radio'
                      name='first-radio'
                      onChange={handleChangeFirsRadio}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                  <label>индивидуальный
                    <input className={style['radio']}
                      // id='Custom'
                      // id='Индивидуальный'
                      id='2'
                      type='radio'
                      name='first-radio'
                      onChange={handleChangeFirsRadio}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            {showSecondeRadio && (
              <motion.div 
              variants={variants}
              initial='initial'
              whileInView='animate'
              className={style['seconde-radio-wrapper']}>
                <span className={style['first-wrapper']}>
                  <label className={style['label']} >сайты
                    <input className={style['radio']}
                      // id='websites'
                      // id='Сайты'
                      id='3'
                      type='radio'
                      name='seconde-radio'
                      onChange={handleChangeSecondRadio}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                      onChange={handleChangeSecondRadio}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                      onChange={handleChangeSecondRadio}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            {showSite && (
              <motion.div 
              variants={variants}
              initial='initial'
              whileInView='animate'
              className={style['first-site-wrapper']}>
                <span className={style['first-wrapper']}>
                  <label>лендинг
                    <input className={style['radio']}
                      // id='lending'
                      // id='Лендинг'
                      id='6'
                      type='radio'
                      name='site-radio'
                      onChange={handleChangeSite}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                      onChange={handleChangeSite}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                      onChange={handleChangeSite}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            {showTelegram && (
              <motion.div 
              variants={variants}
              initial='initial'
              whileInView='animate'
              className={style['first-telegram-wrapper']}>
                <span className={style['first-wrapper']}>
                  <label>чат бот
                    <input className={style['radio']}
                      // id='chat-bot'
                      // id='ЧатБот'
                      id='9'
                      type='radio'
                      name='telegram-radio'
                      onChange={handleChangeTelegram}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                      onChange={handleChangeTelegram}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            {showApp && (
              <motion.div 
              variants={variants}
              initial='initial'
              whileInView='animate'
              className={style['first-app-wrapper']}>
                <span className={style['first-wrapper']}>
                  <label>IOS & Android
                    <input className={style['radio']}
                      // id='IOS_&_Andriod'
                      id='11'
                      type='radio'
                      name='app-radio'
                      onChange={handleChangeApp}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
                <span className={style['first-wrapper']}>
                  <label>VK App
                    <input className={style['radio']}
                      // id='VK_App'
                      id='12'
                      type='radio'
                      name='app-radio'
                      onChange={handleChangeApp}
                    />
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            {showAdditional && (
              <motion.div 
              variants={variants}
              initial='initial'
              whileInView='animate'
              className={style['additional-wrapper']}>
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
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
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
                    <motion.span whileHover={{ scale: 1.25 }} className={style['custom-check']}></motion.span>
                  </label>
                </span>
              </motion.div>
            )}
            <div>
              <h3 className={style['total-select']}>
                ВЫБРАНО :
                <ul className={style['selected-items-list']}>
                  {mergedSelectedItems.map((selectedItemId, index) => {
                    const selectedItem = PRICE.find(item => item.id.toString() === selectedItemId);
                    return (
                      <li className={style['selected-item']} key={index}>
                        {selectedItem ? `${selectedItem.name} : ${selectedItem.price} р` : ''}
                      </li>
                    );
                  })}
                </ul>
              </h3>
              <p className={style['total-price']}>Общая стоимость : {calculateTotalPrice()} р</p>
            </div>
            <div>
              <button className={style['form-submit']}
                type='submit'
                // disabled={!showAdditional}
                onClick={(event) => {
                  if (!showAdditional) {
                    event.preventDefault();          // прерываю отправку формы если кнопка недоступна
                    setShowSelectItemMessage(true);
                  }
                }}
              >
                добавить в корзину
              </button>
              {showSelectItemMessage && (
                <p className={style['select-item-message']}>
                  Надо выбрать хотя бы один товар.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  )

}

