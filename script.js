"use strict";

const DomElement = function (selector, height, width, bg, fontSize, text) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.text = text;
  this.render = function () {
    let elem;
    switch (true) {
      case this.selector.trim()[0] == ".":
        const div = document.createElement("div");
        div.classList.add(this.selector.substring(1));
        elem = div;
        break;
      case this.selector.trim()[0] == "#":
        const p = document.createElement("p");
        p.id = this.selector.substring(1);
        elem = p;
        break;
      default:
        console.log("Ошибка");
    }
    if (elem) {
      elem.style.cssText =
        "height:" +
        height +
        ";" +
        "width:" +
        width +
        ";" +
        "background:" +
        bg +
        ";" +
        "font-size:" +
        fontSize;
      elem.textContent = this.text;
      document.body.append(elem);
    } else {
      alert("Передайте селектор класса (.) или идентификатора (#)");
    }
  };
};

// обязательное задание
// const obj = new DomElement(".green", "150px", "150px", "green", "20px", "Я зеленый квадрат");
// obj.render();

// дополнительное задание

const square = new DomElement(".square", "100px", "100px", "blue");
let squareHTML;
let x = 0;
let y = 0;

const keyMove = (event) => {
  switch (true) {
    case event.code == "ArrowDown":
      y += 10;
      break;
    case event.code == "ArrowUp":
      if (y >= 10) {
        y -= 10;
      }
      break;
    case event.code == "ArrowRight":
      const clientWidth = document.documentElement.clientWidth;
      if(x < clientWidth - 120) {
        x += 10;
      }
      break;
    case event.code == "ArrowLeft":
      if (x >= 10) {
        x -= 10;
      }
      break;
  }

  squareHTML.style.transform = "translate(" + x + "px, " + y + "px)";

};

document.addEventListener("DOMContentLoaded", square.render());

squareHTML = document.querySelector(".square");

square.position = "absolute";
squareHTML.style.position = square.position;

document.addEventListener("keydown", keyMove);
