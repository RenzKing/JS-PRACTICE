// // FUNCTION DECLARATION = (KEYWORD + FUNCTION NAME + PARAMETER) //

// // KEYWORD + FUNCTION NAME + PARAMETER //

// // function logger(a, b) {
// //   const greeter = `Hello ${a} + ${b} is equals to ${a + b}`;
// //   return greeter;
// // }
// // const run = logger(4, 3);

// // FUNCTION EXPRESSION = (FUNCTION NAME + KEYWORD + PARAMETER)//

// // const logger2 = function (c, d) {
// //   const greeter2 = `Hello ${c} + ${d} is equals to ${c + d}`;
// //   return greeter2;
// // };
// // const run2 = logger2(1, 2);

// // ARROW FUNCTION = (FUNCTION NAME + PARAMETER + => {}) //

// // FUNCTION NAME + PARAMETER + => {} + RETURN//

// // const arrow = arrow1 => 1 + 1;
// // const arrow2 = (arrow3, arrow4) => {
// // };

//FUNCTION DEFAULT VALUE//
// const num = (x = 5, y = 10) => x + y;
// console.log(num());

// //////// LOOP /////////

// //Automate repetetive task//

// //FOR LOOP//

// // console.log(`lifting weights repetetion 1`);
// // console.log(`lifting weights repetetion 2`);
// // console.log(`lifting weights repetetion 3`);
// // console.log(`lifting weights repetetion 4`);
// // console.log(`lifting weights repetetion 5`);
// // console.log(`lifting weights repetetion 6`);
// // console.log(`lifting weights repetetion 7`);
// // console.log(`lifting weights repetetion 8`);
// // console.log(`lifting weights repetetion 9`);
// // console.log(`lifting weights repetetion 10`);

// // for (let i = 1; i <= 10; i++) {
// //   console.log(`testing ${i}`);
// // }
// // // const testing = [];
// // const friends = [`Michael`, `Peter`, `Steven`];
// // // const renz = [`Renz`, `King`, `Gayacao`];
// // const jonas = [`Jonas`, `Schedtmann`, 2037 - 1991, `Teacher`, friends, true];

// // // for (let i = 0; i < jonas.length; i++) {
// // //   console.log(jonas[i], typeof jonas[i]);
// // // }

// // // //FILLING TYPES ARRAY//
// // // for (let a = 0; a < renz.length; a++) {
// // //   testing[a] = renz[a];
// // // }
// // // console.log(testing);

// // // const birthYear = [1991, 2007, 1969, 2020];
// // // const ages = [];

// // // for (let i = 0; i < birthYear.length; i++) {
// // //   ages.push(2037 - birthYear[i]);
// // // }
// // // console.log(ages);

// // for (let i = 0; i < jonas.length; i++) {
// //   if (typeof jonas[i] !== `string`) continue;
// //   console.log(jonas[i], typeof jonas[i]);
// // }

// // const bodyTempInput = Number(prompt(`Enter your body temperature`));

// // if (bodyTempInput <= 36.0) {
// //   console.log(`Your body temperature is below normal`);
// // } else if (bodyTempInput >= 36.1 && bodyTempInput <= 37.2) {
// //   console.log(`Your body temperature is normal`);
// // } else if (bodyTempInput >= 37.3) {
// //   console.log(`Your body temperature is above normal`);
// // } else {
// //   console.log(`Not a number`);
// // }

// // const equivalenceInput = Number(prompt(`Please enter your grade`));

