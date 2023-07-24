const connection = require('../connection');
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { username, password } = req.body;
    const sql = 'SELECT COUNT(*) as cnt FROM users WHERE Username = ? AND Password = ?';
    connection.query(sql, [username, password], (error, results) => {
        if(error){
            // console.log(error);
            res.status(404).json({ message: 'Invalid username or password' });
        }
        else{
            let count = JSON.parse(JSON.stringify(results))[0].cnt;
            if(count==1){
                const token = jwt.sign({username:username}, "secret-key", {expiresIn: "1h"});
                res.json({token});
            }
            else{
                return res.status(403).json({message:"Unauthorised!"})
            }
        }
    });
}

module.exports = login;

