//

// const user1 = {
//   firstName: "harshit",
//   lastName: "vashishta",
//   email: "abc@gmail.com",
//   age: 3,
//   address: "House Number, colony , pincode, state",
//   about: function () {
//     return `${this.firstName} is ${this.age} years olds`;
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
// };

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = function () {
    return `${this.firstName} is ${this.age} years olds`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };
  return user;
}

const user1 = createUser(
  "harshit",
  "vashisith",
  "abc@gmail.com",
  120,
  "house number 13, gali number  34"
);

console.log(user1);

const is18 = user1.is18();
console.log(is18);

const about = user1.about();
console.log(about);

// const aboutUser = user1.about();
// console.log(aboutUser);
