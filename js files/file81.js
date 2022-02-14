function hello() {
  console.log("hello world");
}

// const hello = { key1: "value1" };

// hello();

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// name property ---> tells functions name

// function provides more usefull properties

// console.log(hello.prototype); // {}

// only function provide prototype property

// if (hello.prototype) {
//   console.log("prototype is present");
// } else {
//   console.log("prototype is not present");
// }

hello.prototype.abc = "abc";
hello.prototype.xyz = "xyz";
hello.prototype.sing = function () {
  return "lallala";
};

console.log(hello.prototype.sing());
