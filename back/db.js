const mysql = require('mysql')
const con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    port:3306,
    database:"users"
})

con.connect((error)=>{
    if(!error){
       console.log('DB qoshuldu')
    }
})



module.exports= con