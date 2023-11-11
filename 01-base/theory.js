// 1
let x = 5;
if (x % 2 === 0) console.log("Чётное");
else {
  console.log("Нечётное");
  x++;
  console.log(x);
}

// 2
for (let i = 0; i < 1000; i++) {
  if (i % 2 != 0 || i % 12 === 0) console.log(i);
}

// 3
const array = [1, 10, 15, -100, -23, 19, 15032];
const array1 = [];
for (let i = 0; i < array.length; i++)
  array1.push(array[i] + (array[i] * 25) / 100);
console.log(array);
console.log(array1);

// 4
const myName = "Ilya";
function sayHello(name) {
  if (!name) return "Hello, someone!";
  return `Hello, ${name}!`;
}
const sayHello1 = (name) => {
  if (!name) return "Hello, someone!";
  return `Hello, ${name}!`;
};
console.log(sayHello(myName));

//5
function calc(a, b, operation) {
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
const age = 34;
const category = age > 18 ? "Взрослый" : "Детский";
console.log(category);

// 7
const a = 5;
const b = 3;
const c = a > b ? a : b;
console.log(c);
