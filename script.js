let num = 266219;

let arr = Array.from(String(num), Number);
let result = arr.reduce((previous, current) => previous * current);
console.log(result);

result **= 3;

console.log(String(result).substr(0, 2));
