// const user1 = {
//   firstName: "harshit",
//   age: 8,
//   about: () => {
// console.log(this);
// console.log(this.firstName, this.age);
//   },
// };

const user1 = {
  firstName: "harshit",
  age: 8,
  about() {
    // console.log(this);
    console.log(this.firstName, this.age);
  },
};

user1.about();
