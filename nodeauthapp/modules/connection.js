const mysql = require('mysql');

const connection = mysql.createConnection({
    connectionLimit: 10,
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "utsav",
    database: "University",
})

connection.connect((error)=>{
    if(error){
        console.log("Error in connecting to the database:", error)
    }
    else{
        console.log("Connected to the database!")
    }
})

module.exports=connection;
