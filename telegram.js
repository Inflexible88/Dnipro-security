const express = require('express');
const path = require('path');
const TelegramApi = require('node-telegram-bot-api');

const app = express();
const PORT = process.env.PORT || 3002;
const chatId = -1001582516206;
const token = '1893426710:AAEfP3aWYYsSzrU6xLkQW7aeR4j7VflichU';
const bot = new TelegramApi(token, { polling: true });

app.set('port', PORT);
app.use(express.json());
app.use(express.static(path.join(__dirname + '/public')));

app.get('*', function (req, res) {
  const index = path.join(__dirname, 'build', 'index.html');
  res.sendFile(index);
});

app.post('/bot', (req, res) => {
  res.send(req.body);
  const { topic = '', name = '', email = '', phone = '', msg = '' } = req.body;
  console.log(`Имя: ${req.body.name} Телефон: ${req.body.phone}`);
  try {
    bot.sendMessage(
      chatId,
      `Тема: ${topic === '' ? 'Вопрос' : `Заказ - "${topic}"`} \nОт: ${name}${
        phone ? '\nТелефон: ' + phone : ''
      } ${email !== '' ? '\nEmail: ' + email : ''} ${msg !== '' ? '\nВопрос: ' + msg : ''}`,
    );
  } catch (e) {
    console.log(`Что-то пошло не так. Телеграмм бот приказал долго жить...`);
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
