'use strict'

let result = 'x';
for (let i = 1; i <= 20; i++) {
    console.log(result);
    result = result + 'x';
}

//Вариант от преподавателя (Игоря Кубикова)
for (let x = 'x'; x.length <= 20; x += 'x') {
    console.log(x);
}
