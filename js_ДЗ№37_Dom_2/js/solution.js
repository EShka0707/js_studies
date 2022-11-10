'use strict';

(function() {
    
    const listUl = document.querySelector('#ulId');
    const attrUl = listUl.attributes;

    const arrValueAttrs = [];
    const arrNameAttrs = [];
    
    for(let attrs of attrUl) {
        arrValueAttrs.push(attrs.value);
        arrNameAttrs.push(attrs.name);
        console.log(attrs);
    }
    console.log(arrValueAttrs);
    console.log(arrNameAttrs);

    const lastLi = document.querySelector('li:last-child').innerHTML = 'Hello, my name is Evgeniya';

    const firstLi = document.querySelector('li:first-child');
    firstLi.setAttribute('data-my-name','Evgeniya');

    const attrRemove = document.querySelector('ul');
    attrRemove.removeAttribute("data-dog-tail");

    console.log(lastLi);
    console.log(firstLi);
    console.log(attrRemove);
})();