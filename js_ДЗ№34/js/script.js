'use strict';

const str = 'кекс кейкпопс торт донат';

const insertWordInto = (str) => {

    let i = 0;

    return (str2) => {

        const newStr = str.split(' ');

        if(newStr.length < i) i = 0;

        newStr.splice(i, 0, str2);

        i +=1;

        return newStr.join('');

    }
}

const insert = insertWordInto(str);
console.log(insert('ДЕСЕРТ'));
console.log(insert('ДЕСЕРТ'));
console.log(insert('ДЕСЕРТ'));
console.log(insert('ДЕСЕРТ'));
console.log(insert('ДЕСЕРТ'));