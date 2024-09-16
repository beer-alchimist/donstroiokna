const {Pool} = require('pg');
const {user} = require('../config');
const axios = require('axios');

const pool = new Pool({
    user:'postgres',
    host:'localhost',
    database:'moduler',
    password:'legco2018',
    port:5432
});

const connect = async(req,res,next)=>{
    await axios.get('https://ipgeolocation.abstractapi.com/v1/?api_key=75cb13faaf1e4d83bc3c605324ad2553&ip_address=213.138.86.164')
    .then(response => {
        var result = response.data.ip_address;
        for(var i = 0; result.split('.').length-1 >= i; i++){
            user.ip= Number(user.ip) + Number(result.split('.')[i]); 
        };
    })
    .catch(error => {
        console.log(error);
    });
    var creat = [user.ip, user.ip, 'user'];
    try {
        await pool.connect();
        const resul = await pool.query(`SELECT * FROM public.donstroiokna WHERE id = ${user.ip}`);
        await resul;
        if(resul.rows.length-1 > 0 ){
            await resul.rows.forEach(row => {
                user.id = row['id'];
                user.status = row['status'];
                user.user_new = 'old_user';
            });
            await next();
        }else{
            await pool.query('INSERT INTO public.donstroiokna (id, ip_user, status) VALUES($1,$2,$3)', (creat), async(err,res)=>{
                if(err){
                    await console.log(err);
                }else{
                    user.user_new = 'new_user';
                    await console.log('query surself');
                    await next();
                };
            });
        };
    } catch (e) {
        await console.log(e);
    }
};

const towar = async(req,res,next)=>{
    try {
        pool.connect();
        const resul = pool.query(``);
        await resul;
    } catch (error) {
        
    }
}

const basket = async(req,res,next)=>{};

const login = async(req,res,next)=>{};

const register = async(req,res,next)=>{};

module.exports = {
    connect:connect
};