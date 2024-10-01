const express = require('express');
const router = express.Router();
const {user} = require('../config');

router.get(`/login`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});

router.get(`/`, async (req, res) => {
    await res.render('index',{name:'Главная'});
});

router.get(`/catalog_window`, async (req, res) => {
    await res.render('catalog_window',{name:'Остекление окон'});
});

router.get(`/id:${user.id}/catlog_color`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});

router.get(`/:${user.id}`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});


module.exports = router;