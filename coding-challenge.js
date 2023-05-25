'use strict';

// CODING CHALLENGE #1 //

// const markKg = 78;
// const markHt = 1.69;
// const johnKg = 92;
// const johnHt = 1.95;

// const markKg2 = 95;
// const markHt2 = 1.88;
// const johnKg2 = 85;
// const johnHt2 = 1.76;

// const markBMI = markKg / markHt ** 2;
// const johnBMI = johnKg / (johnHt * johnHt);

// const markHigherBMI = markBMI > johnBMI;

// const markBMI2 = markKg2 / markHt2 ** 2;
// const johnBMI2 = johnKg2 / (johnHt2 * johnHt2);

// const johnHigherBMI2 = markBMI2 > johnBMI2;

// console.log(markHigherBMI);
// console.log(johnHigherBMI2);

// // CODING CHALLENGE #2 //

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than john's`);
// } else {
//   console.log(`John's BMI (${johnBMI2}) is higher than mark's`);
// }

// CODING CHALLENGE #3 //

// let dolphinsScore = 96 + 108 + 89;
// let koalasScore = 88 + 91 + 110;
// let dolphinsAvg = dolphinsScore / 3;
// let koalasAvg = koalasScore / 3;

// let dolphinsScore2 = 97 + 112 + 101;
// let koalasScore2 = 109 + 95 + 123;
// let dolphinsAvg2 = dolphinsScore2 / 3;
// let koalasAvg2 = koalasScore2 / 3;

// let dolphinsScore3 = 97 + 112 + 101;
// let koalasScore3 = 109 + 95 + 106;
// let dolphinsAvg3 = dolphinsScore3 / 3;
// let koalasAvg3 = koalasScore3 / 3;

// if (dolphinsAvg > koalasAvg) {
//   console.log(`Dolphins win`);
// } else if (dolphinsAvg < koalasAvg) {
//   console.log(`Koalas win`);
// } else if (dolphinsAvg === koalasAvg) {
//   console.log(`It is a draw!`);
// }

// if (dolphinsAvg2 >= 100 && dolphinsAvg2 > koalasAvg2) {
//   console.log(`Dolphins win`);
// } else if (koalasAvg2 >= 100 && koalasAvg2 > dolphinsAvg2) {
//   console.log(`Koalas win`);
// } else if (
//   dolphinsAvg2 === koalasAvg2 &&
//   dolphinsAvg2 >= 100 &&
//   koalasAvg2 >= 100
// ) {
//   console.log(`It is a draw!`);
// } else {
//   console.log(`Nobody wins!`);
// }

// if (dolphinsAvg3 >= 100 && dolphinsAvg3 > koalasAvg3) {
//   console.log(`Dolphins win`);
// } else if (dolphinsAvg3 <= 100 && dolphinsAvg3 < koalasAvg3) {
//   console.log(`Koalas win`);
// } else if (
//   dolphinsAvg3 === koalasAvg3 &&
//   dolphinsAvg3 >= 100 &&
//   koalasAvg3 >= 100
// ) {
//   console.log(`It is a draw!`);
// } else {
//   console.log(`Nobody Wins!!!!!!`);
// }

// CODING CHALLENGE #4 //

// let bill = 430;
// let tip = bill * 0.15;
// let tip2 = bill * 0.2;

// const total =
//   bill >= 50 && bill <= 300
//     ? `The bill was ${bill} and the tip was ${tip}, and the total value ${
//         bill + tip
//       } `
//     : `The bill was ${bill} and the tip was ${tip2}, and the total value ${
//         bill + tip2
//       }`;

// console.log(total);

// if (bill >= 50 && bill <= 300) {
//   console.log(
//     `The bill was ${bill} and the tip was ${tip}, and the total value ${
//       bill + tip
//     } `
//   );
// } else {
//   console.log(
//     `The bill was ${bill} and the tip was ${tip2}, and the total value ${
//       bill + tip2
//     }`
//   );
// }

// CODING CHALLENGE #5 //

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);
// const scoreDolphins2 = calcAverage(85, 54, 41);
// const scoreKoalas2 = calcAverage(23, 34, 27);

// const checkWinner = (avgDolphins, avgKoalas) => {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//   } else {
//     console.log(`No one Wins!`);
//   }
// };
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins2, scoreKoalas2);
// checkWinner(200, 800);

// CODING CHALLENGE #6 = ARRAYS //

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills);
// console.log(tips);
// console.log(total);

// CODING CHALLENGE # 7 = OBJECTS //

// const markMiller = {
//   firstName: `Mark`,
//   lastName: `Miller`,
//   height: 1.69,
//   weight: 78,
// };

// const johnSmith = {
//   firstName: `John`,
//   lastName: `Smith`,
//   height: 1.95,
//   weight: 92,
// };

// const calcBMI = function (weight, height) {
//   return weight / height ** 2;
// };

// const markBMI = calcBMI(markMiller.weight, markMiller.height);
// const johnBMI = calcBMI(johnSmith[`weight`], johnSmith[`height`]);

// markBMI > johnBMI
//   ? console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
//   : `John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`;

// const john = {
//   fullName: `John Smith`,
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// console.log(mark.bmi);

// const mark = {
//   fullName: `Mark Miller`,
//   mass: 78,
//   height: 1.69,
//   calcbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };
// mark.calcbmi();
// console.log(mark.bmi);

// const john = {
//   fullName: `John Smith`,
//   mass: 92,
//   height: 1.95,
//   calcbmi: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   },
// };

// john.calcbmi();
// console.log(john.bmi);

// const total =
//   mark.bmi > john.bmi
//     ? `${mark.fullName} BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})! `
//     : `${john.fullName} BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})! `;
// console.log(total);

// CODING CHALLENGE # 8 = LOOP //

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
calcTip(bills);
for (let i = 0; i <= bills.length; i++) {}
