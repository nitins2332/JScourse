// default parameters

// function addTwo(a, b) {
//   if (typeof b === "undefined") {
//     b = 1;
//   }
//   return a + b;
// }

function addTwo(a, b = 4) {
  return a + b;
}

const ans = addTwo(4, 6);
console.log(ans);
