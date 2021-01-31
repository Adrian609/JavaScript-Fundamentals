// function doubleNumber(num) {
//   return num * 2;
// }

// IIFE function
// IIFE function reserves a private scope inside the function or file
(function doubleNumber(num) {
  return num * 2;
})(10); // define the function, wrapped in () and imediately execute passing (10)
