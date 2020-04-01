const express = require('express');

const app = express();

app.get('/', function(req,res){
    res.send('Hello world');
})

//creamos un puerto dinamico

const port = process.env.PORT || 9999;


app.listen(port, function(){
    console.log(`Servidor alojado en ${port}`);
    
})