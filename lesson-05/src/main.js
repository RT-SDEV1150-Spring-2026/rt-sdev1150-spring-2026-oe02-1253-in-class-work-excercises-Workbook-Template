console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleID = document.getElementById('page-title');

const classN = document.getElementsByClassName('tagline');

// Use the advanced way

const titleEl = document.querySelector('#page-title');
const tagLineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');
const paraTag = document.querySelector('p');

// querySelectorALL
const paraTagAll = document.querySelectorAll('p');

console.log('Selected Elements', { titleID, classN, titleEl, tagLineEl, heroImg, heroCaption, dynamicBox, footerNote, paraTag, paraTagAll });

// Phase of connecting to Element Interface thru Elements object.

// 2. textContent vs innerHTML vs innerText
titleEl.textContent = 'Updating the TITLE of WEbpage dynamically thru JS for the first time.';

dynamicBox.innerHTML = `<p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>`;

heroCaption.innerText = 'This caption was updated using innerText.';
console.log(heroCaption);

// 3. Attributes & styles

// to fetch the current value of an attribute, we use getAttribute method.

const al = heroImg.getAttribute('alt');
console.log(al); // printing the value on console.

// After getting the attribute value, Now set the attribute value to something else.
heroImg.setAttribute('alt', 'A replacable sample image');

// update style from js directly
heroImg.style.borderColor = '#0d6efd';

// 4. Create small helper functions for reuse // utility function for reusability.

function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('NO element is found for ', selector);
  }
  el.textContent = text;
}

// similar function for innerHTML
function updateHtml(selector, html) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('NO element is found for ', selector);
  }
  el.innerHTML = html;
}

// 5. Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading and modifying nodes with JavaScript');

updateHtml('#dynamic-box', `<p class="desc">
    Using RESUABLE FUNCTION, This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>`);

// 6. Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');

// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Frond end fundamentals RT';
