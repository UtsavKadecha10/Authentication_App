const connection = require('../connection');

const update = (req, res) =>{
    const {id} = req.body;
    const {name} = req.body;
    const sql = 'UPDATE students SET Name=? WHERE Id=?'
    connection.query(sql, [name, id], (error, results)=>{
        if(error){
            res.status(500).json({ message: 'Error updating an existing student in the database' });
        }
        else{
            res.send('Updated!');
        }
    });
}
module.exports = update;
