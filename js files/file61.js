// find method

const myArray = ["hello", "cat", "dog", "lion"];

// function isLength3(string) {
//   return string.length === 3;
// }

// const ans = myArray.find((string) => {
//   return string.length === 4;
// });
// console.log(ans);
// const ans = isLength3("dog");
// console.log(ans);

const users = [
  { userId: 1, userName: "harshit" },
  { userId: 2, userName: "rohit" },
  { userId: 3, userName: "sj" },
  { userId: 4, userName: "shv" },
  { userId: 5, userName: "raj" },
];

const myUser = users.find((user) => user.userId === 3);

console.log(myUser);
