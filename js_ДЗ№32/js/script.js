'use strict';

(function() {

  const calculator = {

    read() {
      this.a = +prompt('Enter the first number', 0);
      this.b = +prompt('Enter the second number', 0);
  
      if(isNaN(this.a) || isNaN(this.b)) return alert('you didn`t enter a number');
  
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    }
  };

  calculator.read(5,7);

  alert( calculator.sum() );
  alert( calculator.mul() );
  
})()

