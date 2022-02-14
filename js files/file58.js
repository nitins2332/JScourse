// filter method

const numbers = [2, 4, 7, 8, 6, 3, 54, 6, 8, 3, 4];

const isOdd = function (number) {
  return number % 2 !== 0;
};

const evenNumber = numbers.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumber);
