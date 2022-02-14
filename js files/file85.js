// let numbers = new Array(1, 2, 3);
// console.log(Array.prototype);

let numbers = [1, 2, 3];
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

console.log(Array.prototype);

function hello() {
  console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push("1");
console.log(hello.prototype);
