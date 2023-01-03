"use strict";

////////////////// VALUES AND VARIABLES////////////////////////////
// let country = "Nepal";
// let continent = "Asia";
// let population = 20000000;
// console.log(country, continent, population);

//////////////////////LET, CONST AND VAR////////////////////////////

// let age = 30;
// age = 31;
// console.log(age);

// const age1 = 30;
// age1 = 31;
// console.log(age1);

//////////////////////////////OPERATORS////////////////////////////
// const currentYear = 2023;
// const ageKesh = currentYear - 1998;
// const ageSus = currentYear - 2001;
// console.log(ageKesh, ageSus);

// console.log(ageKesh * 3);
// console.log(ageKesh ** 3);
// console.log(ageSus / 3);

// const fName = "Kesh ";
// const lName = "Roka";
// console.log(fName + lName);

//////////////////////////////CODING CHALLENGE 1////////////////////////////
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

////////////////////////////CODING CHALLENGE 1 SOLUTION////////////////////////////
// let massMark = 78;
// let heightMark = 1.69;

// let markBMI = massMark / (heightMark * heightMark);
// console.log(markBMI);

// let massJohn = 92;
// let heightJohn = 1.95;
// let jhonBMI = massJohn / (heightJohn * heightJohn);
// console.log(jhonBMI);

// let markHigherBMI = markBMI > jhonBMI;
// console.log(markHigherBMI);

////////////////////////////if/else////////////////////////////
// const age = 13;
// const isOldEnough = age >= 18;
// if (isOldEnough) {
//   console.log("You can drive the car");
// } else {
//   console.log("Sorry, you are underage");
// }

////////////////////////////CODING CHALLENGE 2////////////////////////////

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

////////////////////////////CODING CHALLENGE 2 SOLUTION////////////////////////////
// if (markBMI > jhonBMI) {
//   console.log("Mark's BMI is higher than John's!");
// } else {
//   console.log("John's BMI is higher than Mark's!");
// }

// console.log(`Mark's BMI${markBMI} is higher than Jhon's ${jhonBMI}`);

////////////////////////////Type CONVERSION AND Type COERCION////////////////////////////
// const inputYear = "1998";
// console.log(typeof inputYear);
// console.log(inputYear + 98);
// console.log(typeof Number(inputYear));

////////////////////////////CODING CHALLENGE 3////////////////////////////
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

////////////////////////////CODING CHALLENGE 3 SOLUTION////////////////////////////
// const averageScoreDolphin = (96 + 108 + 89) / 3;
// const averageScoreKoalas = (88 + 91 + 110) / 3;
// console.log(
//   `Average score of DOlphin is ${averageScoreDolphin} and Koalas is ${averageScoreKoalas}`
// );

// let minimumScore = 100;
// if (
//   averageScoreDolphin > averageScoreKoalas ||
//   averageScoreDolphin >= minimumScore
// ) {
//   console.log("Dolphins are the winners ");
// } else if (
//   averageScoreKoalas > averageScoreDolphin ||
//   averageScoreKoalas >= minimumScore
// ) {
//   console.log("Koalas are winner");
// } else {
//   console.log("match is draw");
// }

////////////////////////////CODING CHALLENGE 4 ////////////////////////////
// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

////////////////////////////CODING CHALLENGE 4 SOLUTION////////////////////////////
// let bill = 275;
// let tip = 41.25;

// 50 <= bill <= 300
//   ? console.log(`Tip is ${(15 / 100) * bill}`)
//   : console.log(`Tip is ${(20 / 100) * bill}`);

// console.log(`Total value was ${bill + tip}`);

////////////////////////////JS FUNDAMENTAL////////////////////////////
// function logger() {
//   return console.log("My name is Keshab");
// }

// logger();
// logger();

///////////////////////FUNCTIONS//////////////////////
// function fruitProcessor(apples, oranges) {
//   //   console.log(apples, oranges);
//   const juice = `Juice with ${apples}apples and ${oranges}oranges`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 3);
// console.log(appleJuice);

