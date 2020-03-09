'use strict'

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function(element) {
    element.price = element.price - (element.price * 15) / 100;
});

console.log(products);
