let notes = [];
function addNote() {
const input = document.getElementById("noteInput");
const list = document.getElementById("list");
const li = document.createElement("li");
li.textContent = input.value;
list.appendChild(li);
input.value = "";
}
function addNote() {
const input = document.getElementById("noteInput");
const list = document.getElementById("list");
const li = document.createElement("li");
li.textContent = input.value;
const btn = document.createElement("button");
btn.textContent = "Delete";
btn.onclick = () => li.remove();
li.appendChild(btn);
list.appendChild(li);
input.value = "";
}
let notes = JSON.parse(localStorage.getItem("notes")) || [];
function render() {
const list = document.getElementById("list");
list.innerHTML = "";
notes.forEach((note, i) => {
const li = document.createElement("li");
li.textContent = note;
const btn = document.createElement("button");
btn.textContent = "Delete";
btn.onclick = () => {
notes.splice(i, 1);
localStorage.setItem("notes", JSON.stringify(notes));
render();
};
li.appendChild(btn);
list.appendChild(li);
});
}
function addNote() {
const input = document.getElementById("noteInput");
notes.push(input.value);
localStorage.setItem("notes", JSON.stringify(notes));
input.value = "";
render();
}
render();