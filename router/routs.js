const ejs = require('ejs');

const host = process.env.HOST;
const port = process.env.PORT;

module.exports = (app)=>{
    app.get('index')
};