'use strict';

const num = +prompt('Введите число');

if (num <= 1 || isNaN(num)) {
    console.log(NaN);
} else {
    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            console.log(i);
            break;
        }
    }
}