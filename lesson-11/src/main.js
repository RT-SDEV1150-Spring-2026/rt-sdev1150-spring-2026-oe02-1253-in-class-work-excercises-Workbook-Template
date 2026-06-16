console.log('Lesson 11 starter loaded');

const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

function serializeForm(formEl) {
  const fullNameValue = formEl.elements.fullName.value;
  const emailValue = formEl.elements.email.value;
  const bioValue = formEl.elements.bio.value;

  const planValue = formEl.elements.plan.value;
  let topicValue = '';
  formEl.elements.topics.forEach((el) => {
    if (el.checked) {
      topicValue += `${el.value} `;
    }
  });

  return {
    fullName: fullNameValue,
    email: emailValue,
    bio: bioValue,
    plan: planValue,
    topics: topicValue,
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = serializeForm(form);

  // Student TODO: Add validation logic to the form, ensure all fields are valid before allowing submission
  // HINT: see the 'input' event listener below for examples of validation logic. Perhaps
  // you can reuse some of that code here to validate all fields on submit, or create validation
  // functions that can be reused in both places.

  // OPTIONAL - use the following alongside the `novalidate` form attribute
  // to trigger built-in HTML validation
  if (form.checkValidity()) {
    result.textContent = `
    Submission received:
    - Name: ${data.fullName}
    - Email: ${data.email}
    - Bio: ${data.bio}
    - Plan: ${data.plan}
    - Topics: ${data.topics}
  `;
  } // end if form.checkValidity()
});

form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});

// 1. Add validation logic to the form on 'input' events
form.addEventListener('input', (e) => {
  const target = e.target;

  // 1.1 custom validation for fullName (must contain two words)
  if (target.name === 'fullName') {
    const nameParts = target.value.trim().split(' '); // split() method is JS method used on strigs that break the string into pieces and return them as an array.
    if (nameParts.length < 2) {
      target.setCustomValidity('Full name must contain at least two words.'); // setCustomValidity is a built in JS method used on form inputs and let you set your own custom message.
    } else {
      target.setCustomValidity(''); // '' is an emptry string that we pass to remove the custom message from the field.
    }
  }
  // 1.2 custom validation for bio (minimum length)
  if (target.name === 'bio') {
    target.setCustomValidity('Bio must be at least 40 characters long.');
  } else {
    target.setCustomValidity(''); // '' is an emptry string that we pass to remove the custom message from the field.
  }

  // 1.3 custom validation for email (basic '@' symbol check)
  if (target.name === 'email') {
    /*
    if (!target.value.includes('@')) {
      target.setCustomValidity('Email must contain an @ symbol');
    } else {
      target.setCustomValidity('');
    }
    */

    // Custom validation thru a regex.
    // regex -  stands for regular expression - a pattern used to check if text follows certain rules or not.
    /*
    Regex writing
    / ... / slashes stands for defining the regex or a ppattern
    ^ means, you are starting a string here. Email must start here with string.
    [] these brackets define a group of characters that can go or should not go.
     \s means white space
     ^ inside the bracket tells you that it is not allowed.
     \.
     $ tells you that end of the string.
    */

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // does allow numbers as well.
    const emailPattern1 = /^[^\s@]+@[^\s@]+\.[A-Za-z]+$/;
    if (!emailPattern1.test(target.value)) {
      target.setCustomValidity('Please enter a valid email address as per regex defined in JS course.');
    } else {
      target.setCustomValidity('');
    }
  }

  if (!target.checkValidity()) {
    target.classList.add('error');
  } else {
    target.classList.remove('error');
  }
  // 1.4 report the validity status to the user
  target.reportValidity();
});
