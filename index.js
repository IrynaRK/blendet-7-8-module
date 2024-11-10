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

// const btn = document.querySelector("button");
// const firstInput = document.querySelector("#first-input");
// const secondInput = document.querySelector("#second-input");

// btn.addEventListener("click", handleClick);

// function handleClick() {
//   // const newValue = firstInput.value;
//   // firstInput.value = secondInput.value;
//   // secondInput.value = newValue;
//   [firstInput.value, secondInput.value] = [secondInput.value, firstInput.value]
// }
// task-4

// const paragraphs = document.querySelectorAll("p");

// const btn = document.querySelector("button");

// btn.addEventListener("click", handleClick);

// function handleClick(){
//   paragraphs.forEach((element,index) => {
//     element.textContent = index + 1;
//   });
// }

// task-5

const inputTest = document.querySelector("#test");
const inputResult = document.querySelector("#result");
const btn = document.querySelector("button");

btn.addEventListener("click",handlerClick);

function handlerClick(){
  if( isNaN(inputTest.value) ){
    return alert("Ввели не число");
  }
  inputResult.value = inputTest.value * inputTest.value;
  // inputResult.value = inputTest.value**2;
   // Math.pow(inputTest.value,2);
}