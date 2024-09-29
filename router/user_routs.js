const express = require('express');
const router = express.Router();
const {user} = require('../config');

router.get(`/login`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});

router.get(`/`, async (req, res) => {
    res.render('index',{
        name:'Главная'
    });
});

router.get(`/id:${user.id}/catalog_window`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});

router.get(`/id:${user.id}/catlog_color`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});

router.get(`/:${user.id}`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
});


module.exports = router;