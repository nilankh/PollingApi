const express = require('express');

// port
const port = 8000;

// creating express app
const app = express();

app.get('/', (req, res) =>{
    res.json({"message": "welcome"})
});

// Listen for requests
app.listen(port, function(err){
    if(err){console.log(`Error in running the server, ${err}`)};
    console.log(`Server is running on port: ${port}`);
})
