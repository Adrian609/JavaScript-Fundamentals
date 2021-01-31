//"use strict";

var myCar = {
  color: "Blue",
  logColor: function () {
    let self = this;
    console.log("In logColor - this.color: " + this.color); // this.color references the object scope
    console.log("In logColor - self.color: " + self.color);

    (function () {
      console.log("In IIFE -this.color: " + this.color); // undefined: this.color references the global scope or function
      console.log("In IIFE - seld.color: " + self.color); // self reference the object scope
    })();
  },
};

myCar.logColor();
