var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start";

function myFunction() {
  isDisplayText();
}
const arrayNumbers = {
  num1: 0,
  num2: 0,
  num3: 0,
  num4: 0,
  num5: 0,
  num6: 0
};

function isDisplayText() {
  for (let key in arrayNumbers) {
    arrayNumbers[key] = parsingNumbers(key);
  }
  let max = arrayNumbers.num1;

  if (max < arrayNumbers.num2) {
    max = arrayNumbers.num2;
  }
  if (max < arrayNumbers.num3) {
    max = arrayNumbers.num3;
  }
  if (max < arrayNumbers.num4) {
    max = arrayNumbers.num4;
  }
  if (max < arrayNumbers.num5) {
    max = arrayNumbers.num5;
  }
  if (max < arrayNumbers.num6) {
    max = arrayNumbers.num6;
  }

  infoStartOne.textContent = `Maximum entered number: ${max}`;
  numb = 0;
}

function parsingNumbers() {
  for (let key in arrayNumbers) {
    let localOperator = arrayNumbers[key];
    localOperator = isNumber();
    return localOperator;
  }
}
var numb = 0;

function enteredNumber() {
  let enterNumber = +prompt(`Enter number (${++numb})`, "");
  return enterNumber;
}

function isNumber() {
  let enterNumber = enteredNumber();
  return enterNumber;
}

button.addEventListener("click", myFunction);