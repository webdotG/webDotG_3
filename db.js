const { Pool } = require('pg');
require('dotenv').config(); // Подключаем пакет для чтения переменных среды из файла .env
// console.log('POOL DB JS SERVER : ', process.env)

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
})
// console.log("POOL IMPORT>META>ENV>VITE_USER : ", process.env.DB_USER) 

pool.query('SELECT NOW()').then() //x => console.log(x)
// pool.query('SELECT NOW()', function (err, rows) {
//   console.log(rows);
// });

module.exports = pool;
