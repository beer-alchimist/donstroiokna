const express = require('express');
const router = express.Router();
const {user} = require('../config');
const ejs = require('ejs');

router.get(`/${user.id}`, async (req, res) => {
    await res.send(`Ваш id = ${user.id}, ip = ${user.ip}`);
    await console.log(req.ip);
});

module.exports = router;