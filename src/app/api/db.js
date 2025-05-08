const mysql=require('mysql2');
const connection=mysql.createConnection({
host:'localhost',
user:'root',
password:'',
database:'mi_base'
});
connection.connect((err)=>{
if(err)throw err;
console.log('Conectando a MYSQL');
});

module.exports=connection;