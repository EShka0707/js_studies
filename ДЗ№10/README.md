ДЗ #10 — Условное ветвление V1

Переписать код ниже с использованием конструкции switch…case

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
    console.log('вы отменили')
} else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
} else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
} else {
    console.log('OK!')
}

* [Ссылка на проект в GitHab](https://github.com/EShka0707/js_studies.git)
