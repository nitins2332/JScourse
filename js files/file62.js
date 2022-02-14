// every method

// const numbers = [3, 5, 6, 7, 53, 5, 7];

// function isEven(number) {
//   return number % 2 === 0;
// }

// const ans = numbers.every(isEven);

// console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "TV", price: 15000 },
];

const ans = userCart.every((cartItem) => cartItem.price < 20000);

// const ans2 = userCart.find((itemPrice)=>cartItem.price>20000)

console.log(ans);
