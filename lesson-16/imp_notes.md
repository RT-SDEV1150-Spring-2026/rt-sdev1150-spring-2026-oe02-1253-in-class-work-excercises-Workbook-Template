Real-world analogy:
Think of the backend API as a waiter in a restaurant:

fetchData() = "Can you bring me the menu?" (getting information)
postData() = "I'd like to place an order." (sending information)

The database is the kitchen/storage area. The frontend never talks directly to the database—it talks to the backend API.
So in our assignment:

First, create fetchData() to retrieve data from the backend.
Then create a form submit handler and postData() to send new data from the form to the backend so it can be saved in the database.

****
fetch() is one of the most important functions in modern JavaScript because it's the primary way for your frontend to communicate with a backend server.

Simple definition:
    fetch() sends an HTTP request to a server and returns a Promise containing the server's response.
    fetch() is used to communicate with a server.
    It sends HTTP requests (GET, POST, PUT, DELETE).
    It returns a Promise because the server needs time to respond.
    await fetch() waits for the response.
    response.json() converts the server's JSON into a JavaScript object.

**** 
Synchronous (blocking): Everything stops.

****
Asynchronous (non-blocking): You continue doing other things while waiting.

JavaScript is already designed to handle asynchronous operations using the Event Loop, Web APIs, Callback Queue etc BUT Functions are NOT automatically async. So,

**** 
"async: Appending this keyword to the function tells that, This function contains operations that may take some time, such as talking to a server."

    An async function automatically always returns a Promise.
    Think of a Promise as:
    "I don't have the result right now, but I promise I'll give it to you later."

    With use of 'async', you are telling JavaScript that,

        "Inside this function, I want to use the "await" keyword."

        Please remember, Without async, you cannot use await.
****
await means:
    "Pause this function until the Promise finishes."

    await fetch(endpoint);
    Meaning: Send a request to the server and wait for the response.

    The server might need time to respond.
    Without await, JavaScript would continue immediately.
    With await, it waits for the response before moving to the next line.

****
REMEMBER: The Event Loop is still doing all the heavy lifting.

**** 
DEMO CODE:

async function fetchData() {
console.log("1");

const response = await fetch('/books');

console.log("2");
}

fetchData();

console.log("3");


// A notation is simply a way of writing something.

JSON: JavaScript Object Notation
means:
    A way (format/syntax) of writing and exchanging data.

So JSON is not the actual JavaScript object. It's just a textual representation of data.
JSON looks very similar, but it is actually text.
{
  "name": "Rohit",
  "age": 30
}
Think of JSON as a string representation of data.

JavaScript OBJECT:
A JavaScript object is a REAL object that JavaScript can work with. JS OBJECT have key and its value.

{
  name: "Rohit",
  age: 30
}

**** Why does the server send JSON?
Because JSON is language-independent. Means, JSON is not tied to any one programming language. Many different programming languages can create it, send it, receive it, and understand it.

A server could be written in:

Java
Python
C#
Node.js

The browser doesn't care. Agreement is to communicate using JSON: Example: 
Person A speaks Punjabi
Person B speaks French
Person C speaks Chinese
and They may choose English as a common language.
English doesn't belong to any of them in this conversation; it's simply the agreed-upon format for communication.

****
Important Note to REMEMBER:
People often say:
    "JSON is JavaScript Object Notation, so it belongs to JavaScript." No, It is not the case.

Historically, JSON was inspired by JavaScript object syntax.
But today:
    JSON is a universal data-interchange format used by almost every modern programming language. That's what "language-independent" means.

****
Option 1: Send directly from FormData
You could do:


const formData = new FormData(form);

fetch(endpoint, {
    method: 'POST',
    body: formData
    });
    
In this case:

No Object.fromEntries()
No JSON.stringify()
No Content-Type: application/json

The browser sends the form data directly.

****
Option 2: Convert to a JavaScript object first
    This is much easier to manipulate.
    Adding, deleting, or modifying properties is very convenient with a normal JavaScript object.

Then why convert it back to JSON?
    Because the server expects JSON.

