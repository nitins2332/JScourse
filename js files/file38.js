//  how to iterate object

const person = {
  name: "harshit",
  age: 22,
  "person hobbies": ["guitar", "sleeping", "listening music"],
};

// for in loop

// for (let key in person) {
//     //   console.log(`${key} : ${person[key]}`);
//     console.log(key, person[key]);
// }

// object.key
// console.log(Object.keys(person));
// console.log(typeof Object.keys(person));
// console.log(Array.isArray(person));

for (let key of Object.keys(person)) {
  console.log(`${key} : ${person[key]}`);
}
