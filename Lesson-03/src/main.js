console.log('Lesson 03 starter loaded');

// We are learning about adding the single line comments to the Code.
/* Learning to add Multiline comment
Line 1 Demo
Line 2 Demo
Line 3 Demo
*/


// Instructor TODO:

// 1. Declare and Initialize variables using VAR, LET and CONST.

// in JS, we have two modes: Strict mode, non strict mode.
// Please note, "If we write x = 5 without var, let, or const, THEN,
// JavaScript creates a global variable in non-strict mode, but throws an error in strict mode."
// by default, it is non strict mode, to have strict mode, type - 'use strict', in the top of file.

// x=5; // not recommeneded.

//  Begin with demo of var type variable.
/*
Type - Var and its definition
- Function Scoped
- Can be reassigned.
- Can be redeclared.
use var keyword to declare this type of variable.
*/

// case of declaration;
var a = 10;
console.log('Initial value of var a is: ', a);

// case of resassignment:
a = 20;
console.log('Value of var-a after assignment:', a);

// case of redeclaration;
var a = 30;
console.log('Value of a after re-declaration:', a);

// Function scope
function testvarScope() {
    if (true) {
        var b = 10;
    }
    console.log('Var is defined inside the block of function but it is displayed outside the block i.e. in function scope', b);
}
// console.log('Try to print the value of var b', b); // It is throwing error because it is out of function scope.
testvarScope();

// Begin with 'let' type of variable.
/*
Type - let
- Block scoped
- Can be reassigned.
- Cannot be redeclared.
use keyword let to declare this type of variable.
*/

//declaration of let
let c = 5;
console.log('Initial value of let c:', c);

// Reassignment
c = 15;
console.log('Value of let c after reassignment:', c);

// Redeclaration - Not possible.
// let c = 25;
console.log('Value of C after redeclaration is not possible');

// Block scope of let.
function testLetScope() {
    if (true) {
        let sd = 55;
        console.log('Value of C inside the block scope:', sd)
    }
    // console.log('Value of C outside the block scope:', sd) // Throws error becuase out of the block scope, though it is with in the function scope.
}
testLetScope(); // function call is mandatory.

// Define - const
/*
- Blocked scope
- cannot be reassigned.
- cannot be declared.
declare with keyword 'const'
*/

// const declaration.
const d= 100;
console.log('Value of const variable d:', d);

// reassignment - not possible.
// d = 125; // throws an error.

// re-declaration // not possible.
// const d =150; // throws an error.

// Block scope.
function testConstScope() {
    if (true) {
        const de = 110;
        console.log('Value of const variable d inside the block is:', de);
    }
    // console.log('Value of const variable d outside the block is:', de); // function scope not possible.
}
testConstScope(); // function call;

// preference is to consider 'const' first, then 'let' and in the last but try to avoid using 'var' to avoid unnecessary memory usage.

/*
DATA Types && LITERALS:

In JavaScript, data types tell us what kind of LITERAL [value] we are storing inside it.

There are 8 Data types in JS out of which 7 are primitive [Primitive = simple, single value] and 1 is non-primitive (Object - Multiple values)
All primitives are immutable; that is, they cannot be altered. Simply, Primitive values cannot be changed, only replaced.
let text ="joy", try to change it to "toy" by declaring it as text[0] ="t" , then console.log(text); NOTHING WILL CHANGE.

Memory Allocation:
Number 8 bytes, boolean 1 byte, string 2 bytes per character, BigInt is variable (depends how big the number is)
// UNDEFINED datatype means “value is not assigned” // let x;
// It's memory allocation/Size is engine-dependent and usually treated like a small fixed value (similar to pointer/reference)
// Null data type means “empty on purpose”
// Memory allocation in both 'null' and 'undefined' is engine-dependent and is often stored like a special reference.

(Why data type matters - memory, operations, debugging)

JavaScript is a dynamically typed language. This means you don't have to specify the data type of a variable when you declare it.
It also means that data types are automatically converted as-needed during script execution.

THUS, we have below LITERALS on the basis of these data types:
Array literals , Boolean literals, Numeric literals, Object literals, RegExp literals, String literals && Template Literals
*/


// 2. Log their types with console.log(typeof …)
// type off tells us about the data typeof.

// Number
let num = 10;
console.log('Value:', num);
console.log('Type of num is:', typeof num);

