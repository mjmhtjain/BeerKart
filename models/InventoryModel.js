const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    productID: {type: String, required: true},
    productName: {type: String, required: true},
    productInfo: {type: String, required: false},
    productImage: {type: String, required: false},
    CPU: {type: Number, required: true}
}, {collection : 'Inventory'});

const InventoryModel = mongoose.model('Inventory', InventorySchema);

var func_fetchInventory = function(){
    return InventoryModel.find({}).exec();
}

module.exports = {
    model : InventoryModel,
    fetchInventory : func_fetchInventory
}