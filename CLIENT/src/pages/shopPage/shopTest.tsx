
// const input1 = document.getElementById('1') as HTMLInputElement | null;
// const input2 = document.getElementById('2') as HTMLInputElement | null;
// const input3 = document.getElementById('3') as HTMLInputElement | null;
// const input4 = document.getElementById('4') as HTMLInputElement | null;
// const input5 = document.getElementById('5') as HTMLInputElement | null;
// if (input1) {
//   console.log(`Input с id = 1: ${input1.checked ? 'чекнут' : 'не чекнут'}`);
// }
// if (input2) {
//   console.log(`Input с id = 2: ${input2.checked ? 'чекнут' : 'не чекнут'}`);
// }
// if (input3) {
//   console.log(`Input с id = 3: ${input3.checked ? 'чекнут' : 'не чекнут'}`);
// }
// if (input4) {
//   console.log(`Input с id = 4: ${input4.checked ? 'чекнут' : 'не чекнут'}`);
// }
// if (input5) {
//   console.log(`Input с id = 5: ${input5.checked ? 'чекнут' : 'не чекнут'}`);
// }

    // console.log('EVENT : ', event);
    // const { id, checked } = event.target;
    // console.log(`INPUT ID 1 :  = ${1}: ${checked ? 'checked' : 'nonChecked'}`);
    // console.log(`INPUT ID 2 :  = ${2}: ${checked ? 'checked' : 'nonChecked'}`);
    // console.log(`INPUT ID :  = ${id}: ${checked} ${checked ? 'checked' : 'nonChecked'}`);
    // console.log(`INUPT ID EVENT :  = ${id}:`, event.target);
    // setSelectedItems(prevItems => {
    //   const updatedItems = checked
    //     ? [...prevItems, id]
    //     : prevItems.filter(item => item !== id);

    //   console.log('Состояние массива selectedItems:', updatedItems);
    //   return updatedItems;
    // });


// type typeItem = {
//   id: string;
//   name: string;
//   price: number;
//   block: string;
// };

// const testObj: typeItem[] = [

//   { id: '1', name: "Шаблон", price: 1, block: 'first' },
//   { id: '2', name: "Индивидуальный", price: 2, block: 'first' },

//   { id: '3', name: "Сайты", price: 3, block: 'seconde' },
//   { id: '4', name: "Телеграм Бот", price: 4, block: 'seconde' },
//   { id: '5', name: "Приложения", price: 5, block: 'seconde' },

//   { id: '6', name: 'Лендинг', price: 6, block: 'third' },
//   { id: '7', name: 'Многостраничный', price: 8, block: 'third' },
//   { id: '8', name: 'Магазин', price: 9, block: 'third' },

//   { id: '9', name: 'ЧатБот', price: 10, block: 'fourth' },
//   { id: '10', name: 'Магазин Бот', price: 11, block: 'fourth' },

//   { id: '11', name: 'IOS & Andriod', price: 12, block: 'sixsth' },
//   { id: '12', name: 'VK App', price: 13, block: 'sixsth' },

//   { id: '13', name: 'Иллюстрации', price: 14, block: 'seventh' },
//   { id: '14', name: 'Иконки', price: 15, block: 'seventh' },
//   { id: '15', name: 'Фотографии', price: 16, block: 'seventh' },
//   { id: '16', name: 'Срочно!', price: 17, block: 'seventh' },
// ];











// import Header from '../../components/header/header'
// import Footer from '../../components/footer/footer'
// import { addToCart } from '../../slices/cart/cartSlice';
// import { useAppDispatch } from '../../hooks';


// const testObj = [

//   { id: 1, name: "Шаблон", price: 1, block: 'first' },
//   { id: 2, name: "Индивидуальный", price: 2, block: 'first' },

//   { id: 3, name: "Сайты", price: 3, block: 'seconde' },
//   { id: 4, name: "Телеграм Бот", price: 4, block: 'seconde' },
//   { id: 5, name: "Приложения", price: 5, block: 'seconde' },

//   { id: 6, name: 'Лендинг', price: 6, block: 'third' },
//   { id: 7, name: 'Многостраничный', price: 8, block: 'third' },
//   { id: 8, name: 'Магазин', price: 9, block: 'third' },

//   { id: 9, name: 'ЧатБот', price: 10, block: 'fourth' },
//   { id: 10, name: 'Магазин Бот', price: 11, block: 'fourth' },

//   { id: 12, name: 'IOS & Andriod', price: 12, block: 'sixsth' },
//   { id: 13, name: 'VK App', price: 13, block: 'sixsth' },

