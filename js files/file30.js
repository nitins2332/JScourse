// for loop in array

let fruits = ["apple", "mango", "grapes", "banana"];

// for (let i = 0; i <= 9; i++) {
//   console.log(i);
// }

// console.log(fruits.length);
// console.log(fruits[0]);
// console.log(fruits[fruits.length - 1]);

let array2 = [];
for (let i = 0; i < fruits.length; i++) {
  array2.push(fruits[i].toUpperCase());
}

console.log(array2);
