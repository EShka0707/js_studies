'use strict';

const num = +prompt('Введите число');
let simple = true;

if (num <= 1) {
    console.log(false);
} else if (num > 1) {

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            simple = false;
            break;
        }
    } 
    if (simple) {
        console.log(true);
    } else {
        console.log(false);
    }
}