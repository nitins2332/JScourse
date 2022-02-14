// callback functions

function myFunc2(name) {
  console.log("inside myFunc 2");
  console.log(`your name is ${name}`);
}

function myFunc(callback) {
  console.log("hello world");
  //   console.log(a);
  callback("harshit");
}

myFunc(myFunc2);
