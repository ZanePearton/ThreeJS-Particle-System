// Example 1: var
var myVar = "Hello, world!";

function myFunction() {
  console.log(myVar); // Output: "Hello, world!"
}

console.log(myVar); // Output: "Hello, world!"
myFunction(); // calls the function

// Example 2: const
const myConst = "Hello, world!";

function myFunction() {
  console.log(myConst); // Output: "Hello, world!"
}

console.log(myConst); // Output: "Hello, world!"
myFunction(); // calls the function

// This will throw a TypeError, since a const variable cannot be reassigned.
myConst = "Goodbye, world!";
