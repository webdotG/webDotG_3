const pool = require('../db');

const GetAll = async (req, res) => {
  try {

    // SQL-запрос для выборки всех постов из таблицы
    const query = 'SELECT * FROM webdotg.posts';

    // Выполнение запроса и получение результатов
    const { rows } = await pool.query(query);

    res.json(rows)
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Не удалось получть все посты' });
  }
}

const Create = async (req, res) => {
  try {
    const { title, text, tags } = req.body;
    const userId = req.userId;

    // SQL запрос для вставки новой статьи в базу данных
    const insertQuery = `
      INSERT INTO webdotg.posts (title, text, tags, user_id, created_at, updated_at)
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      RETURNING *;
    `;
    const values = [title, text, tags, userId];

    const result = await pool.query(insertQuery, values);

    // Проверяем успешность выполнения запроса и возвращаем созданную статью
    if (result.rows.length > 0) {
      const newPost = result.rows[0];
      res.status(201).json({ message: 'Пост успешно создан', post: newPost });
    } else {
      throw new Error('Не удалось создать пост');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Не удалось создать пост' });
  }
};

module.exports = {
  GetAll,
  Create,

};