"use strict";
// 01. make a string out of an array
{
  const fruits = ["apple", "banana", "orange"];
  const fruitsString = fruits.join();
  console.log(fruitsString);
}

// 02. make an array out of a string
{
  const fruits = "🍓, 🍑, 🍋";
  const results = fruits.split(",");
  console.log(results);
}

// 03. make this array look like this : [5,4,3,2,1]
{
  const array = [1, 2, 3, 4, 5];
  array.reverse();
  console.log(array);
}

// 04. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
}
