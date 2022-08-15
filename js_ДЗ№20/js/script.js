'use strict';

const borsch = (numberLiters, potatoWeight) => {
    return Math.ceil(0.075 * 4 * numberLiters) * potatoWeight;
}

console.log(borsch(48,13));