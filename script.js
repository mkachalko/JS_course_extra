"use strict";

function selectWordForm(number, words) {
  let i;
  if (number % 100 > 4 && number % 100 < 20) {
    i = 2;
  } else if (number % 10 < 5) {
    i = [2, 0, 1, 1, 1, 2][Math.abs(number) % 10];
  } else {
    i = [2, 0, 1, 1, 1, 2][5];
  }
  return words[i];
}

const getValueA = function () {
  const today = new Date();
  const date = today
    .toLocaleDateString("ru", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .replace(".", "ода");
  const hour = today.getHours() + " " + selectWordForm(today.getHours(), ["час", "часа", "часов"]);
  const minute =
    today.getMinutes() + " " + selectWordForm(today.getMinutes(), ["минута", "минуты", "минут"]);
  const second =
    today.getSeconds() + " " + selectWordForm(today.getSeconds(), ["секунда", "секунды", "секунд"]);

  document.querySelector("p").innerText =
    "Сегодня" +
    " " +
    date[0].toUpperCase() +
    date.substring(1) +
    ", " +
    hour +
    " " +
    minute +
    " " +
    second;
};

const getZero = function (num) {
  if (num >= 0 && num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};

const getValueB = function () {
  const today = new Date();
  const date =
    getZero(today.getDate()) + "." + getZero(today.getMonth() + 1) + "." + today.getFullYear();
  const time =
    getZero(today.getHours()) +
    ":" +
    getZero(today.getMinutes()) +
    ":" +
    getZero(today.getSeconds());
  document.querySelector("div").innerText = date + " - " + time;

  // Вариант без использования функции с нулем и вытягивания каждой отдельной чати даты и времени
  // const today = new Date();
  // document.querySelector("div").innerText =
  //   today.toLocaleDateString() +
  //   " - " +
  //   today.toLocaleString("ru", { hour: "numeric", minute: "numeric", second: "numeric" });
};

document.querySelector("body").append(document.createElement("p"));
setInterval(() => getValueA(), 1000);
document.querySelector("body").append(document.createElement("div"));
setInterval(() => getValueB(), 1000);
