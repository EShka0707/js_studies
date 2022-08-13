'use strict';

const padString = (string, length, symbol = '*', sideRight = true) => {

    if( typeof string !== 'string') throw new Error('in String data');
    if( typeof length !== 'number' ) throw new Error('some error Number');

    if(string.length === length) return string;
    if(string.length > length) return string.substring(0, length);

    if( typeof symbol !== 'string') throw new Error('some error Symbol');
    if( symbol.length > 1) throw new Error('character Length error');  

    if( typeof sideRight !== 'boolean') throw new Error('some error Boolean');

    const symbols = symbol.repeat(length - string.length);

    return sideRight ? string + symbols : symbols + string;
}

console.log(
    padString('hello', 3)
);