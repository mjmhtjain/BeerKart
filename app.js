'use strict';
const config = require('./config');
const app = require('express')();
const ServerResponse = require('./models/ServerResponse');
const database = require('./db/database');

app.route('/')
    .get((req, res) => {
        var serveResponse = new ServerResponse();
        serveResponse.message = 'Hello there !!';
        res.json(serveResponse);
    });

app.route('/testing')
    .get((req, res) => {
        var serveResponse = new ServerResponse();
        res.json(serveResponse);
    });

//connecting with db
database();

//listening to port
var port = config.server.port;
app.listen(port, () => {
    console.log('starting server at port ' + port);
})