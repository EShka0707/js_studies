'use strict';

const padString = function (string, number, symbol, boolean = true) {

    if (typeof string !== 'string') return 'error in string data';
    if (typeof number !== 'number') return 'error in string number';
    if (typeof symbol !== 'symbol' || symbol.length !== 1) return 'error in string symbol';
    if (typeof boolean !== 'boolean') return 'error in string boolean';


}