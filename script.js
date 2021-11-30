let lang = confirm("Ваш язык русский?");
let ru = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
let en = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
let days = [ru, en];

if (lang) {
  console.log(ru);
} else {
  console.log(en);
}

switch (true) {
  case lang:
    console.log(ru);
    break;
  default:
    console.log(en);
}

for (; lang == true; ) {
  console.log(days[0]);
  break;
}
for (; lang == false; ) {
  console.log(days[1]);
  break;
}

let namePerson = prompt("Введите ваше имя");

namePerson == "Артем"
  ? console.log("директор")
  : namePerson == "Александр"
  ? console.log("преподаватель")
  : console.log("студент");
