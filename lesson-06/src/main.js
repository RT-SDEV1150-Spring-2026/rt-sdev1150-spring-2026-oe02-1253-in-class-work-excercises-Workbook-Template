console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. Create a new variable for the feature list element
const featureList = document.querySelector('#feature-list');

// 2. Add feature list to the displayed elements below
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, dynamicBox, footerNote, featureList
});

// 3. Modify list content

// 4. Add a new item dynamically
const newLI = document.createElement('li');
newLI.className = 'feature';
newLI.textContent = 'Flexible';

// add this newly created child to the parent called feature-list.
featureList.appendChild(newLI);

// 5. Retreive all list items (querySelectorAll) and update their text

const numItems = document.querySelectorAll('.feature');

/*
function testFunction(li, idx) {
  console.log('I am now inside the testFunction method');
  console.log(li, idx);
}
console.log(numItems);
for (let i = 0; i < numItems.length; i++) {
  const li = numItems[i];
  const idx = i;
  console.log(li, idx);
  // also demo with function
  testFunction(li, idx);
}

// forEach method is the alternative way of writing the above forloop call.
/* Below function definition is equivalent to
function testFunction(li, idx) {

}
// to this statement
(li, idx) => {}
  */
// method inside the method is called callback function/ method.
numItems.forEach((li, idx) => {
  console.log('I am now inside the testFunction method');
  console.log(li, idx);
  li.textContent = `${idx + 1}.${li.textContent}`;
});

// 6. Removing the first item from the list using DOM relationships to find it
const last = featureList.removeChild(featureList.lastElementChild);

// 7. Update the second item using nextElementSibling
featureList.firstElementChild.nextElementSibling.textContent += '(Updated)';

// 8. Move the last item to the front of the list
featureList.insertBefore(last, featureList.firstElementChild);

// appendChild, insertBefore, prepend that you can use to add a child node to the parent.
// if element location that you try to insert using insertBefore location is null, then it act as appendChild.
// prepend you use to add multiple childs.
const newLI1 = document.createElement('li');
newLI1.className = 'feature';
newLI1.textContent = 'SDEV1150';

const newLI2 = document.createElement('li');
newLI2.className = 'feature';
newLI2.textContent = 'Front end Fundamentals';

// add this newly created child to the parent called feature-list.
featureList.prepend(newLI1, newLI2);

// 9. Use a timer to add a new item after 3 seconds have passed
// I can use setTimeOut function
setTimeout(() => {
  const newLI3 = document.createElement('li');
  newLI3.className = 'feature';
  newLI3.textContent = 'Appearing after 5 seconds';
  featureList.appendChild(newLI3);
}, 3000);

// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd';

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';
