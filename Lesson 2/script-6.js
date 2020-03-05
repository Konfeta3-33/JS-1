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
            return (alert(`Ваша сумма в ${sum} рубл${end} успешно зачислена.`));
    }

    switch (sum.charAt(sum.length - 1)) {
        case '0':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            end = 'ей';
            return (alert(`Ваша сумма в ${sum} рубл${end} успешно зачислена.`));

        case '1':
            end = 'ь';
            return (alert(`Ваша сумма в ${sum} рубл${end} успешно зачислена.`));

        case '2':
        case '3':
        case '4':
            end = 'я';
            return (alert(`Ваша сумма в ${sum} рубл${end} успешно зачислена.`));
    }
}

correctWord();
