// Import the functions necessary to make the API calls
import { fetchData } from './utils.js';
// Select the necessary DOM elements
const loadButton = document.getElementById('loadBooks');
const addForm = document.getElementById('addBook');
const list = document.getElementById('bookList');
const endpoint = 'http://localhost:3000/books';

// Define the API endpoint

// Define a function to handle loading and displaying the list of books
async function loadHandler() {
  list.innerHTML = '<li>Loading...</li>'; // at this location, data will be loaded, this is to guide the user.

  const books = await fetchData(endpoint); // function call that goes to utils.js
  // now print the response received from utils.js
  console.log(books);
  list.innerHTML = ''; // make that location free before you put the actual data.
  books.forEach((book) => {
    const newLI = document.createElement('li');
    newLI.textContent = `${book.title} by ${book.author}`;
    list.appendChild(newLI);
  });
}

// Define a function to handle form submission for adding a new book
async function submitHandler(e) {
  // to control the default behaviour of submit button at form.
  e.preventDefault(); // will prevent the default behaviour.
  const form = e.target; // Since the submit event came from the form: MEANS, Store the form that was submitted in a variable called form.
  console.log(form); // print on console and see what form holds.
  console.log(addForm); // both gives the access to the form.

  // after getting the access to the form, immediately save the values may or may not entered by user, in the variable.

  const formData = new FormData(form);
  // FormData is a built-in browser class that reads all the input values from a form and stores them in an object-like structure,
  // so that we can easily access and process the data or values in JavaScript.
  // we don't have to manually grab each field one by one using .value

  // before you use values, please see what is there in formData
  console.log(formData); // FormData is a special object and DevTools doesn't automatically display its contents nicely.
  console.log(formData.entries()); // you will still not see the actual form values directly.
  // because entries() returns an iterator, not the data itself, that holds all key-value pairs of data.
  // An iterator is an object that lets JavaScript go through items one at a time instead of giving you everything all at once.

  // finally urwrap the values, no further suspense.
  const data = Object.fromEntries(formData.entries()); // Object is a built-in JavaScript class used to create and work with objects and provides various built-in methods.
  // fromEntries() is a built-in method of Object that Convert each key-value pair entry of the FormData into a normal JavaScript object.
  console.log(data); // here you will now see the data in JS object form. i.e. Key and its value.
  // notice here that year is given inside the quotes i.e. it is being treated as STRING. DO the type conversion now.

  // do a type conversion for year from string to a NUMBER type.
  data['year'] = Number(data.year); // inside brackets, JavaScript expects a string containing the property name.
  // till here, we see the data on console but database is not being updated.
  console.log(data); // here you will now see the data in JS object form. i.e. Key and its value. Look for the year now.

  // Now, Lets take the form data you see on console and POST it to the database.
}

// Attach event listeners to the button and form
loadButton.addEventListener('click', loadHandler); // create a loadhandler function separately rather than making addEventListener unnecessarily complex.
addForm.addEventListener('submit', submitHandler);
// TODO: Add delete functionality
