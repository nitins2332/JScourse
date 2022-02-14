function createUser(firstName, lastName, email, age, address) {
  const user = Object.create(createUser.prototype);
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  return user;
}
// console.log(createUser.prototype);

createUser.prototype.about = function () {
  return `${this.firstName} is ${this.age} years olds`;
};

createUser.prototype.is18 = function is18() {
  return this.age >= 18;
};

createUser.prototype.sing = function () {
  return "lalala lori dhudh ki katori";
};

const user1 = createUser(
  "harshit",
  "vashisith",
  "abc@gmail.com",
  120,
  "house number 13, gali number  34"
);

const user2 = createUser(
  "rohit",
  "sahu",
  "abcd@gmail.com",
  240,
  "house number 1345, gali number  23"
);

const user3 = createUser(
  "sj",
  "satu",
  "dgdf@gmail.com",
  80,
  "house in allahabad"
);

for (let key in user1) {
  //   console.log(key);
  if (user1.hasOwnProperty(key)) {
    console.log(key);
  }
}

// console.log(user1);
// console.log(user1.is18());
