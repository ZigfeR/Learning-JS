var infoStartOne = document.getElementById("informer__textOne");
var button = document.getElementById("button_value");
var text = document.getElementById("text");
var i = 1;

infoStartOne.textContent = "Write the text you want to print";

function myFunction(event) {
    var x = event.which || event.keyCode;
    if (x == 13) {
        show();
        text.value = "";
        return false;
    }
}

function show() {
    let div = document.createElement("div");
    div.innerHTML = "";
    document.body.appendChild(div);
    div.setAttribute("id", "container");

    let table = document.createElement("p");
    table.innerHTML = `Page -${i++}-`;
    document.body.appendChild(table);
    table.setAttribute("id", "p");
    div.appendChild(table);

    let tab = document.createElement("p");
    tab.innerHTML = `"${text.value}"`;
    document.body.appendChild(tab);
    tab.setAttribute("id", "p");
    div.appendChild(tab);
}