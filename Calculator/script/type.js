var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start Calculator";

let a, b, result;

const operators = {
  plus: "+",
  minus: "-",
  multiply: "*",
  divide: "/"
};

function myFunction() {
  isDisplayCalc();
}

function isDisplayCalc() {
  let i = 1;
  a = +prompt("Number (" + i++ + ")", 0);
  let operator = CalcOperator();
  b = +prompt("Number (" + i++ + ")", 0);
  Calcculator(operator);
  infoStartOne.textContent = "Result sum: " + result;
}

function CalcOperator() {
  let localOperator = prompt('operator', promptStr());
  for (let key in operators) {
    let verifyOperator = operators[key];
    if (verifyOperator == localOperator) {
      return localOperator;
    }
  }
  return ErrorCalcOperator();
}

function promptStr() {
  let strng = "";
  for (let key in operators) {
    strng += operators[key] + " | ";
  }
  return strng;
}

function ErrorCalcOperator() {
  alert("Unkown operator");
  return CalcOperator();
}

function Calcculator(operator) {
  switch (operator) {
    case operators.plus:
      result = sum(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case operators.minus:
      result = sub(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case operators.multiply:
      result = mult(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case operators.divide:
      result = div(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
  }
}

function sum(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

button.addEventListener("click", myFunction);