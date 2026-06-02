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

const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let total = 0;
for (let i = 0; i < numList.length; i++) {
  total += numList[i];
}
console.log(total);

for (const num of numList) {
  total += num;
}
console.log(total);

for (const num of numList) {
  if (num % 2 === 1) {
    console.log(num);
  }
}

console.log(numList.filter((num) => num % 2 === 1));

console.log(numList.find((num) => num === 7));

console.log(numList.map((num) => num * 2));

const countries = {
  日本: "東京",
  スリランカ: "スリジャヤワルダナプラコッテ",
  タイ: "クルンテープ",
};

console.log(countries.日本);
console.log(countries.スリランカ);
console.log(countries.タイ);
countries.タイ = "ベトナム";

console.log(countries.タイ);
