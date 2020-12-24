var infoStartOne = document.getElementById("informer__text");
var text = document.getElementById("input__text");
var i = 1;

infoStartOne.textContent = "Write the text you want to print";

function createPrinter(event) {
  var x = event.which || event.keyCode;
  if (x == 13) {
    let bodyPrinter = showPage("div", "class", "container", "");

    let PagePrinter = showPage("p", "class", "text__page", `Page -${i++}-`);
    bodyPrinter.appendChild(PagePrinter);

    let valuePrinter = showPage("p", "class", "text__value", `"${text.value}"`);
    bodyPrinter.appendChild(valuePrinter);

    let hrPrinter = showPage("hr", "class", "hr", "");
    bodyPrinter.appendChild(hrPrinter);

    text.value = "";
    return false;
  }
}

function showPage(elem, attribute, attributeName, getString) {
  let variable = document.createElement(`${elem}`);
  variable.innerHTML = `${getString}`;
  document.body.appendChild(variable);
  variable.setAttribute(`${attribute}`, `${attributeName}`);
  return variable;
}