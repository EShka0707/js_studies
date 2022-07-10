'use strict';

const userAction = prompt('Choose an action: add, sub, mult, div.');
const num1 = +prompt('Enter the first number:');
const num2 = +prompt('Enter the second number:');


if ( 'add' === userAction ) {
    alert( num1 + num2 );
} else if ('sub' === userAction ) {
    alert( num1 - num2 );
} else if ( 'mult' === userAction ) {
    alert( num1 * num2 );
} else if ( 'div' === userAction ) {
    alert( num1 / num2 );
};