// function hello() {
//   console.log("hello world");
// }

// hello.call();

function personInfo(hobby, favMusic) {
  console.log(this.firstName, this.age, hobby, favMusic);
}

const user1 = {
  firstName: "harshit",
  age: 7,
  about: personInfo,
};

const user2 = {
  firstName: "rohit",
  age: 9,
};

// apply

// personInfo.apply(user1, ["guitar", "bach"]);
// personInfo.call(user2, "guitar", "mozrt");

// bind

const func = personInfo.bind(user1, "guitar", "bach");

func();
