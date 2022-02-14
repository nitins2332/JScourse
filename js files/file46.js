// arrow functions

// const singHappyBirthday = function () {
//   console.log("happy birthday to you ......");
// };

const singHappyBirthday = () => {
  console.log("happy birthday to you");
};

singHappyBirthday();

// const sumThreeNumber = function (number1, number2, number3) {
//   return number1 + number2 + number3;
// };

const sumThreeNumber = (number1, number2, number3) => {
  return number1 + number2 + number3;
};

const ans = sumThreeNumber(3, 6, 7);
console.log(ans);

const isEven = (number) => number % 2 === 0;

console.log(isEven(3));

const firstChar = (anyString) => anyString[0];

console.log(firstChar("ahdgf"));

const findTarget = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

console.log(findTarget([1, 3, 6, 8], 6));
