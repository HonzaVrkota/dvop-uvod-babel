"use strict";

var newName = "John Doe";
var person = {
  name: "Jane Doe",
  age: 10,
  status: "single"
};
var age = person.age,
    deststructName = person.name,
    status = person.status;
console.log("Person age: ".concat(age, " - ").concat(deststructName, " - ").concat(status));
age > 10 ? console.log("Person is older then 10") : console.log("Person is younger than 10 or 10");

var getName = function getName() {
  console.log(newName);
};