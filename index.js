//index
const input = document.querySelector("#input");
const btn = document.querySelector("button");

btn.addEventListener("click", changeValue);

function changeValue() {
  input.value = "QWERTY";
}
