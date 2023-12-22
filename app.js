const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();


const pool = require('./db'); // Путь к вашему файлу для подключения к базе данных


const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 3000; // Заменила process.env.PORT на 3000 по умолчанию

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);


// // Пример использования подключения к базе данных в вашем Express-приложении
// app.get('/users', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM users');
//     res.json(result.rows);
//   } catch (error) {
//     console.error('Ошибка выполнения запроса:', error);
//     res.status(500).json({ error: 'Ошибка сервера' });
//   }
// });
//   // Вызовите функцию получения пользователей после запуска сервера
//   getUsers();
});

module.exports = app;

