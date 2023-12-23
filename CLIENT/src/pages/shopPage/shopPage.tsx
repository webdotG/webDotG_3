import style from './shopPage.module.scss'
import { useState } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'

interface PriceList {
  [key: string]: number;
}
// const price: PriceList = {
//   'Шаблон': 15000,
//   'Лендинг': 30000,
//   'Многостраничный': 60000,
//   'Магазин': 120000,
//   'Магазин Бот': 60000,
//   'Чат Бот': 40000,
//   'IOS & Android': 80000,
//   'VK mini App': 60000,
//   'Индивидуальный на Лендинге': 30000,
//   'Индивидуальный на Многостраничном': 90000,
//   'Индивидуальный на Магазине': 150000,
//   'Индивидуальный на Магазине Бот': 90000,
//   'Индивидуальный на Чат Боте': 60000,
//   'Индивидуальный на IOS & Android': 120000,
//   'Индивидуальный на VK mini App': 90000,
//   'Иллюстрации': 1,
//   'Иконки': 2,
//   'Фотографии': 3,
//   'Срочно!': 4,
// };

const price: PriceList = {
  Шаблон: 50,
  Индивидуальный: 100,
  Сайты: 200,
  ТелеграмБот: 150,
  Приложения: 180,
  Лендинг: 80,
  Многостраничный: 120,
  Магазин: 160,
  ЧатБот: 130,
  МагазинБот: 170,
  'IOS_&_Andriod': 220,
  VK_App: 190,
  Иллюстрации: 1,
  Иконки: 2,
  Фотографии: 3,
  'Срочно!': 4,
};

