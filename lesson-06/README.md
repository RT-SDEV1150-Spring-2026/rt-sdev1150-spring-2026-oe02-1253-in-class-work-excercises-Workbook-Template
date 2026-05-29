# Lesson 06 Starter

## Setup the lesson example

Create a new vanilla project using the following command:

```sh
npm create vite@latest lesson-06 -- --template vanilla
```

## Install dependencies and run the dev server

1. Move into the lesson-06/ directory:
```sh
cd lesson-06
```
2. Install the necessary dependencies:
```sh
npm install
```
or
```sh
npm i
```
3. Run the dev server with the `dev` script: 
```sh
npm run dev
```
4. Open the provided development server URL in your browser
5. You should see the default render for the vite project.
6. Use this as the base for today's examples.

## Instructor Demo and Student Exercise

Complete the demo along with your instructor and then attempt the exercise prompts (see the comments in the `main.js` file).

### Selecting elements (including the feature list)

````js
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// new for Lesson 06
const featureList = document.querySelector('#feature-list');

console.log('Selected elements:', { titleEl, taglineEl, heroImg, heroCaption, featureList, dynamicBox, footerNote });
````

### Add a new list item dynamically

````js
const li = document.createElement('li');
li.className = 'feature';
li.textContent = 'Flexible';
featureList.appendChild(li);
````
//  One equivalent way of writing the function code, similar to forEach
/*
const numItems = document.querySelectorAll('.feature');
function testFunction() {
  for (let i = 0; i < numItems.length; i++) {
    const li = numItems[i];
    const idx = i;

    console.log(li, idx);
  }
}
testFunction();
*/
// OR Another way of writing the function that accepts parameters, similar to forEach
/*
const numItems = document.querySelectorAll('.feature');

function testFunction(li, idx) {
  console.log(li, idx);
}

// Loop passes values into function
for (let i = 0; i < numItems.length; i++) {
  const li = numItems[i];
  const idx = i;

  testFunction(li, idx); // ✅ passing parameters here
}
*/
// forach method
/*
// forEach is a looping method that: runs a function once for every item in a list. Method comes with body where you can instruct it to do something.
// With forEach, YOU don’t call the function - JavaScript calls it for you.

/*
(li, idx) => { ... } //  you are creating a function without a name & this is called an: Anonymous function (no name)

This is just a short way of writing a function.
Same as:

function(li, idx) {
  ...
}

The correct term you are looking for 'Anonymous Function' is Callback function.
A callback function is: A function passed into another function, which is then called later.

// Final Answer (clean & clear)
When the user does not define a named function and passes it directly into forEach, it is called:
An anonymous callback function (often written as an arrow function)
*/
### Retrieve all list items and update their text

````js
const features = document.querySelectorAll('.feature');
features.forEach((li, idx) => {
	li.textContent = `${idx + 1}. ${li.textContent}`;
});
````

### Remove the first item and update neighbors

````js
// remove the first element
featureList.removeChild(featureList.firstElementChild);

// update the second item using nextElementSibling
featureList.firstChild.nextElementSibling.textContent += ' (updated)';
````

### Move the last item to the front

````js
const last = featureList.removeChild(featureList.lastChild);
featureList.insertBefore(last, featureList.firstChild);
````

### Add an item after a delay using a timer

````js
setTimeout(() => {
	const newLi = document.createElement('li');
	newLi.className = 'feature';
	newLi.textContent = 'I am new! (added after 3 seconds)';
	featureList.appendChild(newLi);
}, 3000);
````

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 06 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```