'use strict'

function mathOperation(arg1, arg2, operation) {

    switch (operation) {
        case '*':
            return `Произведение ваших чисел равно: ${arg1 * arg2}`;
        case '/':
            return `Частное ваших чисел равно: ${parseInt((arg1 / arg2) * 100) / 100}`;
        case '+':
            return `Сумма ваших чисел равна: ${arg1 + arg2}`;
        case '-':
            return `Разность ваших чисел равна: ${arg1 - arg2}`;
    }
}

const arg1 = parseInt(prompt('Введите первое произвольное число, оно может быть как положительным, так и отрицательным'));
const arg2 = parseInt(prompt('Введите второе произвольное число, оно может быть как положительным, так и отрицательным'));
const operation = prompt('Какую операцию выполнить? Умножение - поставьте "*", деление - поставьте "/", сложение - поставьте "+", разность - поставьте "-"');

alert(mathOperation(arg1, arg2, operation));