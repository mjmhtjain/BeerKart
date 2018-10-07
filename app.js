'use strict';

const app = require('express')();
const dotenv = require('dotenv');
const ServerResponse = require('./models/ServerResponse');
dotenv.load();

var port = process.env.SERVER_PORT;

app.route('/')
.get((req, res)=>{
    var serveResponse = new ServerResponse();
    serveResponse.message = 'Hello there !!';
    res.json(serveResponse);
});

app.route('/testing')
.get((req, res)=>{
    var serveResponse = new ServerResponse();
    serveResponse.success= 'he';
    res.json(serveResponse);
});

app.listen(port, ()=>{
    console.log('starting server at port '+port);
})