this.distance = 10000;

const roadTrip1 = {
  distance: 3000,
  getDistance: function (unit, caption) {
    return this.distance + unit + caption;
  },
};

const roadTrip2 = {
  distance: 5000,
};

// bind method allows you to bind a function to a certain this context also allows you to define parameters you want to remain constant
const getTripDistance = roadTrip1.getDistance.bind(roadTrip1, "km");

console.log(getTripDistance(" in total"));

const account1 = {
  name: "jen",
  totalAmount: 5000,
  deductAmount: function (amount) {
    this.totalAmount -= amount;
    return `${this.name}, total ammount after withdawing $${amount} is $${this.totalAmount} `;
  },
};

const account2 = {
  name: "James",
  totalAmount: 8000,
};

const withdrawFromAccount = function (amount) {
  return account1.deductAmount.bind(account2, amount);
};

console.log(withdrawFromAccount(500)());
