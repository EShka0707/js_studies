ДЗ #33 — This V3 Call chain

Это ladder (лестница) – объект, который позволяет подниматься вверх и спускаться:

let ladder = {
  step: 0,
  up: function() {
    this.step++;
  },
  down: function() {
    this.step--;
  },
  showStep: function() { // показывает текущую ступеньку
    alert( this.step );
  }
};

Теперь, если нам нужно сделать несколько последовательных вызовов, мы можем выполнить это так:

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1

Измените код методов up, down и showStep таким образом, чтобы их вызов можно было сделать по цепочке, например так:

ladder.up().up().down().showStep(); // 1


Такой подход широко используется в библиотеках JavaScript.



* [Ссылка на проект в GitHab](https://github.com/EShka0707/js_studies.git)
