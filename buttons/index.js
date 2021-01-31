function createButtons() {
  //replaced var i to use let i
  for (let i = 1; i <= 5; i++) {
    let body = document.getElementsByTagName("BODY")[0];
    let button = document.createElement("BUTTON");

    button.innerHTML = "Button " + i;
    // Option #1: in IFFE to pass the current value of 'i' in each iteration
    // which is i is being passed as the parameter num
    // ((num) => {
    //   button.onclick = () => {
    //     alert("This is a button " + num);
    //   };
    // })(i);

    // Option #2: replaced IIFE with function
    // addClickFunctionality(button, num)

    //option #3: use let variable instead of var to update button
    // var uses function scope, while let used block scope, allowing us to update i on each pass of the for loop
    button.onclick = () => {
      alert("This is a button " + i);
    };

    body.appendChild(button);
  }
}

createButtons();

function addClickFunctionality(button, num) {
  button.onclick = () => {
    alert("This is a button " + num);
  };
}
