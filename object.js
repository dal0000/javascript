"use strict";

// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = {key : value}

// 1. Literals and properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}
const ellie = { name: "ellie", age: 4 };
print(ellie);

// with JavaScript magic (dynamically typed language)
// can add, delelte properties later
ellie.hasJob = true;
console.log(ellie.hasJob);
delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed properties
// key should be always string
console.log(ellie.name);
console.log(ellie["name"]);
ellie["hasJob"] = true;
console.log(ellie.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(ellie, "name");
printValue(ellie, "age");

// 3. Property value shorthand
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 4 };
const person4 = new Person("ellie", 30);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}
console.log(person4);

// 5. in operator : property existence check (key in obj)
console.log("name" in ellie);
console.log("age" in ellie);
console.log("random" in ellie);
console.log(ellie.random);

// 6. for..in vs for..of
// for (key in obj)
for (const key in ellie) {
  console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for (const value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: "ellie", age: "20" };
const user2 = user;

console.log(user.name);

// old way
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.log(user3);

// new way
const user4 = Object.assign({}, user);
console.log(user4);

//another example
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const fruit3 = { color: "black" };
const mixed = Object.assign({}, fruit1, fruit2, fruit3);
console.log(mixed);
