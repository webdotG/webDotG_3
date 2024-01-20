const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
// const morganLogger = require('morgan');
const { winstonLogger, logMiddleware } = require('./winstonConfig');




const app = express();

app.use(logMiddleware);
// app.use(morganLogger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Настройка CORS для конкретных маршрутов
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions))
app.use('/api/user', cors(corsOptions), require('./routes/user'));
app.use('/api/posts', cors(corsOptions), require('./routes/post'))
app.use('/api/tags', cors(corsOptions), require('./routes/tag'))
app.use('/api/cart', cors(corsOptions), require('./routes/cart'));
app.use('/api/community', cors(corsOptions), require('./routes/community'))

//если запрос не прошёл ни по одному роуту оаисаных выше то express отдаст просто статичный файл в папке dist
app.use('/', express.static(path.join(__dirname, './CLIENT/dist')));

//если соовсем ни чего не сработало то просто отдаст index.html
//своеобразная версия мини NGINX
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './CLIENT/dist/index.html'));
});


const PORT = 1111 //process.env.PORT  ; 
app.listen(PORT, () => {
  winstonLogger.info(`Сервер работает на порту ${PORT}`);

});

module.exports = app;