// // if (!isNaN(equivalenceInput)) {
// //   if (equivalenceInput >= 96 && equivalenceInput <= 100) {
// //     console.log(
// //       `The student has an excellent grade (${equivalenceInput}) with Grade Point Equivalence of 1`
// //     );
// //   } else if (equivalenceInput >= 94 && equivalenceInput <= 95) {
// //     console.log(
// //       `The student has an excellent grade ${equivalenceInput} with Grade Point Equivalence of 1.25`
// //     );
// //   } else if (equivalenceInput >= 92 && equivalenceInput <= 93) {
// //     console.log(
// //       `The student has an excellent grade ${equivalenceInput} with Grade Point Equivalence of 1.50`
// //     );
// //   } else if (equivalenceInput >= 89 && equivalenceInput <= 91) {
// //     console.log(
// //       `The student has an excellent grade ${equivalenceInput} with Grade Point Equivalence of 1.75`
// //     );
// //   } else if (equivalenceInput >= 87 && equivalenceInput <= 88) {
// //     console.log(
// //       `The student has an excellent grade ${equivalenceInput} with Grade Point Equivalence of 2`
// //     );
// //   }
// // } else {
// //   console.log(`Not a valid number`);
// // // }
// // const keys = [1, 2, 3, 4, 5, 6];
// // const renz = {
// //   fullName: `Renz King`,
// //   lastName: `Gayacao`,
// //   birthYear: 1986,
// //   gender: `Male`,
// //   location: `Makati City`,
// //   hasDL: true,

// //   calcAge: function () {
// //     this.age = 2023 - this.birthYear;
// //     return this.age;
// //   },
// // };

// // // console.log(renz[`lastName`]);
// // // console.log(renz[`fullName`]);

// // renz.city = `Guada`;
// // renz[`wife`] = `Grace`;

// // keys.num = `hey`;
// // keys[`number`] = `yo!`;

// // keys.push(`Metro Manila`);
// // keys.pop();

// // const postComments = [
// //   {
// //     userName: `username123`,
// //     likse: 101,
// //     comment: `This is nice!`,
// //   },

// //   {
// //     userName: `username456`,
// //     likes: 1000,
// //     comment: `Hey there!`,
// //   },
// // ];

// // // console.log(postComments[1].likes);
// // // console.log(postComments[1][`likes`]);

// // renz.grades = {
// //   prelim: 76,
// //   midterm: 87,
// //   finals: 74,
// // };

// // console.log(renz.grades.finals);
// // console.log(renz[`grades`][`finals`]);

// // const cycleArr = [`eat`, `code`, `sleep`, `Repeat`];

// // console.log(cycleArr[1]);

// // cycleArr[0] = `Nap`;

// // console.log(cycleArr);

// // console.log(`the length is ${cycleArr.length}`);

// // console.log(cycleArr);

// // console.log(cycleArr.sort());

// // const car = {
// //   carName: `Handa City`,
// //   carType: `Sedan`,
// //   transmission: `AT`,
// //   inNew: true,
// // };
// // console.log(car.carType);

// // const student = {
// //   firstName: `Juan`,
// //   age: 18,
// //   year: `4th`,
// // };

// // console.log(
// //   `${student.firstName} is ${student.age} years old and currently a ${student.year} student`
// // );

// // const days = [
// //   `Sunday`,
// //   `Monday`,
// //   `Tuesday`,
// //   `Wednesday`,
// //   `Thursday`,
// //   `Friday`,
// //   `Saturday`,
// // ];

// // for (let i = days.length - 1; i >= 0; i--) {
// //   console.log(i, days[i]);
// // }
// // console.log(`=================================`);

// // for (let i = 0; i <= days.length - 1; i++) {
// //   console.log(i, days[i].toUpperCase());
// // }

// // for (let i = 0; i <= 5; i++) {
// //   console.log(`This is i ${i}`);
// //   for (let r = 0; r <= 5; r++) {
// //     console.log(`-----This is r ${r}`);
// //   }
// // }

// // const seatPlan = [
// //   [`Student 1`, `Student 2`, `Student 3`],
// //   [`Student 4`, `Student 5`, `Student 6`],
// //   [`Student 7`, `Student 8`, `Student 9`],
// // ];

// // for (let i = 0; i < seatPlan.length; i++) {
// //   const row = seatPlan[i];
// //   console.log(`ROW ${i + 1}`);

