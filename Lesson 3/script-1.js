'use strict'

for (let i = 0; i <= 10; i++) {
    let commentary = 'нечетное число';
    if (i == 0) {
        commentary = 'это ноль';
    } else if (i % 2 == 0) {
        commentary = 'четное число';
    }

    console.log(`${i} - ${commentary}`)
}
