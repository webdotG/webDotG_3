const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(logger('dev'));
// const corsOptions = {
//   origin: 'http://localhost:5173', // Замените на URL вашего фронтенд-приложения
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true,
//   optionsSuccessStatus: 200 // Некоторые браузеры (старые версии IE) могут требовать этот флаг
// };
// app.use(cors(corsOptions));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/user', require('./routes/user'));

const PORT = process.env.PORT || 3000; // Заменил process.env.PORT на 3000 по умолчанию
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

});

module.exports = app;

