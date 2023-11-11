// 1
type MyTyps = object | number | string;

interface Person {
  name: string;
  age: number;
  pet: string;
}

const john: Person = {
  name: "John",
  age: 22,
  pet: "cat",
};

const ann: Person = {
  name: "Ann",
  age: 24,
  pet: "fish",
};

const showObject = (object: Person): MyTyps =>
  `Меня зовут ${object.name}, мне ${object.age}, у меня есть питомец ${object.pet}\n`;

console.log(showObject(john), showObject(ann));
