// lexical scope

const myVar = "value1";

function myApp() {
  //   const myVar = "value1";

  function myFunc() {
    // const myVar = "value56";
    const myFunc2 = () => {
      console.log("inside myFunc", myVar);
    };
    // console.log("inside myFunc", myVar);
    myFunc2();
  }

  const myFunc2 = function () {};
  const myFunc3 = () => {};

  console.log(myVar);
  myFunc();
}

myApp();
