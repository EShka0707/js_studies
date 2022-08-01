'use strict';

const a = 0;
//1
console.log(a === 0 ? 'Верно' : 'Не верно');
//2
console.log(a > 0 ? 'Верно' : 'Не верно');
//3
console.log(a < 0 ? 'Верно' : 'Не верно');
//4
console.log(a >= 0 ? 'Верно' : 'Не верно');
//5
console.log(a <= 0 ? 'Верно' : 'Не верно');
//6
console.log(a != 0 ? 'Верно' : 'Не верно');
//7
console.log(a === 'test' ? 'Верно' : 'Не верно');
//8
console.log(a === '1' ? 'Верно' : 'Не верно');
//9
console.log((a > 0) && (a < 5) ? 'Верно' : 'Не верно');
//10
if (a === 0 ||  a === 2) {
    alert(a + 7);
} else {
    alert(a / 10);
}
//11
if (a <= 1 && b >= 3) {
    alert(a + b);
} else {
    alert(a - b);
}
//12
if ((a > 2) && (a < 11) || (b >= 6) && (b < 14)) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
//13
let num = 2;
let result = null;

switch (num) {
    case 1:
        result = 'зима';
        break;
    case 2:
        result = 'весна';
        break;
    case 3:
        result = 'лето';
        break;
    case 4:
        result = 'осень';
        break;
    default:
        result = 'Вы можете выбрать 1,2,3,4';
}
console.log(result);