// //   for (let a = 0; a < row.length; a++) {
// //     console.log(row[i]);
// //   }
// // }

// // for (let i = 0; i <= 10000; i++) {
// //   console.log(i);
// //   if (i == 10) {
// //     break;
// //   }
// // }

// // for (let i = 0; i < days.length; i++) {
// //   console.log(i, days[i]);
// // }

// // let num = 0;

// // while (num < days.length) {
// //   console.log(num, days[num]);
// //   num++;
// // }

// // for (let day of days) {
// //   console.log(day);
// // }

// // // let userInput = prompt(`Enter a command:`);
// // const days = [
// //   `Sunday`,
// //   `Monday`,
// //   `Tuesday`,
// //   `Wednesday`,
// //   `Thursday`,
// //   `Friday`,
// //   `Saturday`,
// // ];

// // const weeks = [
// //   `Week 1`,
// //   `Week 2`,
// //   `Week 3`,
// //   `Week 4`,
// //   `Week 5`,
// //   `Week 6`,
// //   `Week 7`,
// // ];

// // const friends = [`Renz`, `King`, `Gaddi`, `Gayacao`];
// // const jonas = [`Jonas`, `Schedtmann`, 2037 - 1991, `Teacher`, friends, true];
// // const years = [1991, 2007, 1969, 2020];
// // const peeps = [];
// // const loop = [];
// // const ages = [];
// // for (let i = 0; i < jonas.length; i++) {
// //   // console.log(jonas[i]);
// // }

// // for (let i = 0; i < 5; i++) {
// //   console.log(`*****This is outerloop number ${i + 1}*****`);
// //   for (let a = 0; a < 5; a++) {
// //     console.log(`innerloop number ${a + 1}`);
// //   }
// //   loop[i] = typeof jonas[i];
// // }

// // for (i = 0; i < years.length; i++) {
// //   ages.push(2037 - years[i]);
// //   if (typeof jonas[i] !== `string`) continue;
// //   console.log(jonas[i], typeof jonas[i]);
// // // }

// // let dice = Math.floor(Math.random() * 6) + 1;

// // while (dice !== 6) {
// //   console.log(`Dice is stopped at 6`);
// //   num++;
// // }

// // const cycleArr = [`eat`, `code`, `sleep`, `repeat`];

// // let secondElement = cycleArr[1];

// // console.log(secondElement);

// // cycleArr.splice(0, 1, `nappiing`);

// // cycleArr[0] = `nap`;

// // console.log(cycleArr);

// // console.log(cycleArr.length);

// // cycleArr.pop();
// // console.log(cycleArr);

// // cycleArr.push(`repeat`);

// // console.log(cycleArr);

// // cycleArr.splice(1, 2);

// // console.log(cycleArr);

// // cycleArr.sort();

// // cycleArr[2] = `sleep`;
// // cycleArr[3] = `repeat`;
// // cycleArr[1] =`code`
// // cycleArr.sort();
// // console.log(cycleArr);

// const seatPlan = [
//   [`Studen1`, `Student2`, `Student3`],
//   [`Studen4`, `Student5`, `Student6`],
//   [`Studen7`, `Student8`, `Student9`],
// ];

// // for (let i = 0; i <= seatPlan.length - 1; i++) {
// //   const row = seatPlan[i];
// //   console.log(`ROW ${i + 1}`);

// //   for (a = 0; a <= row.length - 1; a++) {
// //     console.log(row[a]);
// //   }
// // }

// // const userPass = `pass123`;

// // let countXPass = 0;
// // let inputPass = prompt(`Please enter the correct password`);

// // while (inputPass != userPass) {
// //   inputPass = prompt(`Invalid password`);
// //   countXPass++;
// //   if (countXPass == 3) {
// //     prompt(`retry again after 2 mins`);
// //   }
// // }

