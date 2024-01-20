//winston для логирования
const winston = require('winston');

//импортирую компоненты из winston
const { createLogger, transports, format } = winston;

//определяю уровни логирования и их порядок
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4,
};

//определяю функцию для выбора уровня в зависимости от окружения
const level = () => {
  const env = process.env.NODE_ENV || 'development';
  const isDevelopment = env === 'development';
  return isDevelopment ? 'debug' : 'info';
};

//цвета для различных уровней логирования
const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white',
};

//добавляю определенные цвета к уровням логирования
winston.addColors(colors);

//формат для вывода в консоль и в файл
const formatForConsoleAndFile = format.combine(
  format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  format.colorize({ all: true }),
  format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
);

//создаю транспорты для вывода в консоль и в файл
const consoleTransport = new transports.Console();
const fileTransportError = new transports.File({
  filename: 'logs/error.log',
  level: 'error',
});
const fileTransportAll = new transports.File({ filename: 'logs/all.log' });

//cоздаю логгер с настройками
const winstonLogger = createLogger({
  level: level(),
  levels,
  format: formatForConsoleAndFile,
  transports: [consoleTransport, fileTransportError, fileTransportAll],
});

// Middleware для логирования с использованием Winston
const logMiddleware = (req, res, next) => {
  const logMessage = `${req.method} ${req.url}`;
  winstonLogger.info(logMessage);
  next();
};

// Экспортируем логгер и middleware для использования в других частях приложения
module.exports = { winstonLogger, logMiddleware };
