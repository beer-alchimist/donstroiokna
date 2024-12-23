const express = require('express');
const app = express();
require('dotenv').config;
const port = process.env.port || 3000;
const {user} = require('./config');
const controller = require('./middleware/bd');
const path = require('path');
app.use(express.json());
const ejs = require('ejs');
app.set('view engine','ejs');
app.use(express.static(path.join(__dirname,'./src')));
app.use(express.static(path.join(__dirname,'./views')));
app.use(express.static(path.join(__dirname,'./middleware')));
const user_router = require('./router/user_routs');
app.use('/user', user_router);

app.get(`/`,/* [controller.connect],*/ async (req, res) => {
  await res.render('index',{name:'Главная'});
});

app.get(`/catalog_window`, /*[controller.connect],*/ async (req, res) => {
  await res.render('catalog_window',{name:'Остекление окон'});
});

app.get('/catalog_color', /*[controller.connect],*/ async(req,res)=>{
  await res.render('catalog_color',{name:'Окраска окон'});
});

app.get('/login', [], async(req,res)=>{});

app.get('/register', [], async(req,res)=>{});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});