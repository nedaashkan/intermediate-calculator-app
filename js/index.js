let operation = "";
let number = "";
let deleteButton = document.getElementById("delete-btn");

function numbers(figure) {
  number = figure;
  let inputEl = document.getElementById("input-el").value;
  inputEl = inputEl + number;
  document.getElementById("input-el").value = inputEl;

  if (inputEl.length > 0) {
    deleteButton.disabled = false;
  } else {
    deleteButton.disabled = true;
  }
}
function operations(sign) {
  operation = sign;
  figure = document.getElementById("input-el").value;
  document.getElementById("input-el").value = "";
}
function equal() {
  number = figure;
  let number1 = parseFloat(number);
  let number2 = parseFloat(document.getElementById("input-el").value);
  let result = 0;

  if (operation === "+") {
    result = number1 + number2;
  }
  if (operation === "-") {
    result = number1 - number2;
  }
  if (operation === "/") {
    result = number1 / number2;
  }
  if (operation === "*") {
    result = number1 * number2;
  }
  document.getElementById("input-el").value = result;
}

function Delete() {
  let inputEl = document.getElementById("input-el").value;
  if (inputEl.length > 0) {
    inputEl = inputEl.substr(0, inputEl.length - 1);
    document.getElementById("input-el").value = inputEl;
  }

  if (inputEl.length > 0) {
    deleteButton.disabled = false;
  } else {
    deleteButton.disabled = true;
  }
}
function reStart() {
  document.getElementById("input-el").value = "";
  number1 = "";
  number2 = "";
}
