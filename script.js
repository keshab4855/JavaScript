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
let bill = 275;
let tip = 41.25;

50 <= bill <= 300
  ? console.log(`Tip is ${(15 / 100) * bill}`)
  : console.log(`Tip is ${(20 / 100) * bill}`);

console.log(`Total value was ${bill + tip}`);
