const mysql = require('mysql2');

// Создание пула соединений
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'dps_db',
  password: '123'
});

module.exports = pool.promise();
const express = require('express');
const db = require('./database');

const app = express();
const port = 3306;

app.get('/abonents', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM abonent');
    res.json(rows);
  } catch (error) {
    console.error('Ошибка при получении данных из базы:', error);
    res.status(500).send('Ошибка на сервере');
  }
});

app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});