// splice method
// start, delete, insert

const myArray = ["item1", "item2", "item3"];

// delete
// myArray.splice(0, 1);

// insert
// myArray.splice(1, 0, "inserted item");

// insert and delete
const deleteItem = myArray.splice(1, 2, "inserted item2", "inserted item2");

console.log(myArray);
console.log(deleteItem);
