console.log('Lesson 08 starter loaded');

/*
Question: What is event driven programming in simple terms?
Answer: DO something when something happens.
Event and action related to it.
Your program waits for events to happen and then respond i.e. execute the function accordingly.
Event driven programming has three parts:
    Event
    Event Listener
    Event Handler

    What are the ways to handle the EVENTS?
        1. Inline - not recommended
        2. JS to DOM Property - not recommended - Question can come from here as well. LIke why we should not use this way.
        3. Event Listeners - Highly recommended and interview questions are from this section.
*/
// Demo to present various ways to trigger event.
// INLINE method is already shown from index.html page

// Now showing the JS DOM Property.
let btn = document.getElementById('btn-dom');
console.log(btn);
btn.onclick = function () {
  console.log('First Statement');
};
btn.onclick = function () {
  console.log('Second Statement');
}; // Drawback of JS to DOM, It overwrite the previous call.

// Syntax for adding event listener

// addEventListener(event typeo, action in the form of function along with the function body)

// We have to be very careful where we want listener to be implemented. Do not try to use it as standalone.
// Always Please define the element where listener will be implemented.

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type

// 2. Selecting elements
const btnToggle = document.querySelector('#btn-toggle');
const btnMessage = document.querySelector('#btn-message');
const message = document.querySelector('#message');
const hoverCard = document.querySelector('#hover-card');
const hoverStatus = document.querySelector('#hover-status');
const keyOutput = document.querySelector('#key-output');
const list = document.querySelector('#list');
const selection = document.querySelector('#selection');

// 3. click: toggle a highlight class on the body
btnToggle.addEventListener('click', () => {
  document.body.classList.toggle('highlight'); // highlight class is defined in the css.
  const on = document.body.classList.contains('highlight');
  if (on === true) {
    btnToggle.textContent = 'Highlight is ON';
  } else {
    btnToggle.textContent = 'Highlight is OFF';
  }
});

/*
const on1 = 5;
const on2 = '5';
if (on1 == on2) {
// Javascript does a type coercion automatically when we are using == for comparison. === does not do type coercion. Use it wisely.
  console.log ('5 is equals to 5');
}
*/

// 4. click: change message textContent (no HTML parsing)
btnMessage.addEventListener('click', () => {
  const timeString = new Date().toLocaleTimeString();
  message.textContent = `Message updated at ${timeString}`;
});

// 5. mouseover / mouseout: display hover status on the card
hoverCard.addEventListener('mouseover', () => {
  hoverStatus.textContent = 'Status: Hovering';
});

hoverCard.addEventListener('mouseout', () => {
  hoverStatus.textContent = 'Status: Not Hovering';
});

// 6. keydown: show last key pressed (global listener)
document.addEventListener('keydown', (e) => {
  keyOutput.textContent = `Last key: ${e.key} (Code: ${e.code})`;
});

// 7. Event delegation: one listener on the <ul> for all <li> elements
