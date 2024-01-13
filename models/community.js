const pool = require('../db');


const AddUser = async (req, res) => {
  console.log('ADD USER')
  const pool = require('../db');

const AddUser = async (req, res) => {
  try {
    const { userName } = req.body; // Предполагается, что имя пользователя передается в теле запроса

    // Проверка, что имя пользователя передано
    if (!userName) {
      return res.status(400).json({ error: 'Имя пользователя не предоставлено.' });
    }

    // SQL-запрос для добавления пользователя
    const addUserQuery = `
      INSERT INTO webdotg.community (name)
      VALUES ($1)
      RETURNING *;
    `;

    const result = await pool.query(addUserQuery, [userName]);

    // Проверка, что результат запроса не пуст
    if (result.rows.length === 0) {
      return res.status(500).json({ error: 'Не удалось добавить пользователя.' });
    }

    // Отправка ответа с добавленным пользователем
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error('Ошибка при добавлении пользователя:', error);

    // Отправка ответа об ошибке сервера
    res.status(500).json({ error: 'Внутренняя ошибка сервера.' });
  }
};

module.exports = { AddUser };

}

const GetAll = async (req, res) => {
  console.log('get all')
}



module.exports = { AddUser ,GetAll };