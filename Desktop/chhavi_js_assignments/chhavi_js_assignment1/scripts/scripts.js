/* Question 1
Prompt for amount, interest rate and no. of years and calculate simple interest.
*/

// // Input fields for user
let principal = prompt("Enter the principal amount:");
let rate = prompt("Enter the interest rate:");
let time = prompt("Enter number of years:");

// Converting string input to numbers
principal = Number(principal);
rate = Number(rate);
time = Number(time);

// Calculate Simple Interest
let simpleInterest = (principal * rate * time) / 100;

// Display result
alert("Simple Interest is: " + simpleInterest);



/* Question 2
Is palindrome string
*/

// let str = prompt("Enter a string:");

// // Converting to lowercase
// let lowercaseStr = str.toLowerCase();

// // Reverse the string using split, reverse and join 
// let reversedStr = lowercaseStr.split("").reverse().join("");

// // Check palindrome or not
// if (lowercaseStr === reversedStr) {
//   alert("The string is a palindrome");
// } else {
//   alert("The string is NOT a palindrome");
// }




/* Question 3
Area of circle 
*/

function calculateArea() {
  let radius = document.getElementById("radius").value;

  // Convert to number
  radius = Number(radius);

  // Area of circle formula: πr*r
  let area = Math.PI * radius * radius;

  document.getElementById("result").innerText =
    "Area of the circle is: " + area.toFixed(2);
}



/* Question 4
Copy information of one object to another and log it to console.
*/

let obj1 = {
  name: "Chhavi",
  age: 22
};

let obj2 = Object.assign({}, obj1);

// console.log("This is copied from obj1:", obj2);


/* Question 5
create a list of objects of Employee with info as follow :*/

// a) Name, age, salary ,DOB
let employees = [
  { name: "Ram", age: 25, salary: 6000, dob: "2002-05-10" },
  { name: "Neha", age: 22, salary: 4500, dob: "2003-03-15" },
  { name: "Raj", age: 23, salary: 8000, dob: "2004-07-20" },
  { name: "Sneha", age: 21, salary: 900, dob: "2003-01-12" },
  { name: "Kriti", age: 23, salary: 950, dob: "2001-09-05" }
];

console.log("All Employees:", employees);




// b) filter all employees with salary greater than 5000
let highSalaryEmployees = [];

for (let emp of employees) {
  if (emp.salary > 5000) {
    highSalaryEmployees.push(emp);
  }
}

console.log("Employees with salary > 5000:", highSalaryEmployees);



// c) group employee on the basis of their age
let groupedByAge = employees.reduce((result, employee) => {
  let age = employee.age;
  if (result[age] === undefined) {
    result[age] = [];
  }
  result[age].push(employee);
  return result;
}, {});

console.log("Employees grouped by age:", groupedByAge);




// d) fetch employees with salary less than 1000 and age greater than 20. Then give them an increment 5 times their salary.

let updatedEmployees = employees
  .filter(emp => emp.salary < 1000 && emp.age > 20)
  .map(emp => {
    return {
      ...emp,
      salary: emp.salary * 5
    };
  });

console.log("Employees after salary increment:", updatedEmployees);



