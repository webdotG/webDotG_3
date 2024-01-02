const jwt = require('jsonwebtoken');
const pool = require('../db'); // Подключение к базе данных с помощью pool

const Auth = async (req, res, next) => {
  try {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');
    console.log('MIDLEWEAR AUTH TOKEN : ', token);
    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
      console.log('MIDLEWEAR AUTH DECODED JWT : ', decoded);
    } catch (decodeErr) {
      if (decodeErr.name === 'TokenExpiredError') {
        // Обработка истекшего токена
        console.error('TOKEN EXPIRED : ', decodeErr.message);
        throw new Error('Срок действия токена истек');
      } else {
        // Обработка других ошибок при декодировании
        console.error('ERROR DECODING TOKEN : ', decodeErr.message);
        throw new Error('Ошибка декодирования токена');
      }
    }
    
    const userId = decoded.id;
    // console.log('MIDLEWEAR AUTH USER ID : ', userId);

    // Пример запроса на получение пользователя по его ID
    const getUserQuery = 'SELECT * FROM webdotg.users WHERE id = $1';
    // console.log('MIDLEWEAR AUTH GET USER QUERY : ', getUserQuery);

    const userResult = await pool.query(getUserQuery, [userId]);
    // console.log('MIDLEWEAR AUTH USER RESULT : ', userResult);

    if (userResult.rows.length === 0) {
      throw new Error('Пользователь не найден'); // Если пользователь не найден, генерируем ошибку
    }

    req.user = userResult.rows[0]; // Добавляем информацию о пользователе в объект req

    next() // Передаем управление следующему обработчику маршрута

  } catch (err) {
    res.status(401).json({ message: 'Не авторизован' });
  }
};

module.exports =  Auth ;
// module.exports = (req, res, next) => {
//   Auth(req, res, next).catch(next);
// };
