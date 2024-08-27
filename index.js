//node modul
const express = require('express');
const app = express();
require('dotenv').config;
//node modul
const port = process.env.port || 3000;

const controller = require('./middleware/bd');

app.use(express.json());

const user_router = require('./router/user_routs');
app.use('/user', user_router);

app.get('/', [controller.connect], (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});