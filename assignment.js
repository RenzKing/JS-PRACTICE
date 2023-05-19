"use strict";
// // ASSIGNMENT #1 = VALUES AND VARIABLES //

// let country = "Philippines";
// let continent = "Asia";
// let population = 100;

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// // ASSIGNMENT #2 = DATA TYPES //

// let isIsland = false;
// let language;

// // console.log(typeof isIsland);
// // console.log(typeof population);
// // console.log(typeof country);
// // console.log(typeof continent);
// // console.log(typeof language);

// // ASSIGNMENT #3 = LET, CONST and VAR //

// language = "tagalog";
// // const country = "Philippines";
// // const contient = "Asia";
// // const isIsland = false;
// // isIsland = true;

// // ASSIGNMENT #3 = BASIC OPERATORS //

// let halfPopulation = population / 2;
// let halfPopulation2 = halfPopulation / 2;
// halfPopulation++;

// const finlandPopulation = 6;
// console.log(finlandPopulation < population);

// let avgPopulation = 33;
// let higherPopulation = population < avgPopulation;
// console.log(population < avgPopulation);

// const description =
//   country +
//   " " +
//   "is in " +
//   continent +
//   ", and its " +
//   population +
//   " million people speak " +
//   language;
// console.log(description);

// // ASSIGNMENT #4 = STRINGS AND TEMPLATE LITERALS //

// console.log(
//   `${country} is in ${continent}, and its ${population} million people speak ${language}`
// );

// // ASSIGNMENT #5 = TAKING DECISSIONS IF / ELSE CONDITION //

// // if (population > 33) {
// //   console.log(`${country} population is above average`);
// // } else {
// //   console.log(`${country} population is ${country} million is below average`);
// // }

// // ASSIGNEMENT #6 = TYPE CONVERSION AND COERCION //

// // `9` -
// //   `5` // 4
// //   `19` -
// //   `13` +
// //   `17` // 617
// //   `19` -
// //   `13` +
// //   17 // 23
// //   `123` <
// //   57; // false
// // 5 + 6 + `4` + 9 - 4 - 2; //1143

// // ASSIGNMENT #7 EQUALITY OPERATORS == VS === //

// // const numNeighbors = Number(
// //   prompt(`How many neighbor countries does your country have?`)
// // );

// // if (numNeighbors === 1) {
// //   console.log(`Only 1 border!`);
// // } else if (numNeighbors >= 1) {
// //   console.log(`More than 1 border!`);
// // } else {
// //   console.log(`No borders!`);
// // }

// // ASSIGNMENT #8 = LOGICAL OPERATORS //

// // if (language === "english" && population < 50 && !isIsland) {
// //   console.log(`You should live in ${country}:`);
// // } else {
// //   console.log(`${country}does not meet your criteria :(`);
// // }

// // ASSIGNMENT #9 = THE SWITCH STATEMENT //

// // switch (language) {
// //   case `spanish`:
// //     console.log(`Most number of native speakers`);
// //     break;
// //   case `china`:
// //     console.log(`2nd place in number of native speakers`);
// //     break;
// //   case `english`:
// //     console.log(`3rd place`);
// //     break;
// //   case `hindi`:
// //     console.log(`Number 4`);
// //     break;
// //   case `arabic`:
// //     console.log(`5th most spoken language`);
// //     break;
// //   default:
// //     console.log(`great language too`);
// // }

// // ASSIGNMENT #10 = CONDITIONAL (TERNARY) OPERATOR //

// const ave =
//   population > 33
//     ? `${country}'s population is above average`
//     : `${country}'s population is below average`;

// console.log(ave);

//////////////// PART 2 ///////////////////

// ASSIGNMENT #11 = FUNCTIONS //

// const describeCountry = function (country, population, capitalCity) {
//   return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const dc1 = describeCountry(`Phillipines`, 100, `Manila`);
// const dc2 = describeCountry(`Singapore`, 5, `Changi`);
// const dc3 = describeCountry(`USA`, 200, `California`);

// console.log(dc1);
// console.log(dc2);
// console.log(dc3);

// ASSIGNMENT #12 = FUNCTION DECLARATION VS FUNCTINO EXPERESSION//

function percentageOfTheWorld(population) {
  return (population / 7900) * 100;
}

// const percentageOfTheWorld2 = function (population) {
//   return (population / 7900) * 100;
// };

// const philippinesPopulation = percentageOfTheWorld(1441);
// const singaporePopulation = percentageOfTheWorld(5);
// const USApopulation = percentageOfTheWorld(200);

// console.log(philippinesPopulation);
// console.log(singaporePopulation);
// console.log(USApopulation);

// // ASSIGNMENT #13 = ARROW FUNCTION//

// const percentageOfTheWorld3 = (population) =>
//   (population / worldPopulation) * 100;

// console.log(percentageOfTheWorld3(1441));

// ASSIGNMENT #14 = FUNCTIONS CALLING OTHER FUNCTIONS //

// function describePopulation(country, population) {
//   let avg = percentageOfTheWorld(population);
//   return `${country} has ${population} million people which is about ${avg} of the world.`;
// }

// describePopulation(`PI`, 100);
// describePopulation(`SG`, 200);
// describePopulation(`US`, 300);

// ASSIGNMENT #15 = ARRAYS //

// const populations = [100, 200, 300, 400];
// console.log(populations.length === 4);
// const percentages = [
//   percentageOfTheWorld(populations[0]),
//   percentageOfTheWorld(populations[1]),
//   percentageOfTheWorld(populations[2]),
//   percentageOfTheWorld(populations[populations.length - 1]),
// ];
// console.log(percentages);

// ASSIGNMENT #16 = BASIC ARRAY OPERATIONS (METHODS) //

// const neighbors = [`PI`, `SG`, `US`];
// neighbors.push(`Utopia`);
// console.log(neighbors);
// neighbors.pop();
// console.log(neighbors);

// if (!neighbors.includes(`Gernany`)) {
//   console.log(`Germany is not included`);
// }

// const change = neighbors.indexOf(`SG`);
// console.log(change);

// neighbors[1] = `Singapura`;

// neighbors[neighbors.indexOf("US")] = `United States of America`;

// console.log(neighbors);

// ASSIGNMENT # 17 = OBJECTS //

// const myCountry = {
//   country: `Philippines`,
//   capital: `Manila`,
//   language: `Tagalog`,
//   neighbors: [`HK`, `TH`, `JPN`, `KL`],
// };

// ASSIGNEMNT #18 = DOT VS BRACKET NOTATION //
