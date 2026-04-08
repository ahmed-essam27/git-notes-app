let notes = [];
function addNote() {
const input = document.getElementById("noteInput");
const list = document.getElementById("list");
const li = document.createElement("li");
li.textContent = input.value;
list.appendChild(li);
input.value = "";
}