console.log('Lesson 14 starter loaded');

import dayjs from 'dayjs';
import { animate } from 'animejs';
import utils from './utils.js'; // name can be anything
import { greetUser } from './utils.js';

// ask the user name on your app and then display the greeting message with username.
const user = prompt('Enter your name');

// call the function to greet the user on your application.
const message = greetUser(user || utils.defaultName);
document.querySelector('#greeting').textContent = message;

const currentDate = dayjs().format('dddd, MMMM, D, YYYY');
// fetch the location in HTML and then send the data using textcontent.
document.querySelector('#today').textContent = `Today is ${currentDate}`;

// animate the user's response.
animate('#greeting', {
  translateY: [-20, 0],
  opacity: [0, 1],
  duration: 4000,
  easing: 'easeOutQuad',
});
