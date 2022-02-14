// function

function singHappyBirthday() {
  console.log("happy birthday to you ......");
}

singHappyBirthday();

function sumTwoNumbers(number1, number2) {
  return number1 + number2;
}

function sumThreeNumbers(number1, number2, number3) {
  return number1 + number2 + number3;
}

const returnValue = sumTwoNumbers(4, 8);

const return3SumValue = sumThreeNumbers(3, 5, 12);

// console.log(returnValue);
// console.log(return3SumValue);

// isEven
// input : 1 number
// output : true , false
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4));

function firstChar(anyString) {
  return anyString[0];
}
console.log(firstChar("and"));

// function
// input : array , target (number)
// output : index of target if target present in array

function findTarget(searchArray, target) {
  for (let i = 0; i < searchArray.length; i++) {
    if (searchArray[i] === target) {
      return i;
    }
  }
  return -1;
}

const myArray = [1, 2, 4, 5, 23, 67, 87, 45, 56];
const ans = findTarget(myArray, 44);
console.log(ans);
