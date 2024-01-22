const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const cors = require('cors');
const { winstonLogger, logMiddleware, handleCorsError } = require('./winstonConfig');

const app = express();

// Настройка CORS для конкретных маршрутов
const corsOptions = {
  origin: '*',
  methods: 'GET, POST, PUT, DELETE',
  allowedHeaders: 'Content-Type',
};
app.use(cors(corsOptions))

app.use(handleCorsError);
app.use(logMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


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


// Загрузка SSL-сертификатов из файловой системы
// const privateKey = fs.readFileSync('/etc/ssl/webdotg.ru/webdotg.ru.key.', 'utf8');
// const certificate = fs.readFileSync('/etc/ssl/webdotg.ru/webdotg.ru.crt', 'utf8');
// const ca = fs.readFileSync('/etc/ssl/webdotg.ru/webdotg.ru.crt/webdotg.ru_ca.crt.', 'utf8');

// const credentials = { key: privateKey, cert: certificate, ca: ca };

// const httpsServer = https.createServer(credentials, app);

const PORT = 1111 //process.env.PORT  ; 


// httpsServer.listen(PORT, () => {
  // winstonLogger.info(`Сервер Express работает по протоколу HTTPS на порту ${PORT}`);
// });


app.listen(PORT, () => {
  winstonLogger.info(`Сервер работает на порту ${PORT}`);
//   // winstonLogger.info("This is a info log");
//   // winstonLogger.debug("This is a debug log");
//   // winstonLogger.error("This is an error log");
//   // winstonLogger.warn("This is a warn log");
//   // winstonLogger.http("This is a http log");
});

module.exports = app;

