const connection = require('../connection');

const Logger = (req, res, next) =>{
    const url = req.url;
    const method = req.method;
    const remoteAddress = req.socket.remoteAddress;

    const sql = 'INSERT INTO logs (url, method, ipAddress) VALUES (?, ?, ?)';
    connection.query(sql, [url, method, remoteAddress], (error, results) =>{
        if(error){
            console.error('Error:', error);
        }
        else{

        }
    });
    next();
}
module.exports=Logger;
