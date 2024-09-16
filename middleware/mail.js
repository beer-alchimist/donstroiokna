const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    host:'smtp.mail.ru',
    port:465,
    secure:true,
    auth:{
        user:'',//mail
        pass:''//mail pass
    },

});

var mailoption_manager = {
    from:'',//mail.ru mail
    to:'',//mail manager
    subject:''//messager for manager
}
