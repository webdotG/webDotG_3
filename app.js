const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();


// const pool = require('./db'); // Путь к вашему файлу для подключения к базе данных
// console.log('POOL APP JS SERVER : ', pool)

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

});

module.exports = app;

