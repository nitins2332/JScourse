const userMethods = {
  about: function () {
    return `${this.firstName} is ${this.age} years olds`;
  },
  is18: function () {
    return this.age >= 18;
  },
};

function createUser(firstName, lastName, email, age, address) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.email = email;
  user.age = age;
  user.address = address;
  user.about = userMethods.about;
  user.is18 = userMethods.is18;
  return user;
}

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

// const userAbout = user1.about();
// const userAbout = user2.about();
// const userAbout = user3.about();
console.log(user1);
console.log(user2);
console.log(user3);
