// 1
let value: number = 5;

if (value % 2 === 0) console.log("Чётное");
else {
  console.log("Нечётное");
  value++;
  console.log(value);
}

// 2
for (let i = 0; i < 1000; i++) {
  if (i % 2 != 0 || i % 12 === 0) console.log(i);
}

// 3
const array: number[] = [1, 10, 15, -100, -23, 19, 15032];
const array1: number[] = [];

for (let i = 0; i < array.length; i++) array1.push(i * 1.25); // array[i] + (array[i] * 25) / 100;

console.log(array);
console.log(array1);

// 4
const myName: string = "Ilya";

function sayHello(name: string = "someone") {
  return `Hello, ${name}!`;
}

const sayHello1 = (name: string = "someone") => `Hello, ${name}!`;

console.log(sayHello(myName));

// 5
function calc(a: number, b: number, operation: string) {
  switch (operation) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return null;
  }
}

console.log(calc(1, 2, "+")); // 3
console.log(calc(1, 2, "-")); // -1
console.log(calc(2, 2, "*")); // 4
console.log(calc(4, 2, "/")); // 2

// 6
const age: number = 34;
const category: string = age > 18 ? "Взрослый" : "Детский";
console.log(category);

// 7
const a: number = 5;
const b: number = 3;
const c: number = a > b ? a : b;

console.log(c);
