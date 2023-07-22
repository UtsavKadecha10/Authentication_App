const connection = require('../connection');

const getOne = (req, res) => {
    const {id} = req.params;
    const sql = 'SELECT Id, Name FEOM students WHERE Id='+id;
    connection.query(sql, (error, results)=>{
        if(error){
            res.status(500).json({ message: 'Error retrieving students from the database' });
        }
        else{
            res.send(results);
        }
    });
}
module.exports=getOne;
