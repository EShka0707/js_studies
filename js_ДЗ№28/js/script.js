'use strict';

function sumFunc() {

    let a = 0;

    return function (b) {
        let result = a + b;
        a += b;
        return result;
    }
}
const newSum = sumFunc();

console.log(newSum(3));
console.log(newSum(5));
console.log(newSum(20));