'use strict';

//1
const array1 = [1, 2, 3];
const arr = [4, 5, 6];
const resultArray1 = array1.concat(arr);
console.log(resultArray1);

//2
const array2 = [1, 2, 3];
const resultArray2 = array2.reverse(array2);
console.log(resultArray2);

//3
const array3 = [1, 2, 3];
const resultArray3 = array3.push(4, 5, 6);
console.log(array3);

//4
const array4 = [1, 2, 3];
const resultArray4 = array4.unshift(4, 5, 6);
console.log(array4); 

//5
const array5 = ['js', 'css', 'jq'];
// alert(array5.shift());

//6
const array6 = ['js', 'css', 'jq'];
// alert(array6.pop());

//7
const array7 = [1, 2, 3, 4, 5];
const resultArray7 = array7.slice(0, 3);
console.log(resultArray7);

//8
const array8 = [1, 2, 3, 4, 5];
const resultArray8 = array8.slice(-2);
console.log(resultArray8);

//9
const array9 = [1, 2, 3, 4, 5];
array9.splice(1, 2);
console.log(array9);

//10
const array10 = [1, 2, 3, 4, 5];
const resultArray10 = array10.splice(1, 3);
console.log(resultArray10);

//11
const array11 = [1, 2, 3, 4, 5];
const resultArray11 = array11.splice(3, 0, 'a', 'b', 'c');
console.log(array11);

//12
const array12 = [1, 2, 3, 4, 5];
const resultArray12 = array12.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(array12);

//13
const array13 = [3, 4, 1, 2, 7];
const resultArray13 = array13.sort()
console.log(array13);

//14
const array14 = [5, 6, 7, 8, 9];
const resultArray14 = array14.reduce(function(sum, elem) {
    return sum + elem;
});
console.log(resultArray14);

//15
const array15 = [5, 6, 7, 8, 9];
const newArray15 = [];

array15.forEach( function(elem) {
    newArray15.push(elem * elem);
});
console.log(newArray15);

//16
const array16 = [1,-3, 5, 6,-7, 8, 9,-11];
const resultArray16 = array16.filter(function(elem) {
    return elem < 0;
});
console.log(resultArray16);

//17
const array17 = [1,-3, 5, 6,-7, 8, 9,-11];
const oddNumbers = array17.filter(isOdd);

function isOdd(item) {
    if(item % 2 === 0) {
        return true;
    }

    return false;
}
console.log('Массив четных чисел:', oddNumbers);

// 18
const array18 = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
const resultArray18 = array18.filter(function(positive) {
    if(positive.length > 5) {
        return true;
    }
    return false;
});
console.log(resultArray18);

// 19
const array19 = [1, 2, [3, 4], 5, [6, 7]];
const newArray19 = array19.filter(function (elem) {
    return Array.isArray(elem);
})
console.log(newArray19);

//20
const array20 = [5,-3, 6,-5, 0,-7, 8, 9];
const newArray20 = array20.filter(function(elem) {
    return elem < 0; 
});
console.log(newArray20.length);