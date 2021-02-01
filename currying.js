//currying

function getProduct(num1) {
  return (num2) => {
    return num1 * num2;
  };
}

console.log(getProduct(10)(20));

function getTravelTime(distance, speed) {
  return distance / speed;
}

console.log(getTravelTime(600, 50));

// currying travel time function
function getTravelTime2(distance) {
  return (speed) => {
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime2(400);
const travelTimeMiamiAtlanta = getTravelTime2(600);

console.log(travelTimeBosNyc(80));
console.log(travelTimeMiamiAtlanta(80));

// create a function that can be singly or doubly invoked

/*
getTotal():
calls the argument keyword and saves arguments to arg
if the number of arguments is equal to 2 returns the total of index 1 and 2
else if the arguments is 1 it returns another function passing the scond value
returning the total of both values
*/
function getTotal() {
  let args = Array.prototype.slice.call(arguments);

  if (args.length == 2) return args[0] + args[1];
  else if (args.length == 1) {
    return (num2) => {
      return args[0] + num2;
    };
  }
}

console.log("getTotal: ", getTotal(10, 20));
console.log("getTotal: ", getTotal(5, 40));
console.log("getTotal: ", getTotal(10)(20));
