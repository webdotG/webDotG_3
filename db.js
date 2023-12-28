const { Pool } = require('pg');
require('dotenv').config(); // Подключаем пакет для чтения переменных среды из файла .env
// console.log('POOL DB JS SERVER : ', process.env)

const pool = new Pool({
  user: 'kirill',//process.env.USER,
  host: '178.67.245.227',//process.env.HOST,
  database: 'kyrill',//process.env.DATABASE,
  password: 'KirillGrantWebDotG250125',//process.env.PASSWORD,
  port: 11002//process.env.PORT,
})

pool.query('SELECT NOW()').then() //x => console.log(x)
// pool.query('SELECT NOW()', function (err, rows) {
//   console.log(rows);
// });

module.exports = pool;
