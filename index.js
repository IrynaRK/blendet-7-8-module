// //index
// const input = document.querySelector("#input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", changeValue);

// function changeValue() {
//   input.value = "QWERTY";
// }

// task-2

// const input = document.querySelector("#input");
// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   alert(input.value)
// }

// task-3

const btn = document.querySelector("button");
const firstInput = document.querySelector("#first-input");
const secondInput = document.querySelector("#second-input");

btn.addEventListener("click", handleClick);

function handleClick() {
  // const newValue = firstInput.value;
  // firstInput.value = secondInput.value;
  // secondInput.value = newValue;
  [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value]
}