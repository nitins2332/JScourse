// difference between dot and breaket notation
const key = "email";

const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

console.log(person["person hobbies"]);

person[key] = "abc@gmail.com";

console.log(person);
