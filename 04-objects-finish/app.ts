// 1
class Circle {
  private r: number;

  constructor(r: number) {
    this.r = r;
  }
  getArea() {
    return (Math.PI * Math.pow(this.r, 2)).toFixed(2);
  }
}
const circle = new Circle(5);
console.log(circle.getArea()); // "78.54"

// 2
class Product {
  private name: string;
  private price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  priceWithDiscount(discount: number) {
    const difference = (this.price * discount) / 100;
    return this.price - difference;
  }
}
const product = new Product("Phone", 1000);
console.log(product.priceWithDiscount(10)); // 900
console.log(product.priceWithDiscount(20)); // 800

// 3
class Person {
  private friend: string[];

  constructor() {
    this.friend = [];
  }
  addFriend(name: string) {
    this.friend.push(name);
  }
  showFriends() {
    console.log(this.friend.join(", "));
  }
}
const person = new Person();
person.addFriend("Иван");
person.addFriend("Сергей");
person.addFriend("Игорь");
person.showFriends(); // Иван, Сергей, Игорь

// 4
class Animals {
  private name: string;
  private favoriteFood: string;

  constructor(name: string, food: string) {
    this.name = name;
    this.favoriteFood = food;
  }
  makeSound(sound: string) {
    console.log(sound);
  }
  sayName() {
    console.log(`My name is ${this.name}`);
  }
  sayInfo() {
    console.log(`${this.name}\'s favorite food is ${this.favoriteFood}`);
  }
}
class Dog extends Animals {
  makeSound() {
    console.log("Gaw!");
  }
}
class Cat extends Animals {
  makeSound() {
    console.log("Meaw");
  }
}
const dog = new Dog("Rex", "Meat");
const cat = new Cat("Barsik", "Fish");
cat.makeSound(); // Meow
dog.makeSound(); // Gav!
dog.sayName(); // My name is Rex
cat.sayName(); // My name is Barsik
dog.sayInfo(); // Rex's favorite food is Meat
cat.sayInfo(); // Barsik's favorite food is Fish

// 5
interface Foo {
  a: number;
  bar: Function;
  //baz: Function;
}
const foo: Foo = {
  a: 5,
  bar: function () {
    console.log(this.a);
  },
  //baz: () => {
  // console.log(this.a);
  //},
};
foo.bar();
//foo.baz();

// 6
interface BoxFactory {
  type: string;
  count: number;
  produce: Function;
}
const boxFactory: BoxFactory = {
  type: "box",
  count: 0,
  produce: function () {
    this.count++;
    return "Box №" + this.count;
  },
};

const produceBox = (produceFn: Function) => {
  const boxName = produceFn();
  console.log(boxName);
};

for (let i = 0; i < 25; i++) {
  produceBox(boxFactory.produce.bind(boxFactory));
}
