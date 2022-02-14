// sort method
// ASCIT TABLE
// char : ascii value

// console.log(numbers);

// const userNames = ["harshit", "abcd", "AFGHD", "mohit", "nitish"];
// userNames.sort();
// console.log(userNames);

// const numbers = [2, 5, 6, 4546, 4000, 34332];
// numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(numbers);

const products = [
  { productId: 1, productName: "p1", price: 340 },
  { productId: 2, productName: "p2", price: 3000 },
  { productId: 3, productName: "p3", price: 3340 },
  { productId: 4, productName: "p4", price: 40 },
  { productId: 5, productName: "p5", price: 840 },
];

// low to high
const lowToHigh = products.slice(0).sort((a, b) => {
  return a.price - b.price;
});

const highToLow = products.slice(0).sort((a, b) => {
  return b.price - a.price;
});

console.log(lowToHigh);
console.log(highToLow);
