const pool = require('../db');

const AddUser = async (req, res) => {
  try {
    const { name, dateOfBirth } = req.body;

    const userId = req.userId;
    // Получение информации о пользователе по userId
    const userQuery = `
  SELECT name, email FROM webdotg.users WHERE id = $1;
  `;
    const userValues = [userId];
    const userResult = await pool.query(userQuery, userValues);

    if (userResult.rows.length === 0) {
      throw new Error('Пользователь не найден');
    }

    

    // SQL запрос для вставки нового пользователя в базу данных
    const insertUserQuery = `
      INSERT INTO webdotg.community (name, date_of_birth, created_by_user_id)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [name, dateOfBirth, userId];
    const result = await pool.query(insertUserQuery, values);

    // Проверка успешности выполнения запроса и возвращение созданного пользователя
    if (result.rows.length > 0) {
      const newUser = result.rows[0];
      res.status(201).json({ message: 'Пользователь успешно создан', user: newUser });
    } else {
      throw new Error('Не удалось создать пользователя');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Не удалось создать пользователя' });
  }
};

const GetAllUsers = async (req, res) => {
  try {
    const getAllUsersQuery = `
      SELECT * FROM webdotg.community;
    `;
  
    const allUsers = await pool.query(getAllUsersQuery);
  
    // Проверка успешности выполнения запроса и возвращение списка пользователей
    if (allUsers.rows.length > 0) {
      const usersList = allUsers.rows;
      res.status(200).json({ message: 'Список пользователей успешно получен', users: usersList });
    } else {
      res.status(404).json({ message: 'Пользователи не найдены' });
    }
  } catch (error) {
    console.error('Ошибка при получении списка пользователей:', error);
    res.status(500).json({ message: 'Внутренняя ошибка сервера' });
  }
};
 
 




module.exports = { AddUser, GetAllUsers };