const nodemailer = require('nodemailer');
const {user} = require('../config')

var transporter = nodemailer.createTransport({
    host:'smtp.mail.ru',
    port:465,
    secure:true,
    auth:{
        user:'',//mail
        pass:''//mail pass
    },

});
