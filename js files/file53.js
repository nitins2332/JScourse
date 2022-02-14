// perameters destructuring

// object
// react
const person2 = {
  firstName: "rohit",
  gender: "male",
};

const person = {
  firstName: "harshit",
  gender: "male",
};

// function printDatails(obj) {
//   console.log(obj.firstName);
//   console.log(obj.gender);
// //   console.log(obj.age);
// }

function printDatails({ firstName, gender, age }) {
  console.log(firstName);
  console.log(gender);
  console.log(age);
}

printDatails(person2);
