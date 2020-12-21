var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start Calculator";

const operators = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/"
};

function сalculatorСall() {
  let a = +prompt(`Number (1)`, 0);
  let operator = CalcOperator();
  let b = +prompt(`Number (2)`, 0);
  let result = Calculator(operator, a, b);
  infoStartOne.textContent = `Result sum: ${result}`;
}

function CalcOperator() {
  let localOperator = prompt('operator', getOperatorSwift());
  for (let key in operators) {
    let verifyOperator = operators[key];
    if (verifyOperator == localOperator) {
      return localOperator;
    }
  }
  return ErrorCalcOperator();
}

function getOperatorSwift() {
  let string = "";
  for (let key in operators) {
    string += operators[key] + " | ";
  }
  return string;
}

function ErrorCalcOperator() {
  alert("Unkown operator");
  return CalcOperator();
}

function Calculator(operator, a, b) {
  switch (operator) {
    case operators.plus:
      return summing(a, b);
    case operators.minus:
      return subtraction(a, b);
    case operators.multiply:
      return multiply(a, b);
    case operators.divide:
      return divide(a, b);
  }
}

function summing(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

button.addEventListener("click", сalculatorСall);