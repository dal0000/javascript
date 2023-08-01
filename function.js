"use strict";

//Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - perform a task or calculates a value

// 1. Function declaration
// function name(param1, param2){body... return;}
// one function === one thing
// naming: doSomething, commang, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS

function printHello() {
  console.log("Hello");
}
printHello();

function log(message) {
  console.log(message);
}
log("Hello@");

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

function changeName(obj) {
  obj.name = "coder";
}
const ellie = { name: "ellie" };
changeName(ellie);
console.log(ellie);

// 3. Default parameters (added in ES6)
function showMessage(message, from = "unknown") {
  console.log(`${message} by ${from}`);
}
showMessage("Hi!");

// 4. Rest parameters (added in ES6)
function printAll(...args) {
  for (const arg of args) {
    console.log(arg);
    console.log("=====");
  }
}
printAll("dream", "coding", "ellie");

// 5. Local scope
let globalMessage = "global"; //global variable
function pringtMessage() {
  let message = "Hello";
  console.log(message);
  console.log(globalMessage);
}
pringtMessage();
//console.log(message); // message is not defined

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. Early return, early exit
//bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}
//good
function upgradeUser(user) {
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function

// 1. Function expression
// a function declaration can be called eartlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.

const print = function () {
  //anonymous function
  console.log("print");
};
print();
const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
  if (answer === "love you") {
    printYes();
  } else {
    printNo();
  }
}
// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print() {
  console.log("no!");
};
randomQuiz("wrong", printYes, printNo);
randomQuiz("love you", printYes, printNo);

// Arrow function
// always anonymous
const simplePrint = function () {
  console.log("simplePrint!");
};
const simplePrintArrow = () => console.log("simplePrint!");
simplePrint();
simplePrintArrow();

// IIFE: Immediate Invoked Function Expression
(function hello() {
  console.log("IIFE");
})();
hello();
