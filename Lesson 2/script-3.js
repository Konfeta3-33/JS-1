'use strict'

function mathOperation (a, b) {
    
    if (a >= 0 && b >= 0) {
        return `Разность ваших чисел равна: ${a - b}`;
    }
    
    if (a < 0 && b < 0) {
        return `Произведение ваших чисел равно: ${a * b}`;
    }
    
    if (Math.sign(a) == -1 && Math.sign(b) == 1 || Math.sign(a) == 1 && Math.sign(b) == -1) {
        return `Сумма ваших чисел равна: ${a + b}`;
    }
}

const a = parseInt(prompt('Введите первое произвольное целочисленное число, оно может быть как положительным, так и отрицательным'));
const b = parseInt(prompt('Введите второе произвольное целочисленное число, оно может быть как положительным, так и отрицательным'));

alert(mathOperation(a, b));
