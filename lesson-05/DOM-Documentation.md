WHAT IS DOM?

First, Understand what is document?

Browser loads a web page.
A web page is a document that can be either displayed in the browser window (Formatted page - What end-users see) or as the HTML source (the HTML code behind the webpage)
BROWSER CONVERTS this same page into a structure (DOM) so programming languages like JavaScript can work with it.

Consider it like,
HTML = raw ingredients
DOM = organized dish

The Document Object Model (DOM) is a programming interface for web documents.
That, connects web pages to scripts or programming languages by representing the structure of a document, 
The DOM represents a document into a structure called, logical tree strcuture.
  Where, Each branch of the tree ends in a node, and each node contains objects.
  DOM METHODS allow programmatic access to the tree
  Which helps promgramming languages like JavaScript climb the tree,
  Then JS can 'access', 'manipulate', and 'update content', 'structure', 'styles' dynamically.
  Nodes of the DOM Tree can also have event handlers attached to them. Once an event is triggered, the event handlers get executed.

** In Short:
"DOM is the browser’s way of turning HTML into OBJECTS so JavaScript can control the webpage."

Types of Nodes
Element nodes → HTML tags (<p>, <div>, <h1>)
Text nodes → Text inside elements
Attribute nodes → Attributes like id, class
Document node → Root of the tree

[Things to Remember]
The DOM is not part of the JavaScript language, but is instead a Web API used to build websites.
The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language, For example, PYTHON has diffent way.

[Now, Let's understand INTERFACE]
An interface is like a blueprint or set of rules that defines what something[basically an object] can do.
what properties and methods a DOM object has.

[Remember]
  DOM is made of objects
  Each object follows an interface
  Interface defines:
    properties
    methods

There are many interfaces defined by the DOM specification:
'Document' [The most frequently used - entire page accessible], 'Element', 'Node', 'Window' [to control size, alerts, timers for browser]


The DOM gives you ready-made functions (called API) in each INTERFACE for ACCESSING THE DOM.

"Accessing the DOM is like picking a person from a crowd so you can talk to them."

[METHODS/FUNCTIONS in DOCUMENT INTERFACE:]
The Document interface represents the entire web page.
Where, 'document' is a JavaScript object that represents the entire web page loaded in the browser and used to call various functions.

For example:
document.getElementById()
document.querySelector
document.createElement()

Means, Finding, selecting, and creating elements from the webpage so you can work with them.

[METHODS/FUNCTIONS in ELEMENT INTERFACE:]

textContent
classList.add()
setAttribute()

Used for: changing/updating the content

[Very Important Point]
document is a built-in object (already available)
But for Element:
You must get or store the element in a variable first.

SHORT SUMMARY of DOCUMENT and ELEMENT interface
"Use document to access elements, then use element methods to manipulate them."

------------------------
WHAT WE LEARNT TILL HERE:

Browser creates DOM
DOM = tree of objects
What is DOM in detail
Interfaces
Document [that says FIND element] vs Element interfaces [that says modify element]

QUESTION -  Now the big question is - "Now that we know the browser creates objects, and we have interfaces — the next question is:
“How do we actually get these objects so we can work with them in real code?”

Answer is: We need a way to SELECT elements using Selectors (accessing elements)

Simple Definition:
"Selectors are built-in methods used to find elements in the DOM."

"If the DOM is a tree, selectors help us find a specific branch or leaf."

Example: getElementById(), getElementsByClassName(), getElementsByTagName()

document.getElementById() //finding the element by id in tree

// "Selectors return an element object, which we can then use with the Element interface to update the content."

let el = document.getElementByID() // after finding the element, storing its location/address as form of object that is further used in ELEMENT interface to update the content.

//connect back to Element interface.
el.textContent = "What ever the latest value you want to update";

// INTRODUCING 'QUERYSELECTOR'
There is a more flexible modern way to select elements.

Using CSS Selectors [querySelector() or querySelectorAll()]
that can select anything, without writing the function explictly.
  #id
  .class
  tag


querySelector returns the 'FIRST Match' from the DOM tree.
querySelectorAll returns many/ALL elements from the DOM tree.
Choose wisely when to use what.

Example: 
querySelector('p'); will return first p tag element from the DOM tree.
Where as 
querySelectorAll('p') will return all the p tag elements from the DOM tree.