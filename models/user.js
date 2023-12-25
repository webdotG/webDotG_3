const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');
const { Auth } = require('../midlewear/auth');

/**
 * 
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 */

const Register = async (req, res) => {
  const { email, name, password } = req.body;

  if (!email || !password || !name) {
    return res.status(400).json({ message: 'Пожалуйста, заполните обязательные поля' });
  }

  try {
    // Проверка наличия пользователя с таким email в базе данных
    const checkUserQuery = 'SELECT * FROM webdotg.users WHERE email = $1';
    const existingUser = await pool.query(checkUserQuery, [email]);

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создание нового пользователя в базе данных
    const createUserQuery = 'INSERT INTO webdotg.users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const newUser = await pool.query(createUserQuery, [name, email, hashedPassword]);

    const secret = process.env.JWT_SECRET;
    if (newUser.rows.length > 0 && secret) {
      const user = newUser.rows[0];
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '30d' }), // Шифрование id пользователя
      });
      console.log("MODELS REGISTER USER : ", user)
    } else {
      res.status(400).json({ message: 'Не удалось создать пользователя' });
    }

    // В этом месте, после успешной обработки запроса, добавьте оператор return с пустым значением
    return res;

  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

const Login = async (req, res) => {

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Пожалуйста, заполните поля, они обязательны' });
  }

  try {
    const userQuery = 'SELECT * FROM webdotg.users WHERE email = $1';
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const user = userResult.rows[0];
    console.log("MODELS LOGIN PASWORD , USER : ", password, user)
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    const secret = process.env.JWT_SECRET;
    if (isPasswordCorrect && secret) {
      return res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' }), // Шифрование id пользователя
      });
    } else {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
    return res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

const Current = async (req, res) => {
  Auth(req, res, async () => {
    const user = req.user; // Здесь будет информация о пользователе из вашего middleware
    console.log("MODELS CURRENT USER : ", user)
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(401).json({ message: 'Пользователь не авторизован' });
    }
  });
};

module.exports = {
  Register,
  Login,
  Current
};
