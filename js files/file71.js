// methods
// function inside object

function personInfo() {
  console.log(`person name is ${this.firstNama} and perosn age is ${this.age}`);
  //   console.log(this.firstNama, this.age);
}

const person1 = {
  firstNama: "harshit",
  age: 7,
  about: personInfo,
};

const person2 = {
  firstNama: "rohit",
  age: 5,
  about: personInfo,
};

const person3 = {
  firstNama: "sj",
  age: 17,
  about: personInfo,
};
// console.log(person.about);
// person.about();

// personInfo();
person1.about();
person2.about();
person3.about();
