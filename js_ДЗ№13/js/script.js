'use strict';

// 1
let x = 5;
let y = 3

x > y? console.log('x больше, чем y'): console.log('x не больше, чем y');

//2
// const num = +prompt('Введите число');

// if (num % 2 === 0) {
//     alert(`Число ${num} четное`);
// } else {
//     alert(`Число ${num} нечетное`);
// }

//3

const num = +prompt('Введите целое число');
let length = null;

if (num >= 0) {
    switch (length) {
        case 1:
            length = `однозначное`;
            break;
        case 2:
            length = `двуxзначное`;
            break;
        case 3:
            length = `трехзначное`;
            break;
        default:
            length = `многозначное`;
    }
} else if (num < -1) {
    switch (length) {
        case 1:
            length = `однозначное`;
            break;
        case 2:
            length = `двуxзначное`;
            break;
        case 3:
            length = `трехзначное`;
            break;
        default:
            length = `многозначное`;
    }
}
num < 0 ? console.log(`Число ${num} ${length} положительное`) : console.log(`Число ${num} ${length} отрицательное`);