// Домашнее задание к Уроку 1

//Задание 1
let tempCel = prompt('Введите градусы по Цельсию: ');
let tempFar = Math.round((9 / 5) * parseInt(tempCel) + 32);
alert(`Температура по Фаренгейту равна: ${tempFar}`);

//Задание 2
let name = 'Василий';
let admin = name;
console.log(admin);

// Задание 3
let result1 = 10 + 10 + "10";
console.log(result1);
/* 
1. к числу 10 прибавляем число 10 получается число 20;
2. к числу 20 прибавляем строку "10" получается 2010, 
т.к. при конкатенации числа и строки значение будет равно строке и значения "склеятся";
3. значение 2010 записывается в переменную result1;
4. с помощью console.log выводим значение result1 */

let result2 = 10 + "10" + 10;
console.log(result2);
/* 
1. к числу 10 прибавляем строку "10" получается строка "1010",
т.к. при конкатенации числа и строки значение будет равно строке и значения "склеятся";
2. к строке "1010" прибавляем число 10 получается 101010, 
т.к. при конкатенации числа и строки значение будет равно строке и значения "склеятся";
3. значение 101010 записывается в переменную result2;
4. с помощью console.log выводим значение result2 */

let result3 = 10 + 10 + +"10";
console.log(result3);
/* 
1. к числу 10 прибавляем число 10 получается число 20;
2. к числу 20 прибавляем строку "10", которая преобразуется в число
при помощи унарного оператора "+"" и получается число 30;
3. значение 30 записывается в переменную result3;
4. с помощью console.log выводим значение result3 */

let result4 = 10 / -"";
console.log(result4);
/* 
1. число 10 делим на пустую строку, которая преобразуется 
с помощью унарного оператора "-" в -0 и получаем -infinity;
2. значение -infinity записывается в переменную result4;
3. с помощью console.log выводим значение result4 */

let result5 = 10 / +"2,5";
console.log(result5);
/* 
1. число 10 делим на строку "2,5", которую с помощью унарного оператора "+" пытаемся
преобразовать в число, но т.к. дробные числа должны прописываться с помощью точки, то
в результате получается NaN;
2. значение NaN записывается в переменную result5;
4. с помощью console.log выводим значение result5 */

// Задание 4
let mode = "normal"; //корректно
let my_valu3 = 102; //корректно
let 3my_value3 = "102"; //некорректно
let __hello__ = "world"; //корректно
let $$$ = "money"; //корректно
let !0_world = true; //некорректно