"use strict";


const isNumber = function (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
};


function getNumber () {
  let n = Math.floor(Math.random() * 100 + 1);
  let i = 10;

  function testNumber () {
    let userNam = prompt("Угадай число от 1 до 100. У тебя осталось" + " " + i + " " + "попыток");
    i--;

    if (i<=0) {
      let end = confirm("Попытки закончились, хотите сыграть еще?");
      if (end) {
        getNumber();
      }

    } else if (userNam == null) {
      alert("Игра окончена");
    } else if (!isNumber(userNam)) {
      alert("Введи число!");
      i++;
      testNumber();
    } else if (userNam > n) {
      alert("Загаданное число меньше");
      testNumber();
    }  else if (userNam < n) {
      alert("Загаданное число больше");
      testNumber();
    } else if (userNam == n) {
      let bingo = confirm ("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if (bingo) {
        getNumber ();
      }
    }

    
  }

  testNumber();

}

getNumber ();
