//curried version of tripple add function
function tripleAdd(num1) {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
}

function trippleAdd1(num1, num2, num3) {
  return num1 + num2 + num3;
}

let answer = tripleAdd(10)(20)(30); // returns 60
console.log('Curried function:', answer);
answer = trippleAdd1(10, 20, 30);
console.log('Plain ole function:',answer);
