const winston = require('winston');
const morgan = require('morgan');
const { createLogger, transports, format } = winston;

//определяю уровни логирования и их порядок
const levels = {
  info: 0,
  debug: 1,
  error: 2,
  warn: 3,
  http: 4,
  
};

//функция для выбора уровня в зависимости от окружения
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
};

//цвета для уровней
const colors = {
  info: 'green',
  debug: 'black',
  error: 'red',
  warn: 'yellow',
  http: 'magenta',
};

//добавляю цвета к уровням
winston.addColors(colors);

//формат для вывода в консоль и в файл
const formatForConsoleAndFile = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.colorize({ all: true }),
  format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,//  [${info.filename}:${info.line}] чтоб кроме сообщения еще знать строку и файл
  ),
);

//транспорты для вывода в консоль
const consoleTransport = new transports.Console();
//и в файл
const fileTransportError = new transports.File({
  filename: 'logs/error.log',
  level: 'error',
});
const fileTransportAll = new transports.File({ filename: 'logs/all.log' });

//логгер с настройками
const createWinstonLogger = () => {
  return createLogger({
    level: level(),
    levels,
    format: format.combine(
      format.label({ label: '[LOGGER]' }),
      format.metadata({ fillExcept: ['message', 'level', 'timestamp', 'label'] }),
      formatForConsoleAndFile
    ),
    transports: [consoleTransport, fileTransportError, fileTransportAll],
  });
};
const winstonLogger = createWinstonLogger();

const logMiddleware = morgan((tokens, req, res) => {
  return [
    `\x1b[33m${tokens.url(req, res)}\x1b[0m`,    // цвет yellow 
    `\x1b[32m${tokens.status(req, res)}\x1b[0m`, // цвет green 
    tokens.res(req, res, 'content-type'),
    tokens.res(req, res, 'content-length'),   
    '-',
  ].join(' ');
}, {
  stream: { write: (message) => winstonLogger.http(message) },
});

// Middleware для обработки ошибок CORS
const handleCorsError = (err, req, res, next) => {
  if (err.name === 'CorsError') {
    winstonLogger.error(`CORS Error: ${err.message}`);
    res.status(500).json({ error: 'CORS Error' });
  } else {
    next(err);
  }
};

module.exports = { winstonLogger, logMiddleware, handleCorsError };