// const fruitProcessor = (apple, orange) => {
//   console.log(`Juice with ${apple}apples and ${orange}oranges`);
// };
// fruitProcessor(2, 3);

////////////////////////////CODING CHALLENGE 1////////////////////////////

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

////////////////////////////CODING CHALLENGE 1 SOLUTION////////////////////////////

// const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;
// let avgDolphins = calcAverage(85, 54, 41);
// console.log(`Dolphin average is ${avgDolphins}`);
// let avgKoalas = calcAverage(23, 34, 27);
// console.log(`Koalas average is ${avgKoalas}`);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins wins ${avgDolphins} vs ${avgKoalas}`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`Koalas wins (${avgDolphins} vs ${avgKoalas})`);
//   } else {
//     console.log("No team wins");
//   }
//   return;
// };

// checkWinner(avgDolphins, avgKoalas);

////////////////////////////ARRAYS////////////////////////////

// let friends = ["keshb", "hari", "Ram"];
// console.log(friends);

// console.log(friends[2]);
// console.log(friends.length);
// friends[2] = "Ramesh";
// console.log(friends);

// const fName = "keshab";
// const lName = "Roka";
// const age = 2023 - 1998;
// const keshab = [fName, lName, age, friends];
// console.log(keshab.length);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };
// const years = [1990, 2001, 1993, 1997, 1998];
// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[2]);
// const age4 = calcAge(years[years.length - 1]);
// const ages = [age1, age2, age3, age4];
// console.log(ages);

////////////////////////////ARRAYS METHODS////////////////////////////
// let friends = ["keshb", "hari", "Ram"];
// friends.push("sham");
// console.log(friends);

// friends.unshift("Jay");
// console.log(friends);

// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("hari"));

////////////////////////////CODING CHALLENGE 2 ////////////////////////////
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �
////////////////////////////CODING CHALLENGE 2 SOLUTION////////////////////////////

// const calcTip = (billValue) => {
//   if (billValue >= 50 && billValue <= 300) {
//     return (15 / 100) * billValue;
//   } else {
//     return (20 / 100) * billValue;
//   }
// };

// const calcTip = (billValue) =>
//   billValue >= 50 && billValue <= 300
//     ? (15 / 100) * billValue
//     : (20 / 100) * billValue;

// const bills = [125, 555, 44];
// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);

// const tips = [tip1, tip2, tip3];
// console.log(tips);

// const total = [bills[0] + tip1, bills[1] + tip2, bills[2] + tip3];
// console.log(total);

////////////////////////////OBJECTS////////////////////////////
// const keshab = {
//   fName: "Keshab",
//   lName: "Roka",
//   age: 2023 - 1998,
//   friends: ["keshb", "hari", "Ram"],
// };
// console.log(keshab);
// console.log(keshab.lName);
// console.log(keshab["lName"]);

// console.log(
//   `${keshab.fName} has ${keshab.friends.length} friends. His best friend is ${keshab.friends[0]}`
// );

// console.log(
//   `${keshab["fName"]} has ${keshab["friends"].length} friends. His best friend is ${keshab["friends"][0]}`
// );

// const keshab = {
//   fName: "Keshab",
//   lName: "Roka",
//   birthYear: 1998,
//   friends: ["keshb", "hari", "Ram"],
//   hasDriverLicense: false,
//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },
// };

// console.log(keshab.calcAge());
// keshab.hasDriverLicense
//   ? (keshab.details = "has a license")
//   : (keshab.details = "has not a license");

// console.log(
//   `${keshab.fName} is a ${keshab.calcAge()} year old ${(keshab.job =
//     "teacher")} and he ${keshab.details}`
// );

////////////////////////////CODING CHALLENGE 3 ////////////////////////////

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

////////////////////////////CODING CHALLENGE 3 SOLUTION////////////////////////////
// let Mark = {
//   fName: "Mark ",
//   lName: "Miller",
//   fullName: function () {
//     return this.fName + this.lName;
//   },
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };

// console.log(Mark.fullName);
// const markBMI = Mark.calcBMI();

