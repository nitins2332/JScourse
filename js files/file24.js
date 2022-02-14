// break keyword

//  conntinue keyword

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    break;
  }
  console.log(i);
}

console.log("hello there");

for (let i = 1; i <= 10; i++) {
  if (i === 4) {
    continue; // skip on 4 and than again run program and print 5
  }
  console.log(i);
}
