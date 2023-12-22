// db.js

const { Pool } = require('pg');

const pool = new Pool({
  user: 'kirill',
  host: '178.67.245.227',
  database: 'kyrill',
  password: 'KirillGrantWebDotG250125',
  port: 11002,
});

// Выполнение запроса к базе данных
pool.query('SELECT * FROM webdotg.users', (err, result) => {
  if (err) {
    console.error('Ошибка выполнения запроса:', err);
  } else {
    console.log('Результаты запроса:', result.rows);
    // Обработка полученных данных
    // Например, здесь можно вывести результаты на консоль
  }
  
  // Закрываем подключение к базе данных после выполнения запроса
  pool.end();
});


module.exports = pool;

