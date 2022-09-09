'use strict';

// 3! = 3 * 2 * 1;

// Task #1
function getFactorial(n) {

    if (n === 1 || n === 0) {
        return 1;
    }

    return n * getFactorial(n - 1);
}
console.log(getFactorial(3));


// Task #2
function pow(num, deg) {
    
    if(deg === 1) {
        return num
    }

    return num * pow(num, deg - 1);
}

console.log(pow(2, 5)); 


// Task #3
function sum(a, b) {

    if (b === 0) {
        return a;
    }

    return sum(a + 1, b - 1);
}
console.log(sum(4, 6));