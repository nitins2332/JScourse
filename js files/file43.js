// nested destructuring

const users = [
  { user: 1, firstName: "harshit", gender: "male" },
  { user: 2, firstName: "rohit", gender: "male" },
  { user: 3, firstName: "anjali", gender: "female" },
];

const [{ firstName: userFirstName, user }, , { gender: user3gender }] = users;

console.log(userFirstName);
console.log(user);
console.log(user3gender);
