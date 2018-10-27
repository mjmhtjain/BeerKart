'use strict';
const path = require('path');
const config = require('./config');
const express = require('express');
const app = express();
const ServerResponse = require('./models/ServerResponse');
const database = require('./db/database');
const cors = require('cors');
const bodyParser = require('body-parser');
const InventoryController = require('./controllers/InventoryController');

// app.route('/')
//     .get((req, res) => {
//         var serveResponse = new ServerResponse();
//         serveResponse.message = 'Hello there !!';
//         res.json(serveResponse);
//     });

// app.route('/testing')
//     .get((req, res) => {
//         var serveResponse = new ServerResponse();
//         res.json(serveResponse);
//     });

//serve static file from the given location
app.use(express.static(path.join(__dirname, 'public')));

//Middleware for CORS
app.use(cors());

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/inventory', InventoryController);

//connecting with db
database();

//listening to port
var port = config.server.port;
app.listen(port, () => {
    console.log('starting server at port ' + port);
})