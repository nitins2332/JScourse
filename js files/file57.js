// map method

// const numbers = [3, 3, 5, 657, 45, 5];

// const square = function (number) {
//   return number * number;
// };

// const squareNumber = numbers.map((number, index) => {
//   return ` index : ${index}, and ans ${number * number}`;
// });

// console.log(squareNumber);

const users = [
  { firstName: "harsht", age: 23 },
  { firstName: "rohit", age: 21 },
  { firstName: "raj", age: 45 },
  { firstName: "sj", age: 32 },
];

const userNames = users.map((user) => {
  //   console.log(user.firstName);
  return user.firstName;
});

console.log(userNames);
