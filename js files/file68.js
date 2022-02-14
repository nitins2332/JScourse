// maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate kays are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key

// in maps you can use anything as kay
// like array, number, string

// const person = new Map();
// person.set("firstName", "harshit");
// person.set("age", 7);
// person.set(1, "one");
// person.set([1, 2, 3], "onetwothree");
// console.log(person);
// console.log(person.get(1));
// console.log(person.keys());

// for (let key of person.keys()) {
//   console.log(key, typeof key);
// }

// for (let [key, value] of person) {
//   console.log(key, value);
// }

const person1 = {
  id: 1,
  firstName: "harshit",
};

const person2 = {
  id: 2,
  firstName: "rohit",
};

// console.log(person1);

const userInfo = new Map();
userInfo.set(person1, { age: 6, gender: "male" });
userInfo.set(person2, { age: 5, gender: "male" });

console.log(userInfo);
console.log(person1.id);
console.log(userInfo.get(person1).gender);
console.log(userInfo.get(person2).age);

// const person = new Map([
//   ["firstName", "harshit"],
//   ["age", 7],
// ]);

// console.log(person);
