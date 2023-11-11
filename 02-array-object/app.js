const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

const notes = [
  {
    title: "text1",
    complited: false,
  },
  {
    title: "text2",
    complited: false,
  },
];

function render() {
  listElement.innerHTML = "";
  if (notes.length === 0) listElement.innerHTML = "<p>Нет элементов</p>";
  for (let i = 0; i < notes.length; i++)
    listElement.insertAdjacentHTML("beforeend", getNoteTemplate(notes[i], i));
}
render();

createBtn.onclick = function () {
  if (inputElement.value.length === 0) return;
  const newNote = {
    title: inputElement.value,
    complited: false,
  };
  notes.push(newNote);
  render();
  inputElement.value = "";
};

listElement.onclick = function (event) {
  if (event.target.dataset.index) {
    const index = parseInt(event.target.dataset.index);
    const type = event.target.dataset.type;

    if (type === "toggle") notes[index].complited = !notes[index].complited;
    else if (type === "remove") notes.splice(index, 1);

    render();
  }
};

function getNoteTemplate(note, index) {
  return `
    <li
    class="list-group-item d-flex justify-content-between align-items-center"
    >
        <span 
          class="${note.complited ? "text-decoration-line-through" : ""}"
        >
          ${note.title}
        </span>
        <span>
            <span 
              class="btn btn-small btn-${
                note.complited ? "warning" : "success"
              }" 
              data-index="${index}" data-type="toggle"
            >
              &check;
            </span>
            <span 
              class="btn btn-small btn-danger" 
              data-index="${index}" data-type="remove"
            >
              &times;
            </span>
        </span>
    </li>
    `;
}

// 1
/*const john = {
  name: "Джон",
  age: 29,
  pet: "Джери",
};

const ann = {
  name: "Анна",
  age: 25,
  pet: "Макс",
};

const showHuman = (object) =>
  `Меня зовут ${object.name}, мне ${object.age}, у меня есть питомец ${object.pet}`;

const incrementAge = (object) => object.age++;

const showObject = (object) => {
  for (const [key, value] of Object.entries(object))
    console.log(`${key}: ${value}`);
};

console.log(showHuman(john));
console.log(showHuman(ann));

console.log(incrementAge(ann));
console.log(incrementAge(ann));

console.log(showObject(john));*/

// 2
/*const arr = [1, 50, 20, 75, 90];
const sum = (array) => array.reduce((acc, i) => acc + i);
console.log(sum(arr));*/

// 3
/*let names = [];
names = ["Ilya", "Vlad", "Sasha", "Artem", "Kola"];
console.log(names);
names.shift();
names.pop();
console.log(names);*/

// 4
/*const names = ["Bob", "Klar", "Petya", "Ilya", "Viktoriya"];
const show = (arr) => `<ul>${arr.map((i) => `<li>${i}</li>`).join("")}</ul>`;
listElement.insertAdjacentHTML("beforeend", show(names));*/

// 5
/*const obj = {
  age: 22,
  favColor: "red",
  height: 188,
  pet: "dog",
  money: 12300,
};
const objAge = obj.age;
const objColor = obj.favColor;
const objHeight = obj.height;
const objPet = obj.pet;
const objMoney = obj.money;
console.log(objAge, objColor, objHeight, objPet, objMoney);
*/

// 6
/*const obj = {
  age: 22,
  favColor: "red",
  height: 188,
  pet: "dog",
  money: 12300,
};

const updateObj = {
  age: 23,
  favColor: "blue",
  money: 11450,
};

const obj2 = {
  age: 22,
  favColor: "red",
  height: 188,
  pet: "dog",
  money: 12300,
};

obj2.age = updateObj.age;
obj2.favColor = updateObj.favColor;
obj2.money = updateObj.money;

console.log(obj2);
*/
