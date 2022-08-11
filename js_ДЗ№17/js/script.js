'use strict';

const num = +prompt('Введите число');
const degree = +prompt('Ведите степень, в которую хотите возвести число');

const exponentiation = (num, degree = 1) => {

    if (isNaN(num) || isNaN(degree) || num === null) return confirm('какая-то ошибка');
    return num ** degree; 
    
};
const result = exponentiation(num, degree);
alert(result);