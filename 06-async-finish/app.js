// 1
/*console.log("a");
new Promise((resolve, reject) => {
  console.log("b");
  setTimeout(() => {
    console.log("c");
    resolve();
  }, 0);
}).then(() => console.log("d"));

console.log("e");
setTimeout(() => console.log("f"), 0);
console.log("g");*/

// 2
/*const list = document.getElementById("list");

function addValueList(list, index) {
  const value = list[index].split(",").splice(2);
  return `<li>${value}</li>`;
}

async function showList(url) {
  try {
    fetch(url).then((response) =>
      response.text().then((data) => {
        const newData = data
          .split("[")
          .toString()
          .split("]")
          .toString()
          .split("{")
          .toString()
          .split("}");
        console.log(newData);
        for (let i = 0; i < newData.length - 1; i++)
          list.insertAdjacentHTML("beforeend", addValueList(newData, i));
      })
    );
  } catch {
    console.log("error");
  } finally {
    console.log("finaly");
  }
}

const url = 'https://jsonplaceholder.typicode.com/todos';

fetch(url)
  .then(response => response.json())
  .then(tasks => {
    const ul = document.createElement('ul');
    tasks.forEach(task => {
      const li = document.createElement('li');
      li.textContent = task.title;
      ul.appendChild(li);
    });
    document.body.appendChild(ul);
  })
  .catch(error => console.error(error));

*/

// 3
/*const sumWithDelay = (delay, a, b) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, delay);
  });

  return promise;
};

async function start() {
  const result = await sumWithDelay(1000, 5, 5);
  console.log(result);
}

start();*/

// 4
const USERS = [
  { id: "001", name: "Алексей", age: 25 },
  { id: "002", name: "Иван", age: 28 },
  { id: "003", name: "Егор", age: 30 },
];

function fetchUser(id) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      for (let user of USERS) if (user.id === id) resolve(user);
      reject("err");
    }, 2500);
  });

  return promise;
}

function fetchUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = USERS.find((user) => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Пользователь не найден"));
      }
    }, 2500);
  });
}

async function start() {
  try {
    const result = await fetchUser("0002");
    console.log(result); // { id: '001', name: "Алексей", age: 25 }
  } catch {
    console.log("error");
  } finally {
    console.log("finaly");
  }
}

start();
