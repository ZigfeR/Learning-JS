var info = document.getElementById("informer");
var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");

infoStartOne.textContent = "Press the button to start Calculator";

function myFunction() {
  isDisplayCalc();
}

function isDisplayCalc() {
  let a, b, sum;

  let calculator = {
    sum() {
      return a + b;
    },
    sub() {
      return a - b;
    },
    mult() {
      return a * b;
    },
    div() {
      return a / b;
    },
    read() {
      a = +prompt('Number (1)', 0);
      b = +prompt('Number (2)', 0);
    }
  };

  calculator.read();

  let operator = prompt('operator', "+ | - | * | /");

  switch (operator) {
    case "+":
      sum = calculator.sum();
      infoStartOne.textContent = "Result sum: " + sum;
      break;
    case "-":
      sum = calculator.sub();
      infoStartOne.textContent = "Result sum: " + sum;
      break;
    case "*":
      sum = calculator.mult();
      infoStartOne.textContent = "Result sum: " + sum;
      break;
    case "/":
      sum = calculator.div();
      infoStartOne.textContent = "Result sum: " + sum;
      break;
    default:
      alert("Unkown operator");
      break;
  }
}

button.addEventListener("click", myFunction);