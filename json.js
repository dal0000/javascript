"use strict";

// JSON
// Javascript Object Notation

// 1. Object to JSON
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json, true);

json = JSON.stringify(["apple", "banana"]);
console.log(json);

const rabbit = {
  name: "tori",
  color: "white",
  size: null,
  birthDate: new Date(),
  symbol: Symbol("id"),
  jump: () => {
    console.log(`${this.name} can jump`);
  },
};
json = JSON.stringify(rabbit);
console.log(json);
json = JSON.stringify(rabbit, ["name"]);
console.log(json);
json = JSON.stringify(rabbit, ["name", "color"]);
console.log(json);
json = JSON.stringify(rabbit, (key, value) => {
  return key === "name" ? "ellie" : value;
});
console.log(json);

// 2. JSON to Object
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  return key === "birthDate" ? new Date(value) : value;
});

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());
