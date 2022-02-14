class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating`;
  }

  isSuperCute() {
    return this.age <= 1;
  }

  isCute() {
    return true;
  }
}

// const animal = new Animal("tom", 2);
// console.log(animal);
// console.log(animal.eat());
// console.log(animal.isCute());
// console.log(animal.isSuperCute());

//
class Dog extends Animal {}

const tommy = new Dog("tommy", 3);
console.log(tommy.isCute());
console.log(tommy);
