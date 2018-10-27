const InventoryModel = require('../models/InventoryModel');
const app = require('express')();
const ServerResponse = require('../models/ServerResponse');

app.route('/fetchInventory')
    .get((req, res) => {
        let response = new ServerResponse();
        InventoryModel.fetchInventory().then(dbData => {
            response.success = true;
            response.data = dbData;
            response.message = "Inventory received";
            res.json(response);
        }, err => {
            response.success = false;
            response.data = null;
            response.message = `Error received: ${err}`;
            res.json(response);
        })
    });

module.exports = app;