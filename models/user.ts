// const db = require ('../db')
// console.log("DB :  , " , db)
const bcrypt = require ('bcrypt')
const jwt = require ('jsonwebtoken')
import pool from '../db';
import { Request, Response } from 'express'; // Импорт типов Request и Response из Express
import { typeUser } from '../CLIENT/src/types'; // Подключаем тип typeUser из файла types.ts


/**
 * 
 * @route POST /api/user/register
 * @desc Регистрация
 * @access Public
 */

const Register = async (req: Request, res: Response): Promise<void> => {
  const { email, name, password } = req.body;

  if (!email || !password || !name) {
    res.status(400).json({ message: 'Пожалуйста, заполните обязательные поля' });
    return;
  }

  try {
    // Проверка наличия пользователя с таким email в базе данных
    const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
    const existingUser = await pool.query(checkUserQuery, [email]);

    if (existingUser.rows.length > 0) {
      res.status(400).json({ message: 'Пользователь с таким email уже существует' });
      return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Создание нового пользователя в базе данных
    const createUserQuery = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
    const newUser = await pool.query(createUserQuery, [name, email, hashedPassword]);

    const secret = process.env.JWT_SECRET;
    if (newUser.rows.length > 0 && secret) {
      const user = newUser.rows[0];
      res.status(201).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '100d' }), // Шифрование id пользователя
      });
    } else {
      res.status(400).json({ message: 'Не удалось создать пользователя' });
    }
  } catch (error) {
    console.error('Ошибка при регистрации пользователя:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};

const Login = async (req: Request, res: Response): Promise<void> => {
  console.log('SERVER LOGIN: ');
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Пожалуйста, заполните поля, они обязательны' });
  }

  try {
    const userQuery = 'SELECT * FROM users WHERE email = $1';
    const userResult = await pool.query(userQuery, [email]);

    if (userResult.rows.length === 0) {
      return res.status(400).json({ message: 'Неверный логин или пароль' });
    }

    const user = userResult.rows[0];
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    const secret = process.env.JWT_SECRET;
    if (isPasswordCorrect && secret) {
      res.status(200).json({
        id: user.id,
        email: user.email,
        name: user.name,
        token: jwt.sign({ id: user.id }, secret, { expiresIn: '1d' }), // Шифрование id пользователя
      });
    } else {
      res.status(400).json({ message: 'Неверный логин или пароль' });
    }
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};



const Current = async (req: Request, res: Response): Promise<void> => {
  // Используем тип typeUser для объекта req.user
  const user: typeUser = req.user as typeUser; // Предполагается, что req.user имеет тип typeUser

  return res.status(200).json(user);
};


module.exports = {
  Login,
  Register,
  Current
}