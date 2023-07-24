const connection = require('../connection');

const post = (req, res) => {
    const { username, password } = req.body;
    const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
    connection.query(sql, [username, password], (error, results) => {
        if (error) {
            // console.error('Error creating a new user in the database:', error);
            res.status(500).json({ message: 'Error creating a new student in the database' });
        }
        else{
            res.send(results);
        }
    });
}
module.exports = post;