// // console.log(`Correct password!`);

// // for (let i = 0; i <= 100; i++) {
// //   console.log(i);
// //   if (i === 50) {
// //     break;
// //   }
// // }

// // for (let seat of seatPlan) {
// //   console.log(seat);
// // }

// const studentsGrade = {
//   s1: 99,
//   s2: 98,
//   s3: 97,
//   s4: 96,
// };

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let num of nums) {
//   console.log(num);
// }
// console.log(`============`);

// for (let i = 0; i <= nums.length; i++) {
//   console.log(i);
// }

// let nums = 0;
// while (nums < 10) {
//   console.log(nums);
//   nums++;
// }

// console.log('==========');

// let num = 0;
// while (num < 10) {
//   console.log(num);
//   num += 2;
// }

// for (let student in studentsGrade) {
//   console.log(`${student} got ${studentsGrade[student]}`);
// }

// const days = [
//   `Monday`,
//   `Tuesday`,
//   `Wednesday`,
//   `Thursday`,
//   `Friday`,
//   `Saturday`,
//   `Sunday`,
// ];

// const weeks = [`Week1`, `Week2`, `Week3`, `Week4`, `Week5`, `Week6`, `Week7`];

// for (let i = days.length; i >= 0; i--) {
//   const araw = days.length;
//   console.log(`==============`);

//   // this prints i = equivalent to days.length(7) and prints Weeks array numbers "[i]" which is the number of days.length =  weeks[i] or weeks[0],weeks[1],weeks[2],weeks[3],weeks[4],weeks[5],weeks[6],
//   console.log(i, weeks[i - 1].toUpperCase());

//   console.log(`==============`);

//   for (let a = 0; a <= days.length - 1; a++) {
//     // this prints a = equivalent to days.length(7) and prints days array numbers "[i]" which is the number of days.length =  days[i] or days[0],days[1],days[2],days[3],days[4],days[5],da[6],

//     console.log(a + 1, days[a]);
//   }
// }

// let input = prompt('What would you like to say');

// while (true) {
//   input = prompt(`you type ${input}`);
//   if (input === `quit`) {
//     break;
//   }
// }

// alert('quitting...');

// for (let i = 0; i <= 10000; i++) {
//   console.log(i);
//   if (i === 100) {
//     break;
//   }
// }
//
// let input = prompt(`Type your password`);

// const pass = `PASSWORD`;
// let passX = 0;

// while (true) {
//   input = prompt(`Wrong password.Try again!`);

//   if (input === 'PASSWORD') {
//     break;
//   }
// }

// alert(`Logging in...`);

// for (let seat of seatPlan) {
//   console.log(seat);

//   for (let student of seat) {
//     console.log(student);
//   }
// }
//*************************************//

////////////////////////////////////////////////////////////// TO-DO LIST /////////////////////////////////////

// // The first line creates a variable called "userInput" and prompts the user to enter a command.
// let userInput = prompt(`Enter your command:`);

// // The second line creates an empty array called "todos" to store the to-do list items.

// const todos = [];

// // The "while" loop runs as long as the user does not enter  the word "quit".
// while (userInput != 'quit') {
//   // Inside the loop, the code checks if the user's input is "List". If it is, the code prints a line of asterisks and then prints each item in the "todos" array, along with its corresponding index.
//   if (userInput === `List`) {
//     console.log(`**********`);
//     for (let i = 0; i < todos.length; i++) {
//       console.log(`${i}: ${todos[i]}`);
//     }
//     console.log(`**********`);

//     // If the user's input is "New", the code prompts the user to enter a new to-do item, prints a message indicating that the item has been added to the to-do list, and then adds the new item to the "todos" array using the "push" method.
//   } else if (userInput === `New`) {
//     const newTodo = prompt(`Enter you new to-do item:`);
//     console.log(`${newTodo} has been added to your to-do list`);
//     todos.push(newTodo);

//     // If the user's input is "Delete", the code prompts the user to enter the index of the item they want to delete, prints a message indicating that the item has been deleted, and then removes the item from the "todos" array using the "splice" method.
//   } else if (userInput === `Delete`) {
//     const removeTodo = prompt(`Enter the item's index you want to be deleted`);
//     console.log(`${todos[removeTodo]} has been deleted`);
//     todos.splice(removeTodo, 1);
//   }
//   // Finally, the code prompts the user to enter another command and the loop repeats until the user enters "quit".
//   userInput = prompt(`Enter a command:`);
// }

// // When the loop ends, two alerts are displayed to indicate that the program is quitting and that the app has been closed.
// alert(`Quitting...`);
// alert(`App has been closed!`);

// ////////////////////////////////////////////////////////////////// END OF TO-DO LIST /////////////////////////////////////

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// console.log(`========`);
// for (let num of nums) {
//   console.log(num);
// }

// console.log(`========`);
// for (i = 20; i >= 11; i--) {
//   console.log(i);
// }

// console.log(`========`);

// let num = 0;

// while (num < 10) {
//   console.log(num);
//   num++;
// }

// console.log(`****`);

// while (num < 10) {
//   console.log(num);
//   num += 2;
// }

// function compute(c) {
//   return (c * 9) / 5 + 32;
// }
// console.log(compute(36.1));
// console.log(compute(39.1));
// console.log(compute(37.1));

// function calc(radius) {
//   return `Perimeter: ${2 * Math.PI * radius}, Area:${
//     Math.PI * radius * radius
//   }`;
// }

// // console.log(calc(40));
// // console.log(calc(20));

// const circle = {
//   perimeter: function (radius) {
//     return 2 * Math.PI * radius;
//   },

//   area: function (radius) {
//     return Math.PI * radius * radius;
//     this.area(40);
//   },
// };
// console.log(circle.perimeter(40));
// console.log(circle.area(40));

// const greeting = person => {
//   const name = person ? person.name : `Stranger`;
//   return `Hello, ${name}`;
// };

// console.log(greeting({ name: `king` }));
// console.log(greeting(null));

// const square = {
//   perimeter: function (sidelength) {
//     return sidelength * 4;
//   },

//   area: function (sidelength) {
//     return sidelength * sidelength;
//   },
// };

// console.log(square.perimeter(5));
// console.log(square.area(5));

// const scoring = {
//   player: `Lebron`,
//   score: 0,
//   madeTheShot() {
//     this.score++;
//     console.log(`${this.player} just made a score `);

//     return this.score;
//   },
// };

// console.log(scoring.madeTheShot());

//

// const names = [
//   {
//     firstName: `Renz`,
//     lastName: `King`,
//   },

//   {
//     firstName: `abcz`,
//     lastName: `efg`,
//   },

//   {
//     firstName: `hij`,
//     lastName: `klm`,
//   },

//   {
//     firstName: `opq`,
//     lastName: `rst`,
//   },

//   {
//     firstName: `uve`,
//     lastName: `xzy`,
//   },
// ];

// const fName = names.map(function (pangalan) {
//   return pangalan.firstName;
// });

// const lName = names.map(function (palayaw) {
//   return palayaw.lastName;
// });

// console.log(
//   `This is the first name (${fName}) this is the last name (${lName})`
// );

// const arrrw = names.map(arw => arw.firstName);

// const arrow = (a, b) => a + b;

// const circle = {
//   perimeter: function (radius) {
//     return 2 * Math.PI * radius;
//   },

//   area: radius => Math.PI * radius * radius,
// };

// const testt = names.map(ngalan => ngalan.firstName);
// const test = names.forEach(uno => uno.firstName);

// console.log(circle.area(10));
// console.log(circle.perimeter(10));
// console.log(testt);
// console.log(test);

// const scoring = {
//   player: `Lebron`,
//   score: 0,
//   madeTheShot() {
//     this.score++;
//     return this.score;
//   },
// };

// scoring.madeTheShot();
// console.log(scoring.madeTheShot());

// const scoring = {
//     player: `Lebron`,
//     score: 0,
//     madeTheShot() {
//       this.score++;
//       console.log(`${this.player} just made a score `);

//       return this.score;
//     },
//   };

//   console.log(scoring.madeTheShot());

// const fName = names.map(pangalan => pangalan.firstName);

// const mName = names.map(function (pangalan) {
//   return `${pangalan.middleName}, ${pangalan.lastName}`;
// });

// // const lName = names.map(function (pangalan) {
// //   return pangalan.lastName;
// // });

// // // console.log(fName, mName);
// // // console.log(lName);

// const id = setInterval(() => console.log(Math.floor(Math.random() * 30)), 1000);
// console.log(id);

// if (`${id}`  23) {
//   console.log(`Closing in few seconds`);
//   console.log(clearInterval(id), 2000);
// } else {
//   console.log(`none`);
// }

// let intervalId = setInterval(() => {
//   const random = Math.floor(Math.random() * 30);
//   console.log(random);

//   if (random === 29) {
// Set the countdown time in seconds

// const timer = setInterval(() => {
//   let random = Math.floor(Math.random() * 30);
//   console.log(random);

//   if (random === 20) {
//     console.log(`Stopping timer`);
//     s;
//     clearInterval(timer);
//   }
// }, 2000);

// const students = [
//   {
//     studentName: `Student1`,
//     gpa: 99,
//   },
//   {
//     studentName: `Student2`,
//     gpa: 89,
//   },
//   {
//     studentName: `Student3`,
//     gpa: 75,
//   },
// ];

// const highGpa = students.filter(high => high.gpa >= 90);

// const lowGpa = students.filter(low => low.gpa < 90);

// const lowGpaName = lowGpa.map(ls => ls.studentName);

// console.log(highGpa);
// console.log(lowGpa);
// console.log(lowGpaName);

// const ages = [121, 34, 3, 42, 15];

// const checkAge = ages.find(age => age < 20);

// function myFunction() {
//   return ages.find(checkAge);
// }

// const words = [`dogs`, `digs`, `logs`, `bags`];

// const test = words.every(word => word.length > 2);

// console.log(test);

// const examScores = [8, 98, 92, 77, 74, 89, 88];

// const check = examScores.some(score => score < 70);

// console.log(check);

// const animes = [
//   {
//     title: 'Naruto',
//     score: 100,
//   },

//   {
//     title: 'Capeta',
//     score: 98,
//   },

//   {
//     title: 'Hunter X Hunter',
//     score: 95,
//   },

//   {
//     title: 'Flame of Recca',
//     score: 90,
//   },
// ];

// const high = animes.reduce((low, high) => {
//   if (high.score < low.score) {
//     return high;
//   } else {
//     return low;
//   }
// });
// console.log(high);

// function rollDice(numSides) {
//   if (numSides === undefined) {
//     numSides = 6;
//   }
//   return Math.floor(Math.random() * numSides) + 1;
// }

// console.log(rollDice(6));

//DEFAULT PARAMETER//
// const greet = (person, msg = 'Hello there!') => console.log(`${msg} ${person}`);

//SPREAD OPERATOR//

// const nums = [9, 3, 4, 6];
// const num = [91, 12, 33, 55];

// const max = console.log(...num);
// const maxs = console.log(...nums);
// console.log(max);
// console.log(maxs);

// console.log(...'spread testing');

// SPREAD WITH ARRAY //

// const students1 = ['Renz', 'King', 'Gayacao'];

// const students2 = ['Mary', 'Grace', 'Manansala'];

// const allStudents = [...students1, ...students2, 'Gaddi'];

// console.log(...students1);
// console.log(...students2);
// console.log(allStudents);

// SPREAD WITH OBJECTS //
// const student1 = {
//   fName: 'Renz',
//   lName: 'King',
//   isMale: true,
// };

// const student2 = {
//   fname: 'Mary',
//   lName: 'Grace',
//   isFemale: true,
// };

// const students = { ...student1, ...student2 };

// console.log(...[student1]);
// // console.log(...[student2]);
// // console.log(...[student1], ...[student2]);
// console.log(students);

// const dataForm = {
//   fName: 'Renz',
//   lName: 'King',
//   isMale: true,
// };

// const credentials = {
//   userName: 12345,
//   password: 67890,
//   email: `11@1adf`,
// };

// const user1 = { ...dataForm, ...credentials };

// for (const key in user1) {
//   if (typeof user1[key] === `string`) {
//     user1[key] = user1[key].toUpperCase();
//   }
// }

// console.log(user1);

//**ARGUMENTS OBJECT**//
//-AVAILABLE INSIDE OF EVERY FUNCTIONS
//-ARRAY-LIKE OBJECT
//-CONTAINS ALL THE ARGUMENTS PASSED TO THE FUNCTION
//- NOT AVAILABLE INSIDE OF ARROW FUNCTIONS

// function sum() {
//   console.log(arguments);
// }
// sum(); // NO VALUES COLLECTED

// sum(1, 2); // WITH VALUES COLLECTED

//REST PARAMS//
//COLLECTS ALL REMAINING ARGUMENTS INTO AN ACTUAL ARRAY

// function sum(...nums) {
//   let total = 0;
//   for (let n of nums) {
//     total += n;
//   }
//   return total;
// }
// sum(1, 2, 3, 4);

//DESTRUCTURING//

// const top1 = [0];
// const top2 = [1];

// //CORRECT WAY OF DESTRUCTRING//
// const scores = [100, 95, 90, 85, 80];
// // const [top1, top2, top3, top4, top5] = scores;

// const [top1, top2, top3, top4, top5] = scores;
// console.log(top1, top2, top3, top4, top5);
// const [top1, top2, ...withHonors] = scores;

// scores.sort(function (a, b) {
//   return b - a;
// });

//DESTRUCTURE AN OBJECT//

// const dataFromForm = {
//   fName: 'Renz',
//   lName: 'King',
//   email: `rk@gmail.com`,
// };

// const dataFromForm2 = {
//   fName: 'Mary',
//   lName: 'Grace',
//   email: 'mg@gmail.com',
// };

// const dataFromForm3 = {
//   fName: 'Rev',
//   lName: 'Audentius',
// };

// // const firsName = dataFromForm.fName;
// // const lastName = dataFromForm.lName;
// const { fName, lName, email = 'N/A' } = dataFromForm;

//DESTRUCTURING PARAMS//

// function fullName(data) {
//   const { fName, lName } = data;
//   return `${fName} ${lName}`;
// }

// function fullName({ fname, lName }) {
//   return `${fname} ${lName}`;
// }

// console.log(fullName);

//DOM (DATA OBJECT MODEL)//
//The Document Object Model (DOM) is the data representation of the objects that comprise the structure and content of a document on the web.
//DOCUMENT IS AN OBJECT. IT IS THE GATEWAY FOR US TO ACCESS TAGS, ID, CLASS AND ELEMENTS THRU DOT NOTATION. "DOCUMENT."

// steps //
//1. SELECT
//2.MANIPULATE

//5 SELECTING METHODS//

//***getElementById()***//
//---The getElementById() is a Javascript function that lets you grab and HTML element, by its ID, and perform an action on it---//

//***getElementByTagName()***//
//The Element.getElementsByTagName()method returns a live HTML Collection of elements with the given tag name

//***getElementByClassName()***//

//***querySelector()***//

//***querySelectorAll()***//

const banner = document.getElementsByTagName('img');

for (let i = 0; i < 5; i++) {
  return;
}
