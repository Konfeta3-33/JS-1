'use strict'

function correctWord(sum) {
    sum = String(prompt('Введите сумму денег, которую Вы хотите положить на счет'));
    let end = '';

    switch (sum.charAt(sum.length - 2) + sum.charAt(sum.length - 1)) {
        case '11':
        case '12':
        case '13':
        case '14':
            end = 'ей';
            return `Ваша сумма в ${sum} рубл${end} успешно зачислена.`;
    }

    switch (sum.charAt(sum.length - 1)) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            end = 'ей';
            return `Ваша сумма в ${sum} рубл${end} успешно зачислена.`;

        case '1':
            end = 'ь';
            return `Ваша сумма в ${sum} рубл${end} успешно зачислена.`;

        case '2':
        case '3':
        case '4':
            end = 'я';
            return `Ваша сумма в ${sum} рубл${end} успешно зачислена.`;
    }
}

alert(correctWord());


//Вариант от преподавателя (Игоря Кубикова)

/**
 * Функция возвращает верный падеж для слова "рубль", в зависимости от переданного числа
 * @param {number} num кол-во рублей в виде числа
 * @returns {string} слово "рубль" в правильном падеже
 */
function getCase(num) {
    let beforeLastDigit = getDigitBeforeLastDigit(num);
    if (beforeLastDigit == 1) {
        return 'рублей';
    }
    num = String(num);
    let lastNumber = Number(num.charAt(num.length - 1));
    switch (lastNumber) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return 'рублей';
        case 1:
            return 'рубль';
        case 2:
        case 3:
        case 4:
            return 'рубля';
    }
}

/**
 * Функция возвращает предпоследнюю цифру числа, если она есть, иначе null
 * @param {number} num 
 * @returns {number|null}
 */
function getDigitBeforeLastDigit(num) {
    num = String(num);
    let digit = num.charAt(num.length - 2);
    if (digit != '') {
        return Number(digit);
    }
    return null;
}

let money = parseInt(prompt('Сколько денег вы хотите положить на счет?'));
alert(`Ваша сумма денег ${money} ${getCase(money)} успешно зачислена`)