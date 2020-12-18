var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start";

function myFunction() {
  isDisplayText();
}

function isDisplayText() {
  let num1 = isNumber();
  let num2 = isNumber();
  let num3 = isNumber();
  let num4 = isNumber();
  let num5 = isNumber();

  let max = num1;

  if (max < num2) {
    max = num2;
  }
  if (max < num3) {
    max = num3;
  }
  if (max < num4) {
    max = num4;
  }
  if (max < num5) {
    max = num5;
  }

  infoStartOne.textContent = `Maximum entered number: ${max}`;
}

var numb = 0;

function enteredNumber() {
  if (numb == 5) {
    numb = 0;
  }
  let enterNumber = +prompt(`Enter number (${++numb})`, "");
  return enterNumber;
}

function isNumber() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

button.addEventListener("click", myFunction);