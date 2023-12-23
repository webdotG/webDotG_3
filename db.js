const { Pool } = require('pg');
require('dotenv').config(); // Подключаем пакет для чтения переменных среды из файла .env

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Установите это значение в true, если вы используете самоподписанный сертификат SSL
  },
});

module.exports = pool;

// Опция rejectUnauthorized является параметром настройки для SSL-соединений в приложениях, использующих базы данных PostgreSQL. Она связана с проверкой подлинности SSL-сертификатов сервера базы данных.

// Когда вы устанавливаете соединение с базой данных, основанной на PostgreSQL, по защищенному протоколу SSL (например, при доступе к базе данных через HTTPS), сервер базы данных предоставляет свой SSL-сертификат для проверки подлинности. Это обычно происходит для обеспечения безопасного и защищенного обмена данными между клиентом и сервером.

// Параметр rejectUnauthorized определяет, следует ли отклонять соединение с сервером базы данных, если его SSL-сертификат не прошел проверку подлинности. Когда установлено значение true, если сертификат не может быть проверен (например, из-за недействительного сертификата), соединение будет отклонено, и приложение не сможет подключиться к базе данных. Установка значения в false позволяет соединению быть установленным даже в случае, если сертификат не может быть проверен.

// Однако, установка rejectUnauthorized в false уменьшает уровень безопасности, так как не требует проверки подлинности SSL-сертификата. В производственной среде рекомендуется использовать настоящий, доверенный SSL-сертификат и устанавливать rejectUnauthorized в true, чтобы обеспечить безопасное и надежное соединение с базой данных.
