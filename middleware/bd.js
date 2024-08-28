const {Pool} = require('pg');
const {user} = require('../config');
const axios = require('axios');
const { use } = require('../router/user_routs');
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
        console.log(`ip=${result}; ${result.split('.')}`);
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
        const result = await pool.query(`SELECT * FROM public.donstroiokna WHERE ip_user = ${user.ip}`);
        if(result.rows.length-1 > 0 ){
            await result.rows.forEach(row => {
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

module.exports = {
    connect:connect
};