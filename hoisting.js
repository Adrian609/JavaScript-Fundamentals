/*
Hoisting: Variables and functions are declared at the top of the scope that tehy are declared in. 
Wether that be the global scope, function scope, block scope depending on the keyword used to define them
*/

console.log(color); // expected undefined
var color = "blue"; // color is defined
console.log(color); // color had been defined and displayed

// Console log getProducts 2 will work as expected since it is declared and hoisted at the top of the scope
console.log(getProduct2(2, 3));

//console.log(getProduct(2, 3)); will throw error, getProduct is hoisted to the top of the file but not defines

//using function expression
var getProduct = (num1, num2) => {
  return num1 * num2;
};

console.log(getProduct(2, 3));

// using a function declaration will decalare and define the fucntion when hoisted
function getProduct2(num1, num2) {
  return num1 * num2;
}
