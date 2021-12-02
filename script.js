"use strict";


const isNumber = function (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};

function getNumber () {
  let n = Math.floor(Math.random() * 100 + 1);
  

  function testNumber () {
    let userNam = prompt("Угадай число от 1 до 100");

    if (userNam == null) {
    alert("Игра окончена");
  } else if (userNam > n) {
    alert("Загаданное число меньше");
    testNumber();
  }  else if (userNam < n) {
    alert("Загаданное число больше");
    testNumber();
  } else if (!isNumber(userNam)) {
    alert("Введи число!");
    testNumber();
  } else if (userNam == n) {
    alert ("Поздравляю, Вы угадали!!!");
  }
  }

  testNumber();

}

getNumber ();
