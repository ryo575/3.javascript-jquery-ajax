"use strict";

console.log("鈴木陵");

const lastName = "鈴木";
const firstName = "陵";
console.log(lastName);
console.log(firstName);
console.log(lastName + firstName);

const myAge = 25;
if (myAge < 20) {
  console.log("未成年です");
} else {
  console.log("成人です");
}

let totalCount = 0;
for (let i = 1; i <= 10; i++) {
  totalCount += i;
}
console.log(totalCount);

for (let i = 1; i <= 9; i++) {
  let list = "";
  for (let j = 1; j <= 9; j++) {
    if (i * j < 10) {
      list += " " + i * j + " ";
    } else {
      list += i * j + " ";
    }
  }
  console.log(list);
}
