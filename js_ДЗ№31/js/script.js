'use strict';

(function() {

    const person = {
        firstName: 'Evgeniya',
        lastName: 'Shpak',
        age: 27
    }
    
    function info(phone, email) {
        console.log(`Name: ${this.firstName}, tel: ${phone}, Email: ${email}`);
    }
    
    function bind(fn, context, ...rest) {
        return function(...args) {
            const uniqId = Date.now().toString()
    
            context[uniqId] = fn
    
            const result = context[uniqId](...rest.concat(args))
    
            delete context[uniqId]
    
            return result
        }
    }
    
    const funcInfoPerson = info.bind(person, '89268400699', 'Qxzone1@gmail.com')();

    console.log(funcInfoPerson === info);
})()

