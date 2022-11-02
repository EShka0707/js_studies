'use strict';

(function() {

    let bodyEl = document.body;
    let bodyChilds = bodyEl.childNodes;
    let ul = bodyChilds[1];
    let li = ul.childNodes;

    const arrLi = []

    for (let elem of li) {
        if (elem.innerHTML !== undefined) {
            // console.log(elem.innerHTML);
            arrLi.push(elem.innerHTML)
        }
        
    }
    
    arrLi.forEach((element) => {
        console.log(element);
    });

    console.log(arrLi.length);
    console.log(arrLi);
    
})()