// let John = {
//   fName: "John ",
//   lName: "SMith",
//   fullName: function () {
//     return this.fName + this.lName;
//   },
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     return this.mass / this.height ** 2;
//   },
// };
// const johnBMI = John.calcBMI();

// markBMI > johnBMI
//   ? console.log(
//       `${Mark.fullName()}'s ${markBMI} has higher BMI than ${John.fullName()}'s ${johnBMI}`
//     )
//   : console.log(
//       `${John.fullName()}'s ${johnBMI} has higher BMI than ${Mark.fullName()}'s ${markBMI}`
//     );

////////////////////////////FOR LOOP////////////////////////////
// for (let index = 1; index <= 10; index++) {
//   console.log(`Lifting weight repetition ${index}`);
// }

// const keshabArray = [
//   "keshab",
//   "roka",
//   2023 - 1998,
//   "teacher",
//   ["Hari", "sahn", "alex"],
//   true,
// ];

// const types = [];

// for (let i = 0; i < keshabArray.length; i++) {
//   console.log(keshabArray[i], typeof keshabArray[i]);
//   types.push(typeof keshabArray[i]);
// }

// console.log(types);

// const years = [1991, 1994, 2001, 2003, 2004];
// let age = [];

// for (let i = 0; i < years.length; i++) {
//   age[i] = 2023 - years[i];
// }
// console.log(age);

//////////////////////continuing and break////////////////////////

// const keshabArray = [
//   "keshab",
//   "roka",
//   2023 - 1998,
//   "teacher",
//   ["Hari", "sahn", "alex"],
//   true,
// ];

// console.log("------Only strings----");

// for (let i = 0; i < keshabArray.length; i++) {
//   if (typeof keshabArray[i] !== "string") continue;
//   console.log(keshabArray[i], typeof keshabArray[i]);
// }

// console.log("------Break with numbers----");

// for (let i = 0; i < keshabArray.length; i++) {
//   if (typeof keshabArray[i] === "number") break;
//   console.log(keshabArray[i], typeof keshabArray[i]);
// }

//////////////looping backwards//////////////
// const keshabArray = [
//   "keshab",
//   "roka",
//   2023 - 1998,
//   "teacher",
//   ["Hari", "sahn", "alex"],
//   true,
// ];
// for (let i = keshabArray.length - 1; i > 0; i--) {
//   console.log([i], keshabArray[i]);
// }

//////////////loops in loops///////////////////
// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-----Starting exercise ${exercise}`);
//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Lifting weight repetition ${rep}`);
//   }
// }

/////////////////while loop ////////////////////////////
// for (let index = 1; index <= 10; index++) {
//   console.log(`Lifting weight repetition ${index}`);
// }

// let rep = 1;
// while (rep <= 10) {
//   console.log(`Lifting weight repetition ${rep}`);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6);
// while (dice !== 6) {
//   console.log(`${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) {
//     console.log("Hurray ! you got 6");
//   }
// }

////////////////////DOM MANIPULATION//////////////////////////

// let scoreMessage = document.querySelector(".message").textContent;
// let secretNumber = document.querySelector(".number").textContent;
// let score = document.querySelector(".score").textContent;
// document.querySelector(".guess").value = 23;

// console.log(document.querySelector(".guess").value);

let number = Math.trunc(Math.random() * 20 + 1);
let highscore = 0;

let score = 20;
document.querySelector(".score").textContent = score;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent = "No Number !!";
  } else if (guess > number) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too high";
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (guess < number) {
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".message").textContent = "Too low";
    } else {
      document.querySelector(".message").textContent = "You lost the game";
    }
  } else if (guess === number) {
    document.querySelector(".number").textContent = number;
    document.querySelector(".message").textContent =
      "Correct !! You are a winner";
    document.querySelector("body").style.backgroundColor = "green";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    document.querySelector(".message").textContent = "Start guessing....";
  }
});

document.querySelector(".again").addEventListener("click", () => {
  score = 20;
  number = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "Start guessing....";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  return;
});
