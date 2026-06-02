// console.log("鈴木陵");
// let lastName = "鈴木";
// let firstName = "陵";
// console.log(lastName);
// console.log(firstName);
// let myAge = 25;
// if (myAge >= 20) {
//   console.log("成人");
// } else {
//   console.log("未成年");
// }

// let age = 25;
// if (0 <= age && age < 4) {
//   console.log("幼年期");
// }
// if (4 <= age && age < 13) {
//   console.log("児童期");
// }
// if (13 <= age && age < 23) {
//   console.log("青年期");
// }
// if (23 <= age && age < 44) {
//   console.log("壯年期");
// }
// if (44 <= age && age < 65) {
//   console.log("中年期");
// }
// if (65 <= age) {
//   console.log("老年期");
// }

// let total = 0;
// for (let i = 1; i <= 10; i++) {
//   total += i;
// }
// console.log(total);

//5-2 リストを使った九九表の作成
// let list = [];
// let kukulist = [];
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     if (i * j < 10) {
//       list.push(" " + i * j);
//     } else {
//       list.push(String(i * j));
//     }
//   }
//   kukulist.push(list);
//   list = [];
// }

// for (let i = 0; i < kukulist.length; i++) {
//   console.log(kukulist[i]);
// }

//5-2 別解：リストを使用しない九九表の作成
// for (let i = 1; i <= 9; i++) {
//   let line = "";
//   for (let j = 1; j <= 9; j++) {
//     if (i * j < 10) {
//       line += " " + String(i * j) + " ";
//     } else {
//       line += String(i * j) + " ";
//     }
//   }
//   console.log(line);
// }

// let list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let total = 0;
// for (let i = 0; i < list.length; i++) {
//   total += list[i];
// }
// console.log(total);

// let total2 = 0;
// for (let num of list) {
//   total2 += num;
// }
// console.log(total2);

// let oddList = [];
// for (let i = 0; i < list.length; i++) {
//   if (list[i] % 2 != 0) {
//     oddList.push(list[i]);
//   }
// }
// console.log(oddList);

// let oddList2 = list.filter((num) => num % 2 != 0);
// console.log(oddList2);

// let found = list.find((num) => num == 7);
// console.log(found);

// let double = list.map((num) => num * 2);
// console.log(double);

// ("use strict");
// const countrys = {
//   日本: "東京",
//   スリランカ: "スリジャヤワルダナプラコッテ",
//   タイ: "クルンテープ・マハーナコーン・ラート・ラーチャー・ナコーン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラッターナラーチャタニブリー・ロム・ウドム・ラーチャニウェート・マハーサターン・アモーン・ピマーン・アワターサティット・サッカタット・ティヤウィサヌカムプラシット",
// };

// console.log(countrys.日本);
// console.log(countrys.タイ);
// countrys.タイ = "バンコク";
// console.log(countrys.タイ);

// function printName() {
//   "use strict";
//   console.log("鈴木陵");
// }

// printName();

// function add(num1, num2) {
//   "use strict";
//   return num1 + num2;
// }

// function sub(num1, num2) {
//   "use strict";
//   return num1 - num2;
// }

// function multi(num1, num2) {
//   "use strict";
//   return num1 * num2;
// }

// function div(num1, num2) {
//   "use strict";
//   return num1 / num2;
// }

// console.log(add(5, 3));
// console.log(sub(5, 3));
// console.log(multi(5, 3));
// console.log(div(5, 3));

// const printNameVariable = () => {
//   "use strict";
//   return "りょう";
// };

// console.log(printNameVariable());

// const addvariable = (num1, num2) => {
//   "use strict";
//   return num1 + num2;
// };

// const subvariable = (num1, num2) => {
//   "use strict";
//   return num1 - num2;
// };

// const multivariable = (num1, num2) => {
//   "use strict";
//   return num1 * num2;
// };

// const divvariable = (num1, num2) => {
//   "use strict";
//   return num1 / num2;
// };

// console.log(addvariable(5, 3));
// console.log(subvariable(5, 3));
// console.log(multivariable(5, 3));
// console.log(divvariable(5, 3));

// function calcTotal(...numbers) {
//   let total = 0;
//   for (let num of numbers) {
//     total += num;
//   }
//   return total;
// }
// console.log(calcTotal(...list));

// const message = "I have a dream today";
// console.log(message.length + "文字です");

// const message = "";
// if (message.length == 0) {
//   console.log("空文字です");
// }
// if (message.length > 0) {
//   console.log("空文字ではありません");
// }

// const message2 = "I have a dream today";
// console.log("最初のaは" + message2.indexOf("a") + "番目です");

// const message3 = "I have a dream today";
// if (message3.startsWith("I have")) {
//   console.log("I haveは前方一致しました。");
// }
// if (message3.includes("dream")) {
//   console.log("dreamは部分一致しました。");
// }
// if (message3.endsWith("today")) {
//   console.log("todayは後方一致しました。");
// }

message4 = "I have a apple";
message5 = "I have an apple";
if (message4 === message5) {
  console.log("文字列が同じです。");
} else {
  console.log("文字列が違います。");
}

const bigNumber = "阿僧祇：那由他：不可思議：無量大数";
for (let i = 0; i < bigNumber.split("：").length; i++) {
  console.log(bigNumber.split("：")[i]);
}

("use strict");
class Student {
  constructor(name, energy) {
    this.name = name;
    this.energy = energy;
  }

  sleep() {
    this.energy += 50;
    if (this.energy >= 100) {
      this.energy = 100;
      console.log(
        this.name + "は寝ました。エネルギーが" + this.energy + "になりました。",
      );
      console.log("フルパワー！");
    } else {
      console.log(
        this.name + "は寝ました。エネルギーが" + this.energy + "になりました。",
      );
    }
  }

  study() {
    this.energy -= 30;
    if (this.energy <= 0) {
      this.energy = 0;
      console.log(
        this.name +
          "は勉強しました。エネルギーが" +
          this.energy +
          "になりました。",
      );
      console.log("寝てください。");
    } else {
      console.log(
        this.name +
          "は勉強しました。エネルギーが" +
          this.energy +
          "になりました。",
      );
    }
  }
}

const student = new Student("鈴木陵", 50);
student.study();
student.study();
student.sleep();
student.sleep();
