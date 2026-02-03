/* Question 1
Create a object calculator, which will have methods read,add,subtract and multiply. read method will use prompt to ask two values from user.
*/

let calculator = {
  num1: 0,
  num2: 0,

  // Read values using prompt
  read: function () {
    this.num1 = Number(prompt("Enter first number:"));
    this.num2 = Number(prompt("Enter second number:"));
    this.display();
  },

  // add function
  add: function () {
    return this.num1 + this.num2;
  },
  // subtract function
  subtract: function () {
    return this.num1 - this.num2;
  },
  // multiply function
  multiply: function () {
    return this.num1 * this.num2;
  },
  // Displaying result on page
  display: function () {
    document.getElementById("calcres").innerHTML =
      "Addition: " + this.add() + "<br>" +
      "Subtraction: " + this.subtract() + "<br>" +
      "Multiplication: " + this.multiply();
  }
};





/* Question 2
Create an object temperatureConverter with methods:*/

let temperatureConverter = {
  celsius: 0,

  // a) read() → Asks the user to enter a temperature in Celsius.
  read: function () {
    this.celsius = Number(prompt("Enter temperature in Celsius:"));
    this.display();
  },

  // b) toFahrenheit() → Converts it to Fahrenheit.
  toFahrenheit: function () {
    return (this.celsius * 9 / 5) + 32;
  },

  // c) toKelvin() → Converts it to Kelvin.
  toKelvin: function () {
    return this.celsius + 273.15;
  },

  // d) display() → Displays the results in the console.
  display: function () {
    console.log("Temperature in Celsius:", this.celsius);
    console.log("Temperature in Fahrenheit:", this.toFahrenheit());
    console.log("Temperature in Kelvin:", this.toKelvin());
  }
};



/* Question 3
d) Modify the code to use let instead of var and 
observe any differences.
*/

// let x = 5;

// function first() {
//   console.log(x); // Line 1
//   let y = 10;

//   function second() {
//     console.log(y); // Line 2
//     console.log(z); // Line 3 
//     let z = 20;
//   }

//   second();
// }

// first();
// console.log(y); // Line 4 