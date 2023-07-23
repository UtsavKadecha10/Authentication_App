const express = require('express');
const cors = require('cors');
const app = express();
const Log = require('./modules/middleware/Logger.js');
const Auth = require('./modules/middleware/Auth.js');
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Log);
app.use(Auth);

// User routes

// Student routes
const getStudents = require('./modules/students/get.js');
app.get('/students', getStudents);

const addStudents = require('./modules/students/post.js');
app.post('/students', addStudents);

const updateStudents = require('./modules/students/update.js');
app.put('/students', updateStudents);

const getStudentById = require('./modules/students/getOne.js');
app.get('/students/:id', getStudentById);

const deleteStudentById = require('./modules/students/deleteOne.js')
app.delete('/students/:id', deleteStudentById);

// Start the server
const port = 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
