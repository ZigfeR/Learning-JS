let HeightStart = +prompt("Enter the seed width", "")
let HeighEnd = +prompt("Enter the final number of width", "")
let WidthStart = +prompt("Enter the starting height number", "")
let WidthEnd = +prompt("Enter the final height number", "")

let LocalSpaceH = HeighEnd;
let LocalSpaceW = WidthEnd;

let count1 = 1;
let sum1 = HeighEnd * WidthEnd;

let LocalSpaceCountW = 0;
let LocalSpaceCountH = 0;
//Пробелы
for (; LocalSpaceW >= 1; LocalSpaceW /= 10) {
  LocalSpaceCountW++;
}
for (; LocalSpaceH >= 1; LocalSpaceH /= 10) {
  LocalSpaceCountH++;
}
for (; sum1 >= 1; count1++, sum1 /= 10);
//Верхняя линия
for (let TopLine = 0; TopLine < LocalSpaceCountH; TopLine++) {
  document.write("&nbsp;&nbsp;");
}
document.write("|");
for (let lenghth = HeightStart; lenghth <= HeighEnd; lenghth++) {
  let LocalCount = 0;
  let LocalSpaceLenghth = lenghth;
  for (; LocalSpaceLenghth >= 1; LocalSpaceLenghth /= 10) {
    LocalCount++;
  }
  for (; LocalCount < count1; LocalCount++) {
    document.write("&nbsp;&nbsp;");
  }
  document.write(lenghth);
}
document.writeln("<br>");
//Таблица
for (let Table = WidthStart; Table <= WidthEnd; Table++) {
  //Пунктир
  if (Table == WidthStart) {
    let DotLine = 0;
    for (; DotLine < LocalSpaceCountH; DotLine++) {
      document.write("-");
    }
    document.write("+");
    for (; DotLine <= (count1 * +(HeighEnd - HeightStart) + LocalSpaceCountH + count1) * 1.5 - 2; DotLine++) {
      document.write("-");
    }

    document.writeln("<br>");

  }
  //Сумма
  for (let Sum1 = HeightStart; Sum1 <= HeighEnd; Sum1++) {
    if (Sum1 == HeightStart) {
      let LocalCount1 = 0;
      let LocalSpaceC = Table;

      for (; LocalSpaceC >= 1; LocalSpaceC /= 10) {
        LocalCount1++;
      }
      for (; LocalCount1 < LocalSpaceCountW; LocalCount1++) {
        document.write("&nbsp;&nbsp;");
      }

      document.write(Table);
      document.write("|");
    }
    let LocalSpaceOne = Table * Sum1;
    let LocalCount = 0;
    for (; LocalSpaceOne >= 1; LocalSpaceOne /= 10) {
      LocalCount++;
    }
    for (; LocalCount < count1; LocalCount++) {
      document.write("&nbsp;&nbsp;");
    }
    document.write(Table * Sum1);
  }
  document.writeln("<br>");

}
document.writeln("<br>");