var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start";

function myFunction() {
  isDisplayText();
}

function isDisplayText() {
  let nomberOneResult = isNumberOne();
  let nomberTwoResult = isNumberTwo();
  let nomberTreeResult = isNumberTree();
  let nomberFourResult = isNumberFour();
  let nomberFiveResult = isNumberFive();

  let max = nomberOneResult;

  if (max < nomberTwoResult) {
    max = nomberTwoResult;
  }
  if (max < nomberTreeResult) {
    max = nomberTreeResult;
  }
  if (max < nomberFourResult) {
    max = nomberFourResult;
  }
  if (max < nomberFiveResult) {
    max = nomberFiveResult;
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

function isNumberOne() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

function isNumberTwo() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

function isNumberTree() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

function isNumberFour() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

function isNumberFive() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

button.addEventListener("click", myFunction);