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

//検索
console.log(numList.filter((num) => num % 2 === 1));
//一件検索
console.log(numList.find((num) => num === 7));
//配列内の値を操作する
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

//演習８
function printName() {
  console.log("鈴木陵");
}

printName();

//演習8-2
function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

function multi(x, y) {
  return x * y;
}

function div(x, y) {
  return x / y;
}

console.log(add(5, 3));
console.log(sub(5, 3));
console.log(multi(5, 3));
console.log(div(5, 3));

//演習9
const printNameVariable = () => {
  console.log("鈴木陵");
};

printNameVariable();

// 演習9-2
const addVariable = (x, y) => {
  return x + y;
};

const subVariable = (x, y) => {
  return x - y;
};

const multiVariable = (x, y) => {
  return x * y;
};

const divVariable = (x, y) => {
  return x / y;
};

console.log(addVariable(5, 3));
console.log(subVariable(5, 3));
console.log(multiVariable(5, 3));
console.log(divVariable(5, 3));

// 演習１０、１１
var globalVal = 10;
function func1() {
  var localVal = 20;
  console.log("globalVal:" + globalVal);
  console.log("localVal:" + localVal);
}
func1();
console.log("globalVal:" + globalVal);
// console.log("localVal:" + localVal); //エラー起きる

// function func2() {
//   x = 6;
//   if (true) {
//     var x = 5;
//   }
//   console.log(x);
// }

// func2();

// function func3() {
//   if (true) {
//     const y = 5;
//   }
//   console.log(y);
// }

// func3();

//演習１２
const calcTotal = (...numbers) => {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  console.log(total);
};

calcTotal(...numList);

//演習13
const message = "I have a dream today";
console.log(message.length + "文字です");

//演習14
const empty = "";
if (empty.length === 0) {
  console.log("空文字です");
} else {
  console.log("空文字じゃないです");
}

// 演習15
console.log("最初のaは" + message.indexOf("a") + "番目です");

// 演習16
if (message.startsWith("I have")) {
  console.log("I haveは前方一致です");
}
if (message.includes("dream")) {
  console.log("dreamは部分一致です");
}
if (message.endsWith("today")) {
  console.log("todayは後方一致です");
}

// 演習17
const message2 = "I have a apple";
const message3 = "I have an apple";
if (message2 === message3) {
  console.log("同じです");
} else {
  console.log("違います");
}

// 演習18
const bigNumber = "阿僧祇：那由他：不可思議：無量大数";
for (let numString of bigNumber.split("：")) {
  console.log(numString);
}
