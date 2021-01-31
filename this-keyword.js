const house = {
  price: 100000,
  squareFeet: 2000,
  owner: "Taylor",
  getPricePerSquareFoot: function () {
    return this.price / this.squareFeet;
    // this keyword refers to the object that it is the context of
    //return house.price / house.squareFeet;
  },
};

console.log(house.price);
console.log(house.getPricePerSquareFoot());
