const connection = require('../connection');

const deleteOne = (req, res) =>{
    const {id} = req.params;
    const sql = 'DELETE FROM students WHERE Id=?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error('Error deleting an existing student from the database:', error);
            res.status(500).json({ message: 'Error deleting an existing user from the database' });
        } else {
            res.send('Deleted!');
        }
    });
}
module.exports=deleteOne;
