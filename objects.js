//object litteral syntax
const myBoat = {
  length: 24,
  maxSpeed: 45,
  passengers: 14,
  getLength: function () {
    return this.length;
  },
};

// new keyword and object constructor
const student = new Object();

student.grade = 12;
student.gradePointAverage = 3.7;
student.classes = ["English", "Math", "Science"];
student.getClasses = function () {
  return this.getClasses;
};

console.log(student);

// constructor function

function Car(color, brand, year) {
  this.color = color;
  this.brand = brand;
  this.year = year;
}

Car.prototype.getColor = function () {
  return this.color;
};

const adriansCar = new Car("silver", "Honda", "2020");
const mikesCar = new Car("black", "toyota", "2014");

console.log(
  "Get Adrian's car: %s \nGet car color: %s ",
  adriansCar,
  adriansCar.getColor()
);
console.log("Get Mike's car: ", mikesCar);

function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

const user1 = new User("John", "Smith", 26, "male");
let user200 = new User("Jill", "Robinson", 25, "female");
console.log("user1:\n %s \n user200:\n %s", user1, user200);
