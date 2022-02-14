// important array methods

// forEach
// map
// filter
// reduce

const number = [2, 4, 5, 6];

// function multiplyBy2(number, index) {
//   console.log(`index is ${index} number is ${number}`);
//   console.log(`${number}*2 = ${number * 2} `);
// }

// for (let i = 0; i < number.length; i++) {
//   console.log(i);
//   multiplyBy2(number[i], i);
// }

// number.forEach(function (number, index) {
//   console.log(`index is ${index} number is ${number}`);
// });

// number.forEach(function (number) {
//   console.log(`number is ${number} and the ans is ${number * 2}`);
// });

const users = [
  { firstName: "harsht", age: 23 },
  { firstName: "rohit", age: 21 },
  { firstName: "raj", age: 45 },
  { firstName: "sj", age: 32 },
];

// users.forEach(function (user) {
//   console.log(user.firstName);
// });

// for (let user of users) {
//   console.log(user.firstName);
// }

// users.forEach((user) => {
//   console.log(user.firstName);
// });

users.forEach((user) => {
  console.log(user.firstName);
});
