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
const value1 = false;
const value2 = 4 < 2;

// ||(or), finds the first truthy value
console.log(`or : ${value1 || value2 || check()}`);
function check() {
  for (let i = 0; i < 10; i++) {
    //wasting time
    console.log("😱");
  }
  return true;
}
