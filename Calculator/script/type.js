var info = document.getElementById("informer");
var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start Calculator";

function myFunction() {
  isDisplayCalc();
}

let a, b, result;

function isDisplayCalc() {
  a = +prompt('Number (1)', 0);
  let operator = CalcOperator();
  b = +prompt('Number (2)', 0);
  Calcculator(operator);

  infoStartOne.textContent = "Result sum: " + result;
}

function CalcOperator() {
  let operator = prompt('operator', "+ | - | * | /");
  switch (operator) {
    case "-":
    case "+":
    case "*":
    case "/":
      return operator;
    default:
      return ErrorCalcOperator();
  }
}

function ErrorCalcOperator() {
  alert("Unkown operator");
  return CalcOperator();
}

function Calcculator(operator) {
  switch (operator) {
    case "+":
      result = sum(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case "-":
      result = sub(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case "*":
      result = mult(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    case "/":
      result = div(a, b);
      infoStartOne.textContent = "Result sum: " + result;
      break;
    default:
      alert("Error");
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