var infoStartOne = document.getElementById("informer__text");
var text = document.getElementById("input__text");

infoStartOne.textContent = "Summing entered numbers. '0' to display the amount";

var sum = 0;

function createSumming(event) {
  var x = event.which || event.keyCode;
  if (x == 13) {
    while (true) {
      if (text.value == 0) {
        let bodySumming = showPage("div", "class", "container", "");
        let valueSumming = showPage("p", "class", "text__value", `Sum: ${sum}`);
        bodySumming.appendChild(valueSumming);
        sum = 0;
        text.value = "";
      }
      let bodySumming = showPage("div", "class", "container", "");
      let valueSumming = showPage("p", "class", "text__value", text.value);
      bodySumming.appendChild(valueSumming);
      getNumber = valueSumming.innerHTML;
      sum += +getNumber;
      text.value = "";
      return false;
    }
  }
}

function showPage(elem, attribute, attributeName, getString) {
  let variable = document.createElement(`${elem}`);
  variable.innerHTML = `${getString}`;
  document.body.appendChild(variable);
  variable.setAttribute(`${attribute}`, `${attributeName}`);
  return variable;
}