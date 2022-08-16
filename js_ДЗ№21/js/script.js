'use strict';
// const num = +prompt('Введите число');
// const degree = +prompt('Ведите степень, в которую хотите возвести число');


const mainFunction = (callback) => {

    const num = +prompt('Введите число');
    const degree = +prompt('Ведите степень, в которую хотите возвести число');

    callback(num, degree);
}

const exponentiation = (num, degree) => {
    const result = Math.pow(num, degree);
    alert(result);
}
mainFunction(exponentiation);