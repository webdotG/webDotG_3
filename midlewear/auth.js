const jwt = require('jsonwebtoken');
const pool = require('../db'); // Подключение к базе данных с помощью pool

const Auth = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log('TOKEN', token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // Пример запроса на получение пользователя по его ID
    const getUserQuery = 'SELECT * FROM users WHERE id = $1';
    const userResult = await pool.query(getUserQuery, [userId]);

    if (userResult.rows.length === 0) {
      throw new Error('Пользователь не найден'); // Если пользователь не найден, генерируем ошибку
    }

    req.user = userResult.rows[0]; // Добавляем информацию о пользователе в объект req

    next(); // Передаем управление следующему обработчику маршрута

  } catch (err) {
    res.status(401).json({ message: 'Не авторизован' });
  }
};

module.exports = { Auth };
