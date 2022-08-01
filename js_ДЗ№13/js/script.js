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

// const num = prompt('Введите целое число');
// let length = num.length;

// if (num >= 0) {
//     switch (length) {
//         case 1:
//             length = `однозначное`;
//             break;
//         case 2:
//             length = `двуxзначное`;
//             break;
//         case 3:
//             length = `трехзначное`;
//             break;
//         default:
//             length = `многозначное`;
//     }
// } else if (num < 0) {
//     switch (length) {
//         case 1:
//             length = `однозначное`;
//             break;
//         case 2:
//             length = `двуxзначное`;
//             break;
//         case 3:
//             length = `трехзначное`;
//             break;
//         default:
//             length = `многозначное`;
//     }
// } else {
//     alert('Вы не ввели число');
// }
// num < 0 ? console.log(`Число ${num} ${length} отрицательное`) : console.log(`Число ${num} ${length} положительное`);

//4
// const a = +prompt('Введите первое число');
// const b = +prompt('Введите второе число');
// const c = +prompt('Введите третье число');

// if (a > b || a > c) {
//     alert(`Число ${a}  является наибольшим`);
// } 
// else if (b > a || b > c) {
//     alert(`Число ${b} является наибольшим`);
// } 
// else {
//     alert(`Число ${c} является наибольшим`);
// };

//5
// const a = +prompt('Введите сторону а');
// const b = +prompt('Введите сторону b');
// const c = +prompt('Введите сторону с');

// if (a+b > c && a+с > b && b+c > a) {
//     alert('Вы сделали треугольник');
// } else {
//     alert(`У вас получилась какая-то кракозябра`);
// }