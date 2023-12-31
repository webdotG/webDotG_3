const { Pool } = require('pg');
require('dotenv').config(); // Подключаем пакет для чтения переменных среды из файла .env
// console.log('POOL DB JS SERVER : ', process.env)

const pool = new Pool({
  user: import.meta.env.VITE_USER,
  host: import.meta.env.VITE_HOST,
  database: import.meta.env.VITE_DATABASE,
  password: import.meta.env.VITE_PASSWORD,
  port: parseInt(import.meta.env.VITE_PORT)
})

pool.query('SELECT NOW()').then() //x => console.log(x)
// pool.query('SELECT NOW()', function (err, rows) {
//   console.log(rows);
// });

module.exports = pool;
