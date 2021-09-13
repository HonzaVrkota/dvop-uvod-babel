
let newName = "John Doe";


// Objekt
const person = {
  name: "Jane Doe",
  age: 10,
  status: "single",
};

const { age, name: deststructName, status } = person;

console.log(`Person age: ${age} - ${deststructName} - ${status}`);


age > 10
  ? console.log("Person is older then 10")
  : console.log("Person is younger than 10 or 10");

const getName = () => {
  console.log(newName);
};
