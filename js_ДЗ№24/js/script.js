'use strict';

//1
// const arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] +  '+' + arr[1]);
// alert(arr[2] + '+' + arr[3]);

//2
// const arr2 = [2, 5, 3, 9];
// const multi = arr2.reduce(function() {
//     const num1 = arr2[0] * arr2[1];
//     const num2 = arr2[2] * arr2[3];
//     return num1 + num2;
// });
// alert(multi);

//3
// const arr3 = [
//     [1, 2, 3], 
//     [4, 5, 6], 
//     [7, 8, 9]
// ];
// alert(arr3[1][0]);

//4
// const objectArr4 = {
//     js:['jQuery', 'Angular'],
//     php: 'hello',
//     css: 'world'
// };
// alert(objectArr4.js[0]);

//5
// const arr5 = [];
// let str5 = 'x';

// for (let i = 0; i < 10; i += 1) {
    
//     str5 += 'x';
//     arr5.push(str5);
// }
// console.log(arr5);

//6

// const arr6 = [];

// for(let i = 1; i < 10; i += 1) {

//     let newArray6 = '';

//     for(let j = 0; j < i; j += 1) {

//         newArray6 += i;
//     }
//     arr6.push(newArray6);
// }
// console.log(arr6);

//7
// function arr5Fill(val, len) {
   
//     return Array(len).fill(val);
// }
// console.log(arr5Fill('x', 5));

//8
// const arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray8 = [];
// let sum = 0;

// for (let i = 0; sum <= 10; i += 1) {
//     sum += arr8[i];
//     newArray8.push(arr8[i]);
// }
// console.log(newArray8.length);

//9
// const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newArray9 = [];

// for (let i = 0; i < arr9.length;) {
//     newArray9.push(arr9.pop());
// }
// console.log(newArray9);

//10
const arr10 = [[1, 2, 3], [4, 5], [6]];
let sum = 0;

for (let i = 0; i < arr10.length; i++) {
    for (let j = 0; j < arr10[i].length; j++) {
        sum += arr10[i][j];
    }
}
console.log(sum);