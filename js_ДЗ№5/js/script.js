'use strict';

// Task #1
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

// Task #2
const user = {
    name: 'John'
};
user.name = 'Pete';
//Это будет работать, объявление const защищает только саму переменную от изменений.


// Task #3
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
function sum ( {John, Ann, Pete} ) {
    console.log(John + Ann + Pete)
}

sum(salaries);