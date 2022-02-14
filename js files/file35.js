// array destructuring

const myArray = ["value1", "value2", "value3", "value4"];

// let index1 = myArray[0];
// let index2 = myArray[1];

// console.log(index1, index2);

let [myvar1, myvar2, ...myNewArray] = myArray;
// let myNewArray = myArray.slice(2);
console.log(myvar1);
console.log(myvar2);

console.log(myNewArray);
