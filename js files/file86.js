// class keyword
// class are fake

class CreateUser {
  constructor(firstName, lastName, email, age, address) {
    // console.log("Constructor called");
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
  }

  about() {
    return `${this.firstName} is ${this.age} years olds`;
  }
  is18() {
    return this.age >= 18;
  }
  sing() {
    return "lalala lori dhudh ki katori";
  }
  func(a) {
    console.log(a);
  }
}

// function CreateUser(firstName, lastName, email, age, address) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.email = email;
//   this.age = age;
//   this.address = address;
//   return this;
// }
// // console.log(createUser.prototype);

// CreateUser.prototype.about = function () {
//   return `${this.firstName} is ${this.age} years olds`;
// };

// CreateUser.prototype.is18 = function is18() {
//   return this.age >= 18;
// };

// CreateUser.prototype.sing = function () {
//   return "lalala lori dhudh ki katori";
// };

const user1 = new CreateUser(
  "harshit",
  "vashisith",
  "abc@gmail.com",
  120,
  "house number 13, gali number  34"
);

const user2 = new CreateUser(
  "rohit",
  "sahu",
  "abcd@gmail.com",
  240,
  "house number 1345, gali number  23"
);

const user3 = new CreateUser(
  "sj",
  "satu",
  "dgdf@gmail.com",
  80,
  "house in allahabad"
);

// console.log(user3.is18());
// console.log(Object.getPrototypeOf(user1));

user1.func("harshit");
// console.log(user1);
// console.log(user1.is18());