export default function ShopPage() {
  // Здесь объявляем состояния для отображения блоков и выбранных опций
  const [showSecondBlock, setShowSecondBlock] = useState(false);
  const [showThirdBlock, setShowThirdBlock] = useState(false);
  const [showFourthBlock, setShowFourthBlock] = useState(false);
  const [showFifthBlock, setShowFifthBlock] = useState(false);
  const [showSixthBlock, setShowSixthBlock] = useState(false);
  // Состояния для хранения выбранных опций каждого блока
  const [firstSelectedInputs, setFirstSelectedInputs] = useState<string[]>([]);
  const [secondSelectedInputs, setSecondSelectedInputs] = useState<string[]>([]);
  const [thirdSelectedInputs, setThirdSelectedInputs] = useState<string[]>([]);
  const [fourthSelectedInputs, setFourthSelectedInputs] = useState<string[]>([]);

  // Обработчики событий для изменения отображения блоков и выбранных опций
  const handleFirstInputChange = () => {
    setShowSecondBlock(true);
  };

  const handleSecondInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedRadio = event.target.id;
    // Обновление состояния блоков на основе выбранной опции
    if (selectedRadio === 'Сайты') {
      setShowThirdBlock(true);
      setShowFourthBlock(false);
      setShowFifthBlock(false);
    } else if (selectedRadio === 'ТелеграмБот') {
      setShowThirdBlock(false);
      setShowFourthBlock(true);
      setShowFifthBlock(false);
    } else if (selectedRadio === 'Приложения') {
      setShowThirdBlock(false);
      setShowFourthBlock(false);
      setShowFifthBlock(true);
    }
    // Вызов функции для обновления выбранных опций
    isSecondeInputChange(event);
  };

  const handleOtherInputChange = () => {
    setShowSixthBlock(true);
  };

  // Обработчик события для первого блока опций
  const isFirstInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setFirstSelectedInputs([id]);
    }
  };
  // Аналогично для остальных блоков опций
  const isSecondeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setSecondSelectedInputs([id]);
    }
  };
  const isThirdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;
    if (checked) {
      setThirdSelectedInputs([id]);
    }
  };
  const isFourdInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = event.target;

    if (checked) {
      setFourthSelectedInputs(prevInputs => [...prevInputs, id]);
    } else {
      setFourthSelectedInputs(prevInputs =>
        prevInputs.filter(input => input !== id)
      );
    }
  };

  // Функция для объединения выбранных опций из всех блоков в одну строку
  function combineSelectedInputs(firstInputs: string[], secondInputs: string[], thirdInputs: string[], fourthInputs: string[]): string {
    // Объединяем все массивы в один с помощью оператора concat
    const combinedInputs: string[] = firstInputs.concat(secondInputs, thirdInputs, fourthInputs);
    // Используем метод join(',') для разделения элементов запятыми
    return combinedInputs.join(', ');
  }
  // Вызываем функцию для объединения выбранных опций в одну строку
  const combinedString = combineSelectedInputs(firstSelectedInputs, secondSelectedInputs, thirdSelectedInputs, fourthSelectedInputs);

  // const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
  //     event.preventDefault();

  //     setFirstSelectedInputs([]);
  //     setSecondSelectedInputs([]);
  //     setThirdSelectedInputs([]);
  //     setFourthSelectedInputs([]);
  //     setShowSecondBlock(false);
  //     setShowThirdBlock(false);
  //     setShowFourthBlock(false);
  //     setShowFifthBlock(false);
  //     setShowSixthBlock(false);
  //   },[]);

  function calculateTotalPrice(selectedInputs: string[]) {
    let totalPrice = 0;
  
    // Переменная, хранящая информацию об индивидуальном выборе
    let hasCustomOption = false;
  
    // Перебираем выбранные опции и считаем общую стоимость
    selectedInputs.forEach(input => {
      if (price[input]) {
        totalPrice += price[input];
  
        // Проверяем, выбрана ли опция "Индивидуальный" в сочетании с другими опциями
        if (input === 'Индивидуальный') {
          hasCustomOption = true;
        }
      }
    });
  
    // Если выбрана опция "Индивидуальный" в сочетании с другими опциями, изменяем общую стоимость
    if (hasCustomOption) {
      // Проверяем и добавляем стоимость в зависимости от выбранных опций
      if (selectedInputs.includes('Лендинг')) {
        totalPrice = 30000;
      } else if (selectedInputs.includes('Многостраничный')) {
        totalPrice = 90000;
      } else if (selectedInputs.includes('Магазин')) {
        totalPrice = 150000;
      } else if (selectedInputs.includes('Магазин Бот')) {
        totalPrice = 90000;
      } else if (selectedInputs.includes('Чат Бот')) {
        totalPrice = 60000;
      } else if (selectedInputs.includes('IOS & Android')) {
        totalPrice = 120000;
      } else if (selectedInputs.includes('VK mini App')) {
        totalPrice = 90000;
      }
    }
  
    return totalPrice;
  }
  

  // // Функция для расчета общей стоимости выбранных опций
  // function calculateTotalPrice(selectedInputs: string[]) {
  //   let totalPrice = 0;
  //   selectedInputs.forEach(input => {
  //     if (price[input]) {
  //       totalPrice += price[input];
  //     }
  //   });
  //   return totalPrice;
  // }
  // Вычисляем общую стоимость на основе выбранных опций
  const total = calculateTotalPrice(
    [...firstSelectedInputs, ...secondSelectedInputs, ...thirdSelectedInputs, ...fourthSelectedInputs]
  );

  console.log('TOTAL PRICE : ', total); 

  return (
    <div className={style['wrapper']}>
      <Header />
      <div className={style['form-wrapper']}>
        <h2 className={style['form-title']}>выберите желаемое</h2>
        {<p>{total}</p>}
        <form className={style['shop-form']}
        // onSubmit={handleSubmit}
        >

          <div className={style['first-radio-wrapper']}>
            <span className={style['first-wrapper']}>
              <label>шаблон
                <input className={style['radio']}
                  // id='Pattern'
                  id='Шаблон'
                  type='radio'
                  name='first-radio'
                  onClick={handleFirstInputChange}
                  onChange={isFirstInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
            </span>
            <span className={style['first-wrapper']}>
              <label>индивидуальный
                <input className={style['radio']}
                  // id='Custom'
                  id='Индивидуальный'
                  type='radio'
                  name='first-radio'
                  onClick={handleFirstInputChange}
                  onChange={isFirstInputChange}
                />
                <span className={style['custom-check']}></span>
              </label>
            </span>
          </div>

          {showSecondBlock && (
            <div className={style['seconde-radio-wrapper']}>
              <span className={style['first-wrapper']}>
                <label className={style['label']} >сайты
                  <input className={style['radio']}
                    // id='websites'
                    id='Сайты'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label >боты
                  <input className={style['radio']}
                    // id='telegramBot'
                    id='ТелеграмБот'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>приложения
                  <input className={style['radio']}
                    // id='applications'
                    id='Приложения'
                    type='radio'
                    name='seconde-radio'
                    onChange={handleSecondInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showThirdBlock && (
            <div className={style['first-site-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>лендинг
                  <input className={style['radio']}
                    // id='lending'
                    id='Лендинг'
                    type='radio'
                    name='site-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>многостраничный
                  <input className={style['radio']}
                    // id='multipage'
                    id='Многостраничный'
                    type='radio'
                    name='site-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>магазин
                  <input className={style['radio']}
                    // id='shop'
                    id='Магазин'
                    type='radio'
                    name='site-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showFourthBlock && (
            <div className={style['first-telegram-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>чат бот
                  <input className={style['radio']}
                    // id='chat-bot'
                    id='ЧатБот'
                    type='radio'
                    name='telegram-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>магазин бот
                  <input className={style['radio']}
                    // id='shop-bot'
                    id='МагазинБот'
                    type='radio'
                    name='telegram-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showFifthBlock && (
            <div className={style['first-app-wrapper']}>
              <span className={style['first-wrapper']}>
                <label>IOS & Android
                  <input className={style['radio']}
                    id='IOS_&_Andriod'
                    type='radio'
                    name='app-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['first-wrapper']}>
                <label>VK App
                  <input className={style['radio']}
                    id='VK_App'
                    type='radio'
                    name='app-radio'
                    onClick={handleOtherInputChange}
                    onChange={isThirdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}

          {showSixthBlock && (
            <div className={style['additional-wrapper']}>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check1']}>графику от иллюстратора
                  <input className={style['checkbox']}
                    // id="customImages"
                    id="Иллюстрации"
                    type='checkbox'
                    name='additional-first'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check2']}>индивидуальные иконки
                  <input className={style['checkbox']}
                    // id="customIcons"
                    id="Иконки"
                    type='checkbox'
                    name='additional-seconde'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check3']}> фотографии
                  <input className={style['checkbox']}
                    // id="photos"
                    id="Фотографии"
                    type='checkbox'
                    name='additional-therd'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
              <span className={style['addit-check-wrapper']}>
                <label className={style['additional-check4']}>СРОЧНО !!!
                  <input className={style['checkbox']}
                    // id="now"
                    id="Срочно!"
                    type='checkbox'
                    name='additional-fourth'
                    onChange={isFourdInputChange}
                  />
                  <span className={style['custom-check']}></span>
                </label>
              </span>
            </div>
          )}
          <div>
            {/* <h4>first radio:</h4>
          <ul>
            {firstSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>seconde radio:</h4>
          <ul>
            {secondSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>third radio:</h4>
          <ul>
            {thirdSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul>
          <h4>fourd checkbox:</h4>
          <ul>
            {fourthSelectedInputs.map((input, index) => (
              <li key={index}>{input}</li>
            ))}
          </ul> */}
            {<h3 className={style['total-select']}>ВЫБРАНО :
              <p className={style['total-select-text']}>{combinedString}</p>
            </h3>}
          </div>
          {<p>{total}</p>}
          <button className={style['form-submit']} type='submit'>добавить в корзину</button>
        </form>

      </div>
      <Footer />
    </div>
  )
}
