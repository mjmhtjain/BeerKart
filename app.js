'use strict';

const app = require('express')();
const dotenv = require('dotenv');
dotenv.load();

var port = process.env.SERVER_PORT;

app.route('/')
.get((req, res)=>{
    res.json({message : 'Hello There !!'});
});

app.listen(port, ()=>{
    console.log('starting server at port '+port);
})