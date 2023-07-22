const connection = require('../connection');

const update = (req, res) =>{
    const {name} = req.body;
    const sql = 'UPDATE students SET Name=? WHERE id=?'
    connection.query(sql, [name, id], (error, results)=>{
        if(error){
            res.status(500).json({ message: 'Error updating an existing student in the database' });
        }
        else{
            res.send(results);
        }
    });
}
module.exports = update;
