"use strict";
//1. String concatenation
console.log("my" + "cat");
console.log("1" + 2);
console.log(`string literals: 1+2=${1 + 2}`);
console.log("Ellie's \nbook");

// 2. Numeric operators
console.log(1 + 1); //add
console.log(1 - 1); //subtract
console.log(1 / 1); //divide
console.log(1 * 1); //multiply
console.log(5 % 3); //remainder
console.log(2 ** 3); //exponentiation

// 3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
// counter = counter +1 ;
// preIncrement = counter;
console.log(`preIncrement : ${preIncrement}, counter: ${counter}`);

const postIncrement = counter++;
// counter = counter +1 ;
// preIncrement = counter;
console.log(`preIncrement : ${postIncrement}, counter: ${counter}`);

// 4. Assignment operators
let x = 3;
let y = 6;
x += y;
console.log(`x:${x}, y:${y}`);
x -= y;
console.log(`x:${x}, y:${y}`);
x *= y;
console.log(`x:${x}, y:${y}`);
x /= y;
console.log(`x:${x}, y:${y}`);

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = true;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);

// &&(and), finds the first falsy value
console.log(`and : ${value1 && value2 && check()}`);

// often used to compress long if-statement
// nullableObject && nullableObject.something
// if (nullableObject != null) {
//   nullableObject.something;
// }

function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}

// 7. Equality
const stringFive = "5";
const numberFive = 5;
// loose equality, with type conversion
console.log(stringFive == numberFive);

// strict equality, no type conversion
console.log(stringFive === numberFive);

// object equality by reference
const ellie1 = { name: "ellie" };
const ellie2 = { name: "ellie" };
const ellie3 = ellie1;
console.log(ellie1 == ellie2);
console.log(ellie1 === ellie2);
console.log(ellie1 === ellie3);

// equality - puzzler
console.log("=========");
console.log(0 == false); //true
console.log(0 === false); //false
console.log("" == false); //true
console.log("" === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

// conditional operator
// if, else if, else
const name = "ellie";
if (name === "ellie") {
  console.log("Welcome, Ellie!");
} else if (name == "coder") {
  console.log("You are amazing coder");
} else {
  console.log("unknown");
}

// 9. Ternery operator: ?
// condition? value1:value2;
console.log(name === "ellie" ? "yes" : "no");

// 10. Switch statement
const browser = "Chrome";
switch (browser) {
  case "IE":
    console.log("go away!");
    break;
  case "Chrome":
  case "Firefox":
    console.log("I love you!");
    break;
  default:
    console.log("same all!");
    break;
}

// 11. Loops
// while loop, while the condition is truthy,
// body code is executed
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

//for loop, for(begin;condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline varible for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// break, continue
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
for (let i = 0; i < 11; i++) {
  if (i <= 0) continue;
  if (i % 2 === 1) continue;
  console.log(i);
}

// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
for (let i = 0; i < 11; i++) {
  if (i > 8) break;
  console.log(i);
}
