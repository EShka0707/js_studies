'use strict';

let ladder = {
    step: 0,

    up: function() {
      this.step++;
      return this;
    },
    down: function() {
      this.step--;
      return this;
    },
    showStep: function() {
      alert( this.step );
      return this;
    }

};
ladder.up().down().showStep();
ladder.up().up().down().showStep();
ladder.up().up().up().up().down().showStep();