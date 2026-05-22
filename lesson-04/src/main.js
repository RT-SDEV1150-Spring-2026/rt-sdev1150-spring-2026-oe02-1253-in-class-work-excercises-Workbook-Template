console.log('Lesson 04 starter loaded');

// Instructor TODO:

/*
LOGICAL STATEMENTS:
Logical statements allow us to make multiple paths in our code. Depending on the outcome of a certain expression, we will follow one code path or another.

IF/ IF-ELSE Statement:
We evaluate the expression in such statements and then show output on basis of results given by these statements.
We can make decisions in our code using if and if else statements. It is very much like this template:
if *some condition is true*, then *a certain action will happen*, else *another action will happen*
*/

// Declare the variable using either let or const, that depends on your requirement.

// const age = 17;

const age = prompt('Enter your age');

// 1. Simple if
if (age > 18) {
  console.log ('A very first IF block is executed, User is eligible to vote.');
}
// Printing some message for console to validate if the 'IF block' was executed or not.
console.log('Control comes out from the IF Block. Thank you for using this application. Signing you out.');

// 2. if-else
if (age > 18) {
  console.log ('IF block is executed, ELIGIBLE');
} else {
  console.log('Else block is executed, NOT ELIGIBLE');
}
console.log('else block will only be executed when IF statement returns false.');
console.log('Control is no longer is block of IF/ELSE statement. Thank you for using the application, signing you out.');

// alternative of IF-ELSE statement is Ternary operator.
// Ternary syntax: condition ? value_if_true : value_if_false;

age > 18 ? console.log('Eligible') : console.log('Not Eligible');

// 3. Nested if-else
if (age > 18) {
  console.log ('User entered in the IF/ELSE block - NESTED IF/ELSE DEMO');

  // define another variable of using type 'let' because of its blocked scope
  let isCitizen = true;

  // nest the if statement inside the if.
  if (isCitizen) {
    console.log('Nested IF BLOCK is executed, User is Citizen and eligible to vote.');
  } else {
    console.log('User qualifies the age to vote but , is not citizen');
  } // = operator is used as asignment operator, to compare the equal condition, we use ==
} else if (age == 18) {
  console.log('User is ELIGIBLE to VOTE, BUT, not sure about the citizenship status.');
} else {
  console.log('User DOES NOT qualify');

  // to provide the warning.
  console.warn('User is not eligible');

  // to add intentional error message on console.
  console.error('User either does not exist or does not qualify. Please traige further.');
}

// define or declare a variable that has to be used for while && do-while statement for comparison.
let count = 0;
// 4. while loop

while (count < 5) {
  console.log('In while statement execution, the countdown is:', count);
  // count++;
  count = count + 1;
}

// 5. do-while loop
do {
  console.log('In DO-While, the countdown is:', count);
  count++;
} while (count < 5);
console.log(' value of count outside do-while', count);

/*
Major difference between WHILE && DO-WHILE:
If result of expression is false, Then
While loop does NOT run at all, BUT,
Do-While runs at least once. This has been shown above.
*/

// 6. for loop

/* DECLARATION of FOR loop:

for (variable declaration & initialization; condition (expression for evaluation); increment/decrement operator) {
Block of for }
*/
for (let j = 4; j > 0; j--) {
  console.log('The value of J', j);
  console.log(`Value of J is: ${j}`);
}

// console.log('The value of J', j; // syntax error
// console.log(count1); // runtime error // reference error
// age > 18; // logical error age >= 18;

/*
++Interpreting Console Errors:

Syntax - Code is written wrong. Any bracked is not closed for example.
Runtime -  Code crashes while running.
Logical - Code runs but gives wrong result.

++Debugging:

Rubber Duck Debugging:
Explain your code out loud step-by-step as if you’re teaching someone (even a rubber duck)

Binary Search Debugging:
Reduce the problem area step-by-step by disabling parts of code.

Checking Assumptions
Don’t trust your expectations — Do not assume the things, verify them.
*/

// Student TODO:

// 7. Snippet with bugs for debugging practice

// Snippet with bugs for debugging practice - uncomment when ready
/*
const num = 10;

if (num < 5) {
  console.log('num is greater than 5');
} else {
  console.log('num is 5 or less');
}

let k = 0;
while (k < 3) {
k + 1;
console.log(k);
}
*/
