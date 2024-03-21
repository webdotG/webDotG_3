const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const { winstonLogger, logMiddleware, handleCorsError } = require('./winstonConfig');

const app = express();

// app.options('*', cors());
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(handleCorsError);
app.use(logMiddleware);

app.use('/api/user', require('./routes/user'));
app.use('/api/posts', require('./routes/post'))
app.use('/api/tags', require('./routes/tag'))
app.use('/api/cart', require('./routes/cart'));
app.use('/api/community', require('./routes/community'))

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
//   // winstonLogger.info("This is a info log");
//   // winstonLogger.debug("This is a debug log");
//   // winstonLogger.error("This is an error log");
//   // winstonLogger.warn("This is a warn log");
//   // winstonLogger.http("This is a http log");
});

module.exports = app;

