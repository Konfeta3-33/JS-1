'use strict'

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    }
]

//Получаем все товары, у которых есть фото
let productsWithPhoto = products.filter(
    element => element.photos && element.photos.length > 0
);
console.log(productsWithPhoto);

//Вариант от преподавателя (Игоря Кубикова)
// element => 'photos' in element && element.photos.length > 0;

//Сортируем все товары по цене, от низкой к высокой
products.sort((a, b) => a.price - b.price);
console.log(products);