//   { id: 14, name: 'Иллюстрации', price: 14, block: 'seventh' },
//   { id: 15, name: 'Иконки', price: 15, block: 'seventh' },
//   { id: 16, name: 'Фотографии', price: 16, block: 'seventh' },
//   { id: 17, name: 'Срочно!', price: 17, block: 'seventh' },
// ];


  // return (

  //   <div className={style['wrapper']}>

  //     <Header />
  //     <div className={style['form-wrapper']}>
  //       <h2 className={style['form-title']}>выберите желаемое</h2>
  //       <form className={style['shop-form']}
  //       >
  //         <div className={style['first-radio-wrapper']}>
  //           <span className={style['first-wrapper']}>

  //           </span>
  //           <span className={style['first-wrapper']}>
  //             <label>индивидуальный
  //               <input className={style['radio']}
  //                 // id='Custom'
  //                 // id='Индивидуальный'
  //                 id={testObj_blok.first_blok.find(element => element.name === 'Индивидуальный')?.id.toString()}
  //                 type='radio'
  //                 name='first-radio'
  //                 onClick={handleItemClick}
  //               />
  //               <span className={style['custom-check']}></span>
  //             </label>
  //             <label>шаблон
  //               <input className={style['radio']}
  //                 // id='Print'
  //                 // id='Шаблон'
  //                 id={testObj_blok.first_blok.find(element => element.name === 'Шаблон')?.id.toString()}
  //                 type='radio'
  //                 name='first-radio'
  //               />
  //               <span className={style['custom-check']}></span>
  //             </label>
  //           </span>
  //         </div>

  //         {(
  //           <div className={style['seconde-radio-wrapper']}>
  //             <span className={style['first-wrapper']}>
  //               <label className={style['label']} >сайты
  //                 <input className={style['radio']}
  //                   // id='websites'
  //                   // id='Сайты'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Сайты')?.id.toString()}
  //                   type='radio'
  //                   name='seconde-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label >боты
  //                 <input className={style['radio']}
  //                   // id='telegramBot'
  //                   // id='ТелеграмБот'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Телеграм Бот')?.id.toString()}
  //                   type='radio'
  //                   name='seconde-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label>приложения
  //                 <input className={style['radio']}
  //                   // id='applications'
  //                   // id='Приложения'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Приложения')?.id.toString()}
  //                   type='radio'
  //                   name='seconde-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //           </div>
  //         )}

  //         {(
  //           <div className={style['first-site-wrapper']}>
  //             <span className={style['first-wrapper']}>
  //               <label>лендинг
  //                 <input className={style['radio']}
  //                   // id='lending'
  //                   // id='Лендинг'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Лендинг')?.id.toString()}
  //                   type='radio'
  //                   name='site-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label>многостраничный
  //                 <input className={style['radio']}
  //                   // id='multipage'
  //                   // id='Многостраничный'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Многостраничный')?.id.toString()}
  //                   type='radio'
  //                   name='site-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label>магазин
  //                 <input className={style['radio']}
  //                   // id='shop'
  //                   // id='Магазин'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Магазин')?.id.toString()}
  //                   type='radio'
  //                   name='site-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //           </div>
  //         )}

  //         {(
  //           <div className={style['first-telegram-wrapper']}>
  //             <span className={style['first-wrapper']}>
  //               <label>чат бот
  //                 <input className={style['radio']}
  //                   // id='chat-bot'
  //                   // id='ЧатБот'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'ЧатБот')?.id.toString()}
  //                   type='radio'
  //                   name='telegram-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label>магазин бот
  //                 <input className={style['radio']}
  //                   // id='shop-bot'
  //                   // id='МагазинБот'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'МагазинБот')?.id.toString()}
  //                   type='radio'
  //                   name='telegram-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //           </div>
  //         )}

  //         {(
  //           <div className={style['first-app-wrapper']}>
  //             <span className={style['first-wrapper']}>
  //               <label>IOS & Android
  //                 <input className={style['radio']}
  //                   // id='IOS_&_Andriod'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'IOS_&_Andriod')?.id.toString()}
  //                   type='radio'
  //                   name='app-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['first-wrapper']}>
  //               <label>VK App
  //                 <input className={style['radio']}
  //                   // id='VK_App'
  //                   id={testObj_blok.first_blok.find(element => element.name === 'VK_App')?.id.toString()}
  //                   type='radio'
  //                   name='app-radio'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //           </div>
  //         )}

  //         {(
  //           <div className={style['additional-wrapper']}>
  //             <span className={style['addit-check-wrapper']}>
  //               <label className={style['additional-check1']}>графику от иллюстратора
  //                 <input className={style['checkbox']}
  //                   // id="customImages"
  //                   // id="Иллюстрации"
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Иллюстрации')?.id.toString()}
  //                   type='checkbox'
  //                   name='additional-first'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['addit-check-wrapper']}>
  //               <label className={style['additional-check2']}>индивидуальные иконки
  //                 <input className={style['checkbox']}
  //                   // id="customIcons"
  //                   // id="Иконки"
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Иконки')?.id.toString()}
  //                   type='checkbox'
  //                   name='additional-seconde'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['addit-check-wrapper']}>
  //               <label className={style['additional-check3']}> фотографии
  //                 <input className={style['checkbox']}
  //                   // id="photos"
  //                   // id="Фотографии"
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Фотографии')?.id.toString()}
  //                   type='checkbox'
  //                   name='additional-therd'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //             <span className={style['addit-check-wrapper']}>
  //               <label className={style['additional-check4']}>СРОЧНО !!!
  //                 <input className={style['checkbox']}
  //                   // id="now"
  //                   // id="Срочно!"
  //                   id={testObj_blok.first_blok.find(element => element.name === 'Срочно!')?.id.toString()}
  //                   type='checkbox'
  //                   name='additional-fourth'
  //                 />
  //                 <span className={style['custom-check']}></span>
  //               </label>
  //             </span>
  //           </div>
  //         )}
  //         <div>
  //           <h3 className={style['total-select']}>ВЫБРАНО :
  //             {/* <p className={style['total-select-text']}>{combinedString}</p> */}
  //           </h3>
  //         </div>
  //         <button className={style['form-submit']}
  //           type='submit' />
  //       </form>

  //     </div>
  //     <Footer />
  //   </div>
  // )


  //////////////////////////////////////////////////////////
  {/* <span className={style['block-wrapper']}>
  <label>
    <input className={style['radio']}
      id=''
      type='radio'
      name='first-radio'
    />
    <span className={style['custom-check']}></span>
  </label>
</span> */}