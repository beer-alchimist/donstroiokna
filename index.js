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

app.get('/', [controller.connect], async(req, res) => {
  await res.send('this index page');
});

app.get('/catalog_window', [controller.connect], async(req,res)=>{
  await res.send('this catalog_window page');
});

app.get('/catalog_color', [controller.connect], async(req,res)=>{
  await res.send('this catalog_color page');
});

app.get('/info_company', [controller.connect], async(req,res)=>{
  await res.send('this info_company page');
});

app.get('/login', [], async(req,res)=>{});

app.get('/register', [], async(req,res)=>{});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});