let HeightStart = +prompt("Enter the seed height", "11")
let HeighEnd = +prompt("Enter the final number of height", "24")
let WidthStart = +prompt("Enter the starting width number", "8")
let WidthEnd = +prompt("Enter the final width number", "20")

function showTable() {
  createTableBody()
  createTableHead(WidthStart)
  createTableSum(HeightStart)
}

function createTableBody() {
  let div = document.createElement("div")
  div.innerHTML = ""
  document.body.appendChild(div)
  div.setAttribute("id", "table-container")

  let table = document.createElement("table")
  table.innerHTML = ""
  document.body.appendChild(table)
  table.setAttribute("id", "table")
  div.appendChild(table)
}

let arrayTableHeight = new Array()
let arrayTableWidth = new Array()

function createTableHead(startWidth) {
  for (let headHeight = 0; headHeight < 1; headHeight++) {
    let tr = document.createElement("tr")
    tr.innerHTML = ""
    document.getElementById("table").appendChild(tr)
    tr.setAttribute("id", "tr")
    for (let j = 0; j < 1; j++) {
      let td = document.createElement("th")
      td.innerHTML = "&nbsp;"
      tr.appendChild(td)
    }
    for (let numberSeries = startWidth; numberSeries < WidthEnd + 1; numberSeries++) {
      arrayTableHeight.push(numberSeries)
      let td = document.createElement("th")
      td.innerHTML = startWidth++
      tr.appendChild(td)
    }
  }
}

let difference = WidthEnd - WidthStart + 2;

function createTableSum(startHeight) {
  for (let tableHeight = startHeight; tableHeight < HeighEnd + 1; tableHeight++) {
    arrayTableWidth.push(tableHeight)
    let tr = document.createElement("tr")
    tr.innerHTML = ""
    document.getElementById("table").appendChild(tr)
    tr.setAttribute("id", "tr")
    //left column
    for (let j = 0; j < 1; j++) {
      let td = document.createElement("th")
      td.innerHTML = startHeight++
      tr.appendChild(td)
    }
    //table sum
    for (let tableSum = 1; tableSum < difference; tableSum++) {
      let head
      let width
      for (t = 0; t < arrayTableWidth.length; t++) {
        for (p = 0; p < tableSum; p++) {
          head = arrayTableHeight[p]
        }
        width = arrayTableWidth[t]
      }
      let sum = head * width
      let td = document.createElement("td")
      td.innerHTML = sum
      tr.appendChild(td)
    }
  }
}
showTable();