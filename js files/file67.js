// Sets (it is iterable)
// store data
// sets also have its oen methods
// no index-based access
// Order is not guaranted
// uniqui items only (no duplicates allowed)

// const numbers = [1,2,3]
const items = ["item1", "item2", "item3"];

const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);
numbers.add(5);
numbers.add(6);
numbers.add(7);
numbers.add(items);
// if (numbers.has(1)) {
//   console.log("1 in present");
// } else {
//   console.log("1 is not present");
// }

// for (let number of numbers) {
//   console.log(number);
// }

const myArray = [1, 2, 3, 4, 2, 3, 4, 1, 6, 5, 7, 2, 67, 3, 2, , 3];

const uniqeElement = new Set(myArray);
console.log(uniqeElement);
console.log(myArray);

let length = 0;

for (let element of uniqeElement) {
  length++;
}

console.log(length);
