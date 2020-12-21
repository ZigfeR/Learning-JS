var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start";

function buttonHandler() {
  getMaxNumber();
  calculatMaxNumber();
}
const arrayNumbers = [1, 2, 3, 4, 5];

function getMaxNumber() {
  for (let key in arrayNumbers) {
    arrayNumbers[key] = getNumbers(++key);
  }
}

function calculatMaxNumber() {
  let max = 0;
  for (i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] > max) {
      max = arrayNumbers[i];
    }
  }

  infoStartOne.textContent = `Maximum entered number: ${max}`;
}

function getNumbers(numb) {
  for (let key in arrayNumbers) {
    let localOperator = arrayNumbers[key];
    localOperator = getUserPrompt(numb);
    return localOperator;
  }
}

function getUserPrompt(numb) {
  let enterNumber = +prompt(`Enter number (${numb})`, "");
  return enterNumber;
}

button.addEventListener("click", buttonHandler);