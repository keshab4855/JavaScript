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

//////////////////////////////CODING CHALLENGE 1 SOLUTION////////////////////////////
let massMark = 78;
let heightMark = 1.69;

let markBMI = massMark / (heightMark * heightMark);
console.log(markBMI);

let massJohn = 92;
let heightJohn = 1.95;
let jhonBMI = massJohn / (heightJohn * heightJohn);
console.log(jhonBMI);

let markHigherBMI = markBMI > jhonBMI;
console.log(markHigherBMI);
