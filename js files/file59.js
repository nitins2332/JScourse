// reduce method

const numbers = [1, 3, 6, 7, 3];

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 100);

console.log(sum);

// accumulator   ,  currentvalue,    return
//    0                 1              1
//    1                 3              4
//    4                 6              10
//    10                7              17
//    17                3              20

const userCart = [
  { productId: 1, productName: "mobile", price: 15000 },
  { productId: 2, productName: "laptop", price: 120000 },
  { productId: 3, productName: "TV", price: 35000 },
];

const sumOfProduct = userCart.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);

console.log(sumOfProduct);
