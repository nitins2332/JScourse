// clone using object.assign

const obj = {
  key1: "valua1",
  key2: "valua2",
};

// const obj2 = { ...obj };
const obj2 = Object.assign({}, obj);

obj.key3 = "value3";
console.log(obj);
console.log(obj2);
