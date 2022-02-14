// function expression
// function singHappyBirthday() {
//   console.log("happy birthday to you ......");
// }

const singHappyBirthday = function () {
  console.log("happy birthday to you ......");
};

singHappyBirthday();

// function sumThreeNumbers(number1, number2, number3) {
//   return number1 + number2 + number3;
// }

const sumThreeNumber = function (number1, number2, number3) {
  return number1 + number2 + number3;
};

console.log(sumThreeNumber(3, 4, 5));

// function isEven(number) {
//   return number % 2 === 0;
// }

const isEven = function (number) {
  return number % 2 === 0;
};

console.log(isEven(4));

// function firstChar(anyString) {
//   return anyString[0];
// }

const firstChar = function (anyString) {
  return anyString[0];
};
console.log(firstChar("anrdretd"));

const findTarget = function (array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};
