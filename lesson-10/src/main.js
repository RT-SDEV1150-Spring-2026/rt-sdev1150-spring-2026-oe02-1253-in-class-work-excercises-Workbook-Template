console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form'); // It stores a reference to the form element. (DOM Object)
const result = document.querySelector('#result');

// do not trust the instructor, check it first.
console.log(form); // form element should be printed on the console.

// 2. Function to gather and structure form data
// Instructor TODO: get the name

function serializeForm(formEl) {
  // whatever structured information you received, you need to destructure it to met various objectives.
  console.log('submit event fires and we are landed thru the function call');
  console.log(formEl);
  console.log(formEl.elements); // different way of rendering all the form elements.

  // get the values from the input values so that you can send those values to the desired location after user submits the form.
  /* Long way of writing
  const fullName = formEl.elements.fullName;
  console.log(fullName);
  const email = formEl.elements.email;
  console.log(email);
  const bio = formEl.elements.bio;
  console.log(bio);
  */

  // destructure the form object
  const {fullName, email, bio} = formEl.elements;

  // Radio button selection
  const plan = formEl.elements.plan.value;
  console.log(plan);

  // checkboxes - gather all checked values.
  // Use Array.from to convert the list.
  const topics = Array.from(formEl.querySelectorAll('input[name="topics"]:checked'))
    .map(cb => cb.value);
    // :checked is the flag/ css selector that will pick only the selected values.
    // .map() is a method used on arrays, it goes thru each item in an array and created a new array and store it in the const variable.
  console.log(topics.length);

  // return to send the processed data with values back to the function so that it can be displayed on another section of the page.
  return {
    fullName: fullName.value.trim(),
    email: email.value.trim(),
    bio: bio.value.trim(),
    plan,
    topics,
    submittedAt: new Date().toLocaleString(),
  };
}

// Student TODO: get the email and bio

// OPTIONAL: get the plan and topic values as well

// Instructor TODO: return the fullName within an object literal
// Student TODO: add the remaining fields

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
// Instructor TODO: display the fullName value

form.addEventListener('submit', (event) => {
  // stop the browser default behaviour
  event.preventDefault();

  console.log('submit event fires');

  // call the function and send the form data.
  const data = serializeForm(form);

  // Show a structured data, human friendtly summary to be displayed here.
  result.textContent = `
  Submission received at:
  - Name: ${data.fullName || '(none)'}
  - Email: ${data.email || '(none)'}
  - Bio: ${data.bio || '(none)'}
  -Skills: ${data.plan || '(none)'}
  -Strenths: ${data.topics.length ? data.topics.join(' | ') : '(none)'}
  -Time:${data.submittedAt || '(none)'}`;
});

// Student TODO: display the remaining values

// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', () => {
  result.textContent = `Form submission message is now gone, Please submit the form again.`;
});
