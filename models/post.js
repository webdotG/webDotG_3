const pool = require('../db');

const Create = async (req, res) => {
  try {
    const { title, text, tags } = req.body;
    const userId = req.userId; 
    
    // SQL запрос для вставки новой статьи в базу данных
    const insertQuery = `
      INSERT INTO webdotg.posts (title, text, tags, user_id, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      RETURNING *;
    `;
    const values = [title, text, tags, userId];

    const result = await pool.query(insertQuery, values);

    // Проверяем успешность выполнения запроса и возвращаем созданную статью
    if (result.rows.length > 0) {
      const newPost = result.rows[0];
      res.status(201).json({ message: 'Статья успешно создана', post: newPost });
    } else {
      throw new Error('Не удалось создать статью');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Не удалось создать статью' });
  }
};

module.exports = {
  Create
};
