'use strict';

// 3! = 3 * 2 * 1;

// Task #1
const factorial = (a) => {
    let n = a -1;

    if (n === 1 || n === 0) return 1;

    return a * factorial(n - 1);
}
console.log(factorial(3));


// Task #2
const pow = (a, n) => {
    
    if(n === 1) return a;

    return a * pow(a, n - 1);
}

console.log(pow(2, 5)); 


// Task #3
const sum = (a, b) => {

    if (b === 0) return a;
    
    return sum(a + 1, b - 1);
}
console.log(sum(4, 6));