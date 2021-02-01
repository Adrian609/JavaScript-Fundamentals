const car1 = {
  brand: "Porsche",
  getCarDescription: function (cost, year, color) {
    console.log(
      `This car is a ${this.brand}.\n The price is $${cost}.\n The year is ${year}.\n The color is ${color}.\n`
    );
  },
};

const car2 = {
  brand: "Lamborghini",
};

const car3 = {
  brand: "Ford",
};

car1.getCarDescription(80000, 2010, "blue");
// using call method to pass car 2 and its parameters in
car1.getCarDescription.call(car2, 200000, 2013, "yellow");
//apply method passes all parameters in an array
car1.getCarDescription.apply(car3, [35000, 2012, "black"]);
