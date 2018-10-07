const config = require('../config');
const mongoose = require('mongoose');

var host = config.db.host;
var port = config.db.port;
var dbName = config.db.name;

var connectionString = `mongodb://${host}:${port}/${dbName}`;

var connectDB = function(){
    mongoose.connect(connectionString, { useNewUrlParser: true });
    console.log('DB connection established');
}

module.exports = connectDB;
