//node modul
const express = require('express');
const app = express();
require('dotenv').config;
//node modul

const router = require('./router/routs');

await router(app);