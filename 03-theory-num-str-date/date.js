const output = document.getElementById("output");
const full = document.getElementById("full");
const date = document.getElementById("date");
const time = document.getElementById("time");
let mode;

function bindMode(name) {
  return function () {
    mode = name;
    update();
  };
}

full.onclick = bindMode("full");
date.onclick = bindMode("date");
time.onclick = bindMode("time");

setInterval(update, 100);
update();

function update() {
  output.textContent = format(mode);
}

function format(formatMode) {
  const now = new Date();

  switch (formatMode) {
    case "time":
      return now.toLocaleTimeString() + "." + now.getMilliseconds();
    case "date":
      return now.toLocaleDateString();
    case "full":
      return now.toLocaleDateString() + " " + now.toLocaleTimeString();
    default:
      return now.toLocaleDateString();
  }
}
