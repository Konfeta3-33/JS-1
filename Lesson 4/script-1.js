'use strict'

function getSplitNumber(number) {
    if (Number.isInteger(number) && number >= 0 && number <= 999) {
        return String(number).split('').reverse();
    } else if (!Number.isInteger(number) || isNaN(number)) {
        console.log(`Введите корректное целое число`);
        return []
    }
}

function GetObjectOfNumber(number) {
    let numberSplit = getSplitNumber(number);

    let hundreds = 0;
    let tens = 0;
    let units = 0;
    
    if (numberSplit.length == 3) {
        hundreds = Number(numberSplit[2]);
        tens = Number(numberSplit[1]);
        units = Number(numberSplit[0]);
    } else if (numberSplit.length == 2) {
        tens = Number(numberSplit[1]);
        units = Number(numberSplit[0]);
    } else if (numberSplit.length == 1) {
        units = Number(numberSplit[0]);
    } else {
        return {}
    }
    
    this.units = units,
    this.tens = tens,
    this.hundreds = hundreds
};

let number1 = new GetObjectOfNumber('sdfgdsfg');
console.log(number1);