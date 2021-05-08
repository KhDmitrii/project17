// https://www.npmjs.com/package/dotenv
const dotenv = require('dotenv');
// https://expressjs.com/ru/
const express = require('express');
// https://www.npmjs.com/package/morgan
const morgan = require('morgan');
// Функция подключения к БД
const connectDB = require('./config/db');

// Загрузка переменный окружения
dotenv.config({ path: './config/config.env' });

// Подключаемся к БД
connectDB();

//Route files
const personals = require('./routes/personals');
const positions = require('./routes/positions');

const app = express();

// Получаем возможность брать данные из body
app.use(express.json());

//Включаем логгер в случае dev
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount routes
app.use('/api/v1/personals', personals);
app.use('/api/v1/positions', positions);

const PORT = process.env.PORT || 3000;

// Запускаем сервер на порту
const server = app.listen(
  PORT,
  console.log(
    `Сервер запущен в режиме ${process.env.NODE_ENV} на порту ${PORT}`
  )
);
