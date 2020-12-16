var info = document.getElementById("informer");
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

function isNumberOne() {
  let enteredNumber = prompt('Enter number (1)', '');
  return Number(enteredNumber);
}

function isNumberTwo() {
  let enteredNumber = prompt('Enter number (2)', '');
  return Number(enteredNumber);
}

function isNumberTree() {
  let enteredNumber = prompt('Enter number (3)', '');
  return Number(enteredNumber);
}

function isNumberFour() {
  let enteredNumber = prompt('Enter number (4)', '');
  return Number(enteredNumber);
}

function isNumberFive() {
  let enteredNumber = prompt('Enter number (5)', '');
  return Number(enteredNumber);
}

button.addEventListener("click", myFunction);