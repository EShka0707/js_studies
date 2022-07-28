'use strict';

const userMessage = 'Жаль, что вы не захотели ввести ';

const age = 2022 - +prompt('Введите свой год рождения');

if (age === null || age === '') {
    alert('${userMessage}свой год рождения');
} else if (age < 0 || age > 100) {
    alert('Вы так и не ввели свой год рождения');
}

const city = prompt('В каком городе вы живете?');
if (city === null || city === '') {
    alert(`${userMessage}`+ 'свой город проживания');
}

const sport = prompt('Какой ваш любимый вид спорта?');
if (sport == null || sport === '') {
    alert(`${userMessage}` + 'свой любимый вид спорта');
} 

let choiceCity = null;

switch (city) {
    case 'Киев':
        choiceCity = `Вы живете в столице Украины - Киев`;
        break;
    case 'Москва':
        choiceCity = `Вы живете в столице России - Москва`;
        break;
    case 'Минск':
        choiceCity = `Вы живете в столице Беларуси - Минск`;
        break;
    case '':
    case null:
        choiceCity = `Вы так и не ввели свой город прожиания`;
        choiceCity = `Вы так и не ввели свой город прожиания`;
        break;
    default:
        choiceCity = `Вы живете в городе - ${city}`;
} 

let choiceSport = null;

switch (sport){
    case 'хоккей':
        choiceSport = `Круто! Хочешь стать как Александр Овечкин!`;
        break;
    case 'футбол':
        choiceSport = `Круто! Хочешь стать как Криштиану Рональду`;
        break;
    case 'плавание':
        choiceSport = `Круто! Хочешь стать как Марк Спитц!`;
        break;
    case '':
    case null:
        choiceSport = `Вы так и не ввели любимый вид спорта`;
        choiceSport = `Вы так и не ввели любимый вид спорта`;
        break;
    default:
        choiceSport = `Круто! Ты можешь стать великим спортсменом!`;
}

alert('Ваш возраст - ' + age + '\n' + choiceCity + '\n' + choiceSport);

// alert('Ваш возраст - ' + age + '\n' + 'Ваш город проживания - ' + city + '\n' + 'Ваш любимый вид спорта - ' + sport);