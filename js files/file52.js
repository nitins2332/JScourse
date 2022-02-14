// rest parameters

// function myFunc(a, b, ...c) {
//   console.log(`a is ${a}`);
//   console.log(`b is ${b}`);
//   console.log(`c is`, c);
// }

// myFunc(4, 6, 2, 3, 6);

// function addAll(...inputNumbes) {
//   for (i = 0; i < inputNumbes.length; i++) {
//      j = inputNumbes[i] + inputNumbes[i++];
//   }
//   console.log(j);
// }

function addAll(...numbers) {
  //   console.log(numbers);
  //   console.log(Array.isArray(numbers));
  let total = 0;
  for (let number of numbers) {
    total = total + number;
  }
  return total;
}

const ans = addAll(1, 5, 8, 3, 56);

console.log(ans);