// String
let text = "Hello";
console.log('Value:', text);
console.log('Type of Text is:', typeof text);

// Boolean
let isTrue = true;
console.log('Value:', isTrue);
console.log('Type of isTrue is:', typeof isTrue);

// Undefined
let x;
console.log('Value:', x);
console.log('Type of X is:', typeof x);

// Null (special case!)
let y = null;
console.log('Value:', y);
console.log('Type of null is:', typeof y);

// BigInt
let big = 123456789n;
console.log('Value:', big);
console.log('Type of big is:', typeof big);

// 3. Type conversion

// Number to string.
x = 'This course name is SDEV';
y = 1150;
// In above two steps, JS automatically creates global variables for x and y BUT NOT RECOMMENDED. It can cause trouble in third variable while storing the result.
console.log('Type of x:', typeof x);
console.log('Type of y:', typeof y);

let z = x + y;
console.log('Value of z is:', z);
console.log('Type of z is', typeof z);

// another example.
let w = "12" + 2;
console.log('Value of w is:', w);
console.log('Type of w is', typeof w);

// another case of arithmatic operation but not adding of two numbers.
w = "12" * 2; // JS is dynamic language, it can sense the input and auto converts the data type which is needed. This process is called 'Type coercion
console.log('Value of w is:', w);
console.log('Type of w is', typeof w);


// using .toString()
let val = 12;
console.log("Type:", typeof val, val);
let str = val.toString();
console.log("Value of val is:", str);
console.log("Type:", typeof str);

// string to Integer number

w = parseInt("12") + 2; // integer value conversion
console.log('Updated Value of w is:', w);
console.log('Updated Type of w is', typeof w);

// string to Float number.

w = parseFloat("12.5") + 2; // integer value conversion
console.log('Updated float Value of w is:', w);
console.log('Updated Type of w is', typeof w);

// Simple arithmetic operations
let cal1 = 10;
let cal2 = 5;

console.log(cal1+cal2); // Addition
console.log(cal1*cal2); // Multiply
console.log(cal1/cal2); // Simple division
console.log(cal1-cal2); // Subtract
console.log(cal1%cal2); // Mod divison

// pre increment
// ++cal1;
console.log(++cal1);

// post increment
console.log(cal1++);
console.log(cal1);

// Similarly, you can do it for decrement operator --cal1 or cal1--

// 5. Array and object example
const fruits = ['apple',, 'banana', 'cherry',]; // explain commna in between the range and at the last of range.
console.log('Fruits array:', fruits);
// arrays always start with 0 indexing fruits[0]
fruits[1] = 'Orange'; // explain reassignment/redeclaration concepts.
console.log('Fruits array:', fruits);

const smit = { name: 'SDEV', age: '1150' };
console.log('Person object:', smit); // static values. These object key values can be a dynamic.

// 6. Try built-in functions: alert(), prompt(), parseInt(), toString()
/* uilt-in functions are pre-written functions provided by JavaScript that you can use directly—without writing them yourself.
// examples, console.log, Date(), parseInt,Functions,toString() etc. 
// Built in functions for browsers: alert, prompt etc.
*/
// alert is to display a message in pop up box, comes with only 'OK' button to close the pop up.
alert('Welcome to the JavaScript Demo');

// prompt - Popup appears, User enters value, Value is stored in variable.
//  Input from prompt() is always a string.
const userAge = prompt('Enter your age');

// confirm - User for Yes/No decision.  Output: OK → true && Cancel → false
const continueDemo = confirm(`Hi, Are you sure, you are ${userAge}  years old`);
console.log('User chose to continue:', continueDemo);

// If not, let's add 5 to user's age to make user 18 years of age.
console.log("Let's add 5 to user's age to make user 18 years of age", +(userAge + 5));

// parse the string to numeric literal.
console.log("Let's apply DATA PARSING and finally add 5 to user's age to make user 18 or above.",);
const finalAge = parseInt(userAge) + 5;
console.log("Updated age of user is: " + finalAge);

// Lets compare the age and print it to the console.
console.log('Is user eligible to vote:', +finalAge > 18);

/* In expressions involving numeric and string values with the + operator,
JavaScript converts numeric values to strings. For example, consider the following statements:
*/

// 3. Try built-in functions: alert(), prompt(), parseInt(), toString()
// 4. Manipulate values and observe results in the console

// Student TODO:
// Prompt the user for their name and age
// Log a greeting message using the provided name and age
