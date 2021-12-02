"use strict";

let arr = ["200140", "14200", "786", "2300", "4860", "3510", "250"];

let arr2 = arr.filter(item => item[0] == "2" || item[0] =="4");

console.log(arr2);


const n = 100;

notPrimeNumber:
for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      continue notPrimeNumber;
    }
  }
  console.log(i + " Делители этого числа 1 и " + i);  
}
 



