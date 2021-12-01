let str1 = "Привет!";
let str2 =
  "     Как твои дела? Вот у меня очередной урок по JS. Иногда мелькает мысль, что не справлюсь, но я не сдаюсь";
let str3 = "     Пробелы пропали?   ";
let num = 123;
let bln = true;
let nan = NaN;
let nll = null;
let arr = [];

const stringTest = function (variable) {
  if (typeof variable == "string") {
    variable = variable.trim();
    if (variable.length > 30) {
      return variable.substr(0, 30) + "...";
    } else {
      return variable;
    }
  } else {
    return "Это не строка";
  }
};

// Проверка функции
console.log(stringTest(str1));
console.log(stringTest(str2));
console.log(stringTest(str3));
console.log(stringTest(num));
console.log(stringTest(bln));
console.log(stringTest(nan));
console.log(stringTest(nll));
console.log(stringTest(arr));
