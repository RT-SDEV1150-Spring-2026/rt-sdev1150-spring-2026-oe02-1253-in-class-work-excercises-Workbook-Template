// Old JS practices, i.e. commonJS practices guides you to use require() for using the installed package.
// But, we are using the moden JS practices, i.e. based on ES Module practices. Thus, we will be using import feature to use the installed package.

import dayjs from 'dayjs';
console.log('Lesson-13 loaded');

// IN JS, a variable can store a function, not only the numbers or strings.

const greet = function () {
  console.log('Hello');
};
greet(); // JS provides us the shortcut way to call the function using a variable name that is containig function inside it.
/*
Not all the variables or imports can have functions
const num = 5;
num(); // This is not going to work and will throw an error.
*/

dayjs(); // What will this function return? This function will return us a date object that can be used to represent date and time.
// Also, this returned object will provide us the methods like .format()

// print dayjs() on console.
console.log(dayjs());

// from best practices point of view, save the return object in some variable.
const now = dayjs();

// print the formatted information using format method given to us by the return object of dayjs()
console.log('Current Date is: ', now.format('YYYY-MM-DD')); // Day.js is case-sensitive and uses specific format tokens, YYYY for year, MM for month, mm for minutes, DD for day.
console.log('Current time is: ', now.format('HH:mm:ss')); // HH for 24 hours format and hh is for 12 hours format. ss for seconds, SSS for miliseconds (not recommended)
