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

  infoStartOne.textContent = "Maximum entered number: " + max;
}

let numb = 1;

function enteredNumber() {
  let enterNumber = +prompt("Enter number (" + numb++ + ")", "");
  return Number(enterNumber);
}

function isNumberOne() {
  let enterNumber = enteredNumber();
  return Number(enterNumber);
}

function isNumberTwo() {
  let enterNumber = enteredNumber();
  return Number(enterNumber);
}

function isNumberTree() {
  let enterNumber = enteredNumber();
  return Number(enterNumber);
}

function isNumberFour() {
  let enterNumber = enteredNumber();
  return Number(enterNumber);
}

function isNumberFive() {
  let enterNumber = enteredNumber();
  return Number(enterNumber);
}

button.addEventListener("click", myFunction);