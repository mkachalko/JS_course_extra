"use strict";

let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let todayDate = new Date();
let todayIndex = todayDate.getDay();

const body = document.querySelector('body');


const getList = function (array, today) {

  let result = [];
    
  for (let i = 0; i < array.length; i++) {
    
    let li = document.createElement("li");
    
    if (i == today) {
      li.append(array[i]);
      li.style.fontWeight = "bold";
      if (array[i] == "Sunday" || array[i] == "Saturday" ) {
        li.style.fontStyle = "italic";
      }
      result.push(li);
      
    } else if(array[i] == "Sunday" || array[i] == "Saturday" ) {
      li.append(array[i]);
      li.style.fontStyle = "italic";
      result.push(li);
    } else {
      li.append(array[i]);
      result.push(li);
    }
    
  }

  return result;
};


body.prepend(document.createElement("ul"));
document.querySelector('ul').append(...getList(week, todayIndex));





