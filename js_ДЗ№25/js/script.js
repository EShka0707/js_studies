'use strict';



// indexOf

let newArray = [5, -6, 1, 4, -2, 5];

const indexOf = (arr, searchElement, fromIndex = 0) => {

    for (let i = fromIndex; i < arr.length; i += 1) {

        if(arr[i] === searchElement) return i;
        
    }
    return -1;
}
console.log(
    indexOf(newArray, 4)
);

// function indexOf(array, value, fromIndex = 0) {
    
//     for (let i = fromIndex; i < array.length; i++) {

//         if (array[i] === value) return i;
//     }
//     return - 1;
// }
// console.log(arr.indexOf(4));



//lastIndexOf

// const string = 'hello';
// let lastString = string.lastIndexOf('l');

// console.log(lastString); 



//find

// const a = [
//     {name: 'ivan', age: 35},
//     {name: 'oleg', age: 27},
//     {name: 'pavel', age: 15},
//     {name: 'ivan', age: 35},
// ]
// let newNum3 = a.find(item => {

//     if (item.age <= 18) {
//         return true;
//     }
//     return undefined;
// })
// console.log(newNum3);



//findIndex

// const c = [22, 33, 44, 55, 66, 77];

// let newNum4 = c.findIndex(item => {

//     if (item > 48) {
//         return true;
//     }
// })
// console.log(newNum4);



//includes

// function includes(array, value, fromIndex = 0) {
    
//     for (let i = fromIndex; i < array.length; i++) {

//         if (array[i] === value) return true;
//     }
//     return false;
// }
// console.log(arr.includes(-6));



//every

const every = (arr, callback) => {

    for (let i = 0; i < arr.length; i += 1) {

        if (!callback(arr[i], i, arr)) return false;
    }
    return true;
};
console.log(every(newArray, (item) => {
    return item < 6;
}));

//every вариант 2

// let d = arr.every(function(arr) {
//     return arr < 6;
// });
// console.log(d);



//some

// const some = (arr, callback) => {

//     for (let i = 0; i < arr.length; i++) {

//         if (callback(arr[i], i, arr)) return true;
//     }
//     return false;
// };
// console.log(some(arr, (item) => {
//     return item < 5;
// }));

//some вариант 2
// let f = arr.some(function(arr) {
//     return arr > 5;
// });
// console.log(f);