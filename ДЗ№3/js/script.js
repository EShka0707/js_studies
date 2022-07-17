'use strict';

const userAction = prompt('Выберите действие: add, sub, mult, div');

function add() {
    if (userAction === 'add') {
        const num1 = +prompt('Введите первое число:');
        const num2 = +prompt('Введите второе число:');
        console.log(num1 + num2);
    };
}
add();

function sub() {
    if (userAction === 'sub') {
        const num1 = +prompt('Введите первое число:');
        const num2 = +prompt('Введите второе число:');
        console.log(num1 - num2);
    };
}
sub();

function multi() {
    if (userAction === 'mult') {
        const num1 = +prompt('Введите первое число:');
        const num2 = +prompt('Введите второе число:');
        console.log(num1 * num2);
    };
}
multi();

function div() {
    if (userAction === 'div') {
        const num1 = +prompt('Введите первое число:');
        const num2 = +prompt('Введите второе число:');
        console.log(num1 / num2);
    };
}
div();