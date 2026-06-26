# Lesson 15 Starter

## Overview

In this exercise, you will explore how front-end applications communicate with backend services using RESTful APIs. You’ll simulate a REST API locally with **JSON Server**, and send requests using both a browser and a REST client (such as the **VS Code REST Client** extension). The focus is on understanding how APIs structure and return data and not on writing JavaScript code.

## Setup instructions

### 1. Create the project directory and initialize npm

```sh
mkdir lesson-15
cd lesson-15
npm init -y
```
This will create a `package.json` file with default values.

````Key Concepts of Front and Back end:

Frontend = UI =>  It  needs data (users, products, posts)
Backend = Server [Logic] + Database =>  stores and manages that data
API = Communication layer

In typical web applications, the client (frontend) never talks directly to the database. There is always a server in between.

** Security issue:
Imagine giving users direct access to your database → very dangerous
    Anyone could read all data
    Anyone could delete or modify data
    No control over access

So, The server acts as a decision-maker
Example:
    “Only logged-in users can see this data”
    “Price must be calculated before sending”
    “Validate input before saving”

** Database alone cannot do all of this safely

** Server ensures:
    Data is valid
    Operations are allowed
    Errors are handled properly

** Inside a server, we store:
    Application code (main thing)
    API routes
    Business logic
    NOT large persistent data (that goes in DB)

API = Application Programming Interface
    Think of it as a waiter in a restaurant:

    You (frontend) place a request
    The waiter (API) takes it
    The kitchen (server/database) processes it
    You get the response.

API is the bridge between front and back end.
`````

````Mock APIs

A mock API is a fake backend used for development/testing.

Why?
  Backend may not be ready yet
  Helps frontend developers work independently
  Safe testing environment
  Let's use JSON server tool to mock the backend.
````

### 2. Install JSON server

```sh
npm install json-server
```

The [json-server](https://www.npmjs.com/package/json-server) package allows you to create a fully functional REST API from a simple JSON file.

### 3. Create the database file

Create a new file named `db.json` in the project directory with the following contents:

```json
{
  "books": [
    { "id": "1", "title": "The Legend of Hyrule", "author": "Zelda", "year": 2020, "genre": "Fantasy" },
    { "id": "2", "title": "The Hero's Journey", "author": "Link", "year": 2022, "genre": "Adventure" },
    { "id": "3", "title": "Chronicles of Ganon", "author": "Ganondorf", "year": 2021, "genre": "Epic" }
  ]
}

"books" here is:
    A collection name // very beginner-friendly
    A resource name // most correct in API context
    A API endpoint name

Short summary:
In this db.json file, we have a resource called books, which represents a collection of book records. Each object inside this collection is a single book, containing details like id, title, author, year, and genre. JSON Server will use this books resource to automatically create an API endpoint /books, which allows us to perform operations like fetching all books, adding new books, updating existing ones, or deleting them.

Every object should have a unique id, It uses that id to identify each item.

Server automatically treats the value in the URL after the resource as the id, and it searches for an object with that matching id.
```

### 4. Createa a script and start the server

Add a `api-server` script to the `package.json` file:

```json
...
"scripts": {
  "api-server": "json-server --watch db.json --port 3000"
}
...
```

Run the script to start the API server:

```sh
npm run api-server
```

Once running, you’ll see available routes listed in the terminal. Test them in your browser:

- [http://localhost:3000/books](http://localhost:3000/books)  

A REST API is a way for the client to communicate with the server using URLs (routes) and HTTP methods to perform operations on data. we already built a REST API without realizing it:  Frontend → JSON Server → db.json

// JSON Server automatically follows REST principles and creating a REST API. We don’t write backend code, but we still get a fully functional REST API.

A REST API is a structured way for the frontend to communicate with the server using URLs and HTTP methods. In our case, JSON Server automatically creates a REST API where we can use routes like /books and /books/1 along with methods like GET, POST, PATCH, and DELETE to interact with our data.

- [http://localhost:3000/books/1](http://localhost:3000/books/1)
** remember, Server automatically treats the value in the URL after the resource as the id, and it searches for an object with that matching id.

````
“When we write http://localhost:3000/users, we are sending a request to the server. The server interprets this request and then runs its internal logic, which may include communicating with the database to fetch or modify data.”

This is NOT directly talking to the database
It is talking to the server

The server THEN does the following:

    Matches the route (/users)
    Checks the method (GET, POST, etc.)
    Runs logic (this is key)
    Decides whether to:
      Fetch data from database
      Add/update/delete data

In short, Client requests data from the server, and the server decides to get it from the database.

When we use a URL like /users, the client is making a request to the server—not the database. The server receives this request, runs its logic, and if needed, fetches data from the database and sends it back.
````


## Using browser and DevTools

The browser automatically sends **GET** requests when navigating to a URL.  
Use the **Network tab** in DevTools to inspect:

- Request method  
- URL and headers  
- Response status code (e.g., 200 OK)  
- JSON response body  

Try reloading the page and observing what happens.

## Using the REST Client (VS Code Extension)

````
The REST Client extension lets you send API requests directly from VS Code, instead of using the browser or writing fetch code.

Normally, to test APIs, you might:
    Write fetch() in JavaScript (takes time)
    Use browser (limited)
    Use Postman (external tool)

REST Client gives you:
    A quick way to test APIs inside VS Code
    No UI, just simple text
    Very easy for beginners
````

1. Install the [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) VS Code extension.  
2. Create a new file named `requests.http` in the project directory.  
3. Add the following sample requests:

// requests.http file is just a plain text file where you write API requests like commands, which we can execute directly using the REST Client extension.

// IETF (Internet Engineering Task Force).
This group create and maintain internet standards, They define how the web works, They publish official documents called RFCs:
RFCs (Request for comments) document defines What is HTTP?, What are GET, POST, etc.?, How should clients and servers communicate?

```http
### GET all books
GET http://localhost:3000/books
Accept: application/json // Accept is a request header that tells the server what format of data the client wants in the response.

### POST new book
POST http://localhost:3000/books
Content-Type: application/json

{
  "title": "Tales of the Triforce",
  "author": "Impa",
  "year": 2023,
  "genre": "Love"
}

### PATCH update a book
PATCH http://localhost:3000/books/2
Content-Type: application/json

{
  "author": "Link, the Hero of Time"
}

### DELETE a book
DELETE http://localhost:3000/books/3
```

4. Ensure that the server is still running, and if not, start the server and click the `Send Request` command in VS Code above any request to execute it (see image below).

![Send Request location](assets/send-request.png)

5. View responses (status code, body, headers) directly in VS Code.

## HTTP status codes

| Code | Meaning | When It Appears |
|------|----------|------------------|
| 200  | OK | Successful GET, PUT, PATCH |
| 201  | Created | Successful POST |
| 400  | Bad Request | Invalid JSON format or missing fields |
| 404  | Not Found | Resource does not exist |
| 500  | Server Error | Internal JSON Server issue |

## Shutdown the server

You can shutdown the json-server using ctrl + c

```sh
ctrl + c
```

## Push to your GitHub workbook repo

Once you're done making your own custom updates to the project, stage your files, commit your work, and push to the remote repository.

1. Open a terminal in VS Code
2. Stage all updated and created files:
```sh
git add .
```
3. Commit the changes:
```sh
git commit -m 'Lesson 15 Example'
```
4. Push your changes to the remote workbook repository: 
```sh
git push origin main
```