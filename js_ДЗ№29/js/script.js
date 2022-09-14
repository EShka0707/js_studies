'use strict';

function randomNum () {

    let userNum = [];

    return function () {
        
        let result = Math.floor(Math.random() * 100) +1;

        for (let i = 0; i < userNum.length; i += 1) {
            if (userNum[i] === result) return;
        }
        userNum.push(result);
        return result;
    }
    
} 
const func = randomNum();
console.log(func());