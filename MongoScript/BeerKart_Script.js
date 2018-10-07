db.createCollection('UserDetail');
db.createCollection('Inventory');

db.UserDetail.insertMany(
[
    {name : 'tester', email: 'validEmail@email.com', password: 'encryptedPassWord', orderSummary : [{productID : 'prod123', quantity : 2, status : 'complete'}]}
]    
);

db.Inventory.insertMany([
    {productID : 'prod123', productName : 'TesterBeer', productInfo : 'tester beer for testing... Lorem ipdsum dolor sit', productImage : 'something', CPU : 12}
]);
