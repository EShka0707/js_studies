'use strict';

const person = {
    firstName: 'Evgeniya',
    lastName: 'Shpak',
    age: 27
}

function info(phone, email) {
    console.log(`Name: ${this.firstName}, tel: ${phone}, Email: ${email}`);
}

const funcInfoPerson = info.bind(person, '89268400699', 'Qxzone1@gmail.com')();

console.log(funcInfoPerson === info);