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

// 2. textContent vs innerHTML
titleEl.textContent = 'Updating the TITLE of WEbpage dynamically thru JS for the first time.';

dynamicBox.innerHTML = `<p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>`;

// 3. Attributes & styles

// 4. Create small helper functions for reuse

// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly