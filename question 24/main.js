"use strict";
//  Define veriable

let apple = "apple";
let UppercaseApple = "Apple";
let Ten = 10;
let Twenty = 20;
let fruits = ["apple","banana","orange","mango"];


console.log("Is apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

// Tests using lowercase function
console.log("\nIs Apple is equal to apple after converting to lowercase?");
console.log(UppercaseApple.toLowerCase() == "apple");

console.log("\nIs Apple is not equal to apple after converting to lowercase?") ;
console.log(UppercaseApple.toLowerCase() != "apple");

// Numerial tests
console.log("\n Is Ten is equal to Twenty?");
console.log(Ten == Twenty);

// not equal
console.log("\n Is Ten is not equal to Twenty?");
console.log(Ten != Twenty);

// greater than zero
console.log("\nIs Ten is greater than zero?");
console.log(Ten > 0);

// less than
console.log("\nIs Twenty is less than 10");
console.log(Twenty < 10)