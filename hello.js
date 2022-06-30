const express = require('express'); // import
const app = express(); // consturctor, instantiate

app.get('/hello', (resqest, response) => {
    console.log('Hello World');
    response.json({message: 'Hello World from Node Server'}) // server respond 
})

app.listen(4000)