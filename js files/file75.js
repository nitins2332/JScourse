// arrow function

const user1 = {
  firstName: "harshit",
  age: 8,
  about: () => {
    // console.log(this);
    console.log(this.firstName, this.age);
  },
};

user1.about.call(user1);

// arraw function ke liye this ek level uper hota hai
