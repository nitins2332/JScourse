// some method

const number = [3, 54, , 87, 56, 3];

// const ans = number.some((number) => number % 2 === 0);
// console.log(ans);

const userCart = [
  { productId: 1, productName: "mobile", price: 12000 },
  { productId: 2, productName: "laptop", price: 22000 },
  { productId: 3, productName: "TV", price: 15000 },
  { productId: 4, productName: "macbook", price: 25000 },
];

const ans = userCart.some((cartItem) => cartItem.price > 100000);

console.log(ans);
