db.createCollection('UserDetail');
db.createCollection('Inventory');

db.UserDetail.insertMany(
[
    {name : 'tester', email: 'validEmail@email.com', password: 'encryptedPassWord', orderSummary : [{productID : 'prod123', quantity : 2, status : 'complete'}]}
]    
);


db.Inventory.insertMany([
   {productID : 'prod123', productName : 'Corona', productInfo : 'tester beer for testing... Lorem ipdsum dolor sit', productImage : 'something', CPU : 12},
   {productID : 'prod123', productName : 'Budweiser', productInfo : 'tester beer for testing... Lorem ipdsum dolor sit', productImage : 'something', CPU : 12},
   {productID : 'prod123', productName : 'Guinness', productInfo : 'tester beer for testing... Lorem ipdsum dolor sit', productImage : 'something', CPU : 12},
   {productID : 'prod123', productName : 'Heineken', productInfo : 'tester beer for testing... Lorem ipdsum dolor sit', productImage : 'something', CPU : 12}
]);

