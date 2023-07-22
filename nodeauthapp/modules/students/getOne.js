const connection = require('../connection');

const getOne = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT Id, Name FROM students WHERE Id=?';
    connection.query(sql, [id], (error, results)=>{
        if(error){
            res.status(500).json({ message: 'Error retrieving students from the database' });
        }
        else{
            res.send(results);
        }
    });
}
module.exports=getOne;
