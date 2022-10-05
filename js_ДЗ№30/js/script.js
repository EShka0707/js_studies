'use strict';

const counter = (number = 0) => {

    const value = () => {
        return number;
    }
    const increse = () => {
        return number += 1;
    }
    const decrease = () => {
        return number -= 1;
    }

    return {
        value,
        increse,
        decrease
    } 
}

const resultCounter = counter(7);

console.log(resultCounter.value());
console.log(resultCounter.increse());
console.log(resultCounter.decrease());