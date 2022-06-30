const express = require('express');
const bodyParser = require('body-parser')
const app = express();

// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// parse application/json
app.use(bodyParser.json())

// for any request, execute the function
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");  // add to headers: allow for all access
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept"); 
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); 
    res.header("Access-Control-Allow-Credentials", "true"); 
    next(); // allow request continue
});

let todos = require('./todos.json')

app.get('/todos', (req, res) => {
    res.json(todos);
})

app.post('/todos', (req, res) => {
    const newTodo = req.body; // debug and doest not know how to parse JSON payload to object
    console.log(newTodo);
    todos = [...todos, newTodo]; // append new todo at the end
    res.json(todos) // respond with new array of todos
})

const movieService = require("./services/movie-service"); // load function 
movieService(app);

require('./services/tweets-service')(app);

app.listen(4000);