"use strict";
// Object-oriented programming
// class : template
// object : instance of a class
// JavaScript classes
//  - introduced in ES6
//  - syntactical sugar over prototype-based inheritance

class Person {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person("ellie", 20);
console.log(ellie.name, ellie.age);
ellie.speak();

// 2. Getter and setters
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  get age() {
    return this._age;
  }
  set age(value) {
    return (this._age = value < 0 ? 0 : value);
  }
}
const user1 = new User("Steve", "Job", -1);
console.log(user1.age);

// getter, setter 보충수업 -> programming with mosh 채널
const person = {
  firstName: "Mosh",
  lastName: "Hamedani",
  //fullName: function() {
  get fullName() {
    return `${person.firstName} ${person.lastName}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
console.log(person.fullName);
person.fullName = "Dale Jang";
console.log(person.fullName);

// 3. Fields(public, private)
// Too soon!

class Experiment {
  publicField = 2;
  #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4. Static properties and methods
// Too soon!

class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}
const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance
// a way for one class to extend another class

class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color!`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log("🔺");
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `Triangle: color: ${this.color}`;
  }
}
const rectangle = new Rectangle(3, 3, "red");
const triangle = new Triangle(3, 3, "blue");
rectangle.draw();
console.log(rectangle.getArea());
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //t
console.log(triangle instanceof Rectangle); //f
console.log(triangle instanceof Triangle); //t
console.log(triangle instanceof Shape); //t
console.log(triangle instanceof Object); //t

console.log(triangle.toString()); //t
