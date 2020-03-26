'use strict'

//Получаем таблицу, в которую будем добавлять товары
const table = document.querySelector('tbody');

//Получаем все карточки товаров
const buttons = document.querySelectorAll('.col-4 button');

//Получаем кнопку, по которой произошел клик в карточке товара
buttons.forEach(button => button.addEventListener('click', addToCartHandleClick));

//Получаем событие по клику на таблицу
table.addEventListener('click', deleteFromCartHandleClick);

//Добавление товара в корзину
function addToCartHandleClick(event) {
    const product = event.target.dataset;
    
    const productAlreadyInCart = findProductInCart(product) !== undefined;
    
    if (productAlreadyInCart) {
        updateQuantity(product); //обновляем кол-во в корзине
    } else {
        addProductInCart(product); //добавляем товар в корзину
    }   
    
    updateTotalSum(product); //обновляем итоговую сумму корзины
}

function addProductInCart(product) {
    product.quantity = 1;
    let productRemoveButton = document.createElement('button');
    productRemoveButton.classList.add('productRemoveBtn');
    let trash = document.createElement('i');
    trash.classList.add('far', 'fa-trash-alt');
    productRemoveButton.insertAdjacentElement('afterbegin', trash);
    const {id, name, price, quantity} = product; //деструктуризация объекта product

    const rowTable = `
        <tr data-id="${id}" data-price="${price}" data-quantity="${quantity}">
            <td>${id}</td>
            <td>${name}</td>
            <td>${price}</td>
            <td>${quantity}</td>
            <td>${productRemoveButton.outerHTML}</td>
        </tr>`;
    return table.insertAdjacentHTML('beforeend', rowTable);
}

function findProductInCart(product) {
    const rowsArray = Array.from(table.rows);
    return rowsArray.find(row => row.dataset.id == product.id);
}

function updateQuantity(product) {
    const row = findProductInCart(product);
   
    row.dataset.quantity++; //увеличиваем кол-во продукта
    row.cells[3].innerText = row.dataset.quantity;
} 

function deleteFromCartHandleClick(event) {
    if (event.target.matches('button') || event.target.matches('i')) {
        event.target.closest('tr').remove(0);
        updateTotalSum();
    };
}

function getSum() {
    let allProductsInCart = table.querySelectorAll('tr');
    let sumOfAllProducts = 0;
    
    for (let i = 0; i < allProductsInCart.length; i++) {
        let sumOfOneProduct = Number(allProductsInCart[i].dataset.price) * Number(allProductsInCart[i].dataset.quantity);
        sumOfAllProducts += sumOfOneProduct;
    }
    
    return sumOfAllProducts;
}

function updateTotalSum(product) {
    const totalSum = getSum();
    let total = document.querySelector('.total');
    total.innerText = `${totalSum}`;
}
