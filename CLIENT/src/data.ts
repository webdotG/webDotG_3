export interface Block {
  id: number;
  name: string;
  price: number;
}

export interface TestObject {
  first_blok: Block[];
  seconde_blok: Block[];
  third_block: Block[];
  fourth_block: Block[];
  fifth_block: Block[];
  sixth_block: Block[];
}

export const testObj_blok: TestObject = {
  first_blok: [
    { id: 1, name: "Шаблон", price: 1 },
    { id: 2, name: "Индивидуальный", price: 2 }
  ],
  seconde_blok: [
    { id: 3, name: "Сайты", price: 3 },
    { id: 4, name: "Телеграм Бот", price: 4 },
    { id: 5, name: "Приложения", price: 5 }
  ],
  third_block: [
    { id: 6, name: 'Лендинг', price: 6 },
    { id: 7, name: 'Многостраничный', price: 8 },
    { id: 8, name: 'Магазин', price: 9 },
  ],
  fourth_block: [
    { id: 9, name: 'ЧатБот', price: 10 },
    { id: 10, name: 'Магазин Бот', price: 11 },
  ],
  fifth_block: [
    { id: 12, name: 'IOS & Andriod', price: 12 },
    { id: 13, name: 'VK App', price: 13 },
  ],
  sixth_block: [
    { id: 14, name: 'Иллюстрации', price: 14 },
    { id: 15, name: 'Иконки', price: 15 },
    { id: 16, name: 'Фотографии', price: 16 },
    { id: 17, name: 'Срочно!', price: 17 },
  ]
};


//00000000000000000000000000000000000000000000000000000000000000000000000000000000000000
// const PRICE = [
//   { id: 1, name: 'Шаблон', price: 1 },
//   { id: 2, name: 'Индивидуальный', price: 2 },
//   { id: 3, name: 'Сайты', price: 3 },
//   { id: 4, name: 'ТелеграмБот', price: 4 },
//   { id: 5, name: 'Приложения', price: 5 },
//   { id: 6, name: 'Лендинг', price: 6 },
//   { id: 7, name: 'Многостраничный', price: 8 },
//   { id: 8, name: 'Магазин', price: 9 },
//   { id: 9, name: 'ЧатБот', price: 10 },
//   { id: 10, name: 'Магазин Бот', price: 11 },
//   { id: 12, name: 'IOS & Andriod', price: 12 },
//   { id: 13, name: 'VK App', price: 13 },
//   { id: 14, name: 'Иллюстрации', price: 14 },
//   { id: 15, name: 'Иконки', price: 15 },
//   { id: 16, name: 'Фотографии', price: 16 },
//   { id: 17, name: 'Срочно!', price: 17 },
// ]
// console.log("SRC shopPge PRICE Array obj id name price : ", PRICE);

// // Преобразование PRICE в массив объектов
// const products = Object.entries(price).map(([name, price], index) => ({
//   id: index + 1,
//   name,
//   price,
// }));

// console.log(products);
