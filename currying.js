//currying

function getProduct(num1) {
  return function getProduct2(num2) {
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
  return function (speed) {
    return distance / speed;
  };
}

const travelTimeBosNyc = getTravelTime2(400);
const travelTimeMiamiAtlanta = getTravelTime2(600);

console.log(travelTimeBosNyc(80));
console.log(travelTimeMiamiAtlanta(80));
