/*
This lecture was about variables and Data types
*/


// //These are are variables
// var firstName = 'John';
// var lastName = 'Smith';
// var age = 28;
// var fullAge = true;

// /*
// This is a multi
// line
// comment
//  */
// console.log('Name: ' + firstName + ' ' + lastName);
// console.log('Age: ' + age);
// console.log('Legal Adult: ' + fullAge);


/*
Lecture about Variable mutation and type coercion
*/

// var firstName = 'John';
// var age = 28;

// // Type coercion
// console.log(firstName + ' ' + age);  // Javascript automatically converted age to a string so we could combine it with a string

// var job, isMarried; //declare multiple varibles on one line
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // Variable mutation
// age = 'twenty eight';
// alert(firstName + ' is ' + age + ' years old.');

// var lastName = prompt('What is his last name?');
// console.log(firstName + ' ' + lastName);

/*
Basic operators
*/

// var now, yearJohn, yearMark, ageJohn, ageMark;

// //Math Operators
// now = 2018;
// ageJohn = 28;
// ageMark = 33;
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;
// console.log(yearJohn);
// console.log(now + 2);
// console.log(now * 2);
// console.log(now / 10);

// // Logical operators
// var johnOlder = ageJohn > ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'Mark is older than John');
// var x;
// console.log(typeof x);

/*
Operator Precedence
*/

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple operators
// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// // Grouping
// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// x *= 2; // x = x * 2
// console.log(x);
// x += 10;
// console.log(x);
// x++; // adds 1 to x (increment)
// x--; // removes 1 from x (decrement)
// console.log(x);


/*
Coding Challenge
*/

// var massMark, massJohn, heighMark, heightJohn, bmiMark, bmiJohn, markHigher;

// massMark = 97;
// massJohn = 100;
// heightMark = 1.8;
// heightJohn = 2.1;
// bmiMark = massMark / heightMark ^ 2;
// bmiJohn = massJohn / heightJohn ^ 2;
// markHigher = bmiMark > bmiJohn;
// console.log("Is Mark's BMI higher than John's? " + markHigher);

/*
If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if ( civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;

// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var massMark = 97;
// var massJohn = 100;
// var heightMark = 1.8;
// var heightJohn = 2.1;
// var bmiMark = massMark / heightMark ^ 2;
// var bmiJohn = massJohn / heightJohn ^ 2;
// if (bmiMark > bmiJohn) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }

/*
Boolean Logic
*/

// var firstName = 'John';
// var age = 16;

// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >=13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >=20 && age < 30) {
//     console.log(firstName + ' is a young man.');
// } else {
//     console.log(firstName + ' is a man.');
// }

/*
The Ternary Operator and Switch Statements
*/

// var firstName = 'John';
// var age = 16;

// // Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// // if (age >= 18) {
// //     var drink = 'beer';
// // } else {
// //     var drink = 'juice';
// // }

// // Switch Statement
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'driver':
//         console.log(firstName + ' drives in an uber in Lisbon.');
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }


// // if (age < 13) {
// //     console.log(firstName + ' is a boy.');
// // } else if (age >=13 && age < 20) {
// //     console.log(firstName + ' is a teenager.');
// // } else if (age >=20 && age < 30) {
// //     console.log(firstName + ' is a young man.');
// // } else {
// //     console.log(firstName + ' is a man.');
// // }

// var age = 15;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >=13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >=20 && age < 30:
//         console.log(firstName + ' is a young man.');
//         break;
//     default:
//         console.log(firstName + ' is a man.');
// }

/*
Truthy and Falsy Values and equality operators
*/

// falsy values: undefined, null, 0, '' (empty strings), NaN (not a number)
// truty values: NOT falsy values

// var height;

// height = 0;
// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('The variable has NOT been defined');
// }

// // Equality Operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/*
Coding Challenge 2
*/