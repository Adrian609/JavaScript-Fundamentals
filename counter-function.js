function counterFunction() {
  let count = 0;

  // create closure to create additional logic
  return () => {
    count++;
    return count;
  };
}

const instanceOne = counterFunction();
const instanceTwo = counterFunction();

console.log("Instance 1: ", instanceOne()); // expected 1
console.log("Instance 1: ", instanceOne());
console.log("Instance 1: ", instanceOne());
console.log("Instance 2: ", instanceTwo());
console.log("Instance 1: ", instanceOne());
console.log("Instance 2: ", instanceTwo());
