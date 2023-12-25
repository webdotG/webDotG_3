const { Pool } = require('pg');
require('dotenv').config(); // Подключаем пакет для чтения переменных среды из файла .env
// console.log('POOL DB JS SERVER : ', Pool)

const pool = new Pool({
  user: 'kirill',
  host: '178.67.245.227',
  database: 'kyrill',
  password: 'KirillGrantWebDotG250125',
  port: 11002,
})

pool.query('SELECT NOW()').then() //x => console.log(x)
// pool.query('SELECT NOW()', function (err, rows) {
//   console.log(rows);
// });

module.exports = pool;
