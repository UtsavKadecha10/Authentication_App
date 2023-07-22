const connection = require('../connection');

const post = (req, res) => {
    const {name} = req.body;
    const sql='INSERT INTO students (name) VALUES (?)';
    connection.query(sql, [name], (error, results)=>{
        if(error){
            // console.error('Error creating a new student in the database:', error);
            res.status(500).json({message:'Error retrieving students from the database'})
        }
        else{
            res.send('Added');
        }
    });
}
module.exports=post;
