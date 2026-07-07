// Fetch utility function
export async function fetchData(endpoint) {
  const response = await fetch(endpoint);
  console.log(response); // JSON format response.
  // always check the response if it is OK or not before begininig other operations.
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  const data = await response.json(); // converting my JSON format to JS Object.
  return data; // returning the response as JS OBJECT back to the function call.
}
// POST utility function
export async function postData(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(payload), // This is converting JS object into JSON format to send it to the server.
  });

  // Once the client recieve the promise, you please always check if response is resolved or not.
  if (!response.ok) {
    throw new Error('Network response failed');
  }
  const data = await response.json();
  // response.json() reads the data in JSON format returned by the server and converts it from JSON text into a normal JavaScript object.
  // The await keyword makes JavaScript wait until that conversion is finished.
  return data;
}
// TODO: Add DELETE function here
export async function deleteData(endpoint) {
  const response = await fetch(endpoint, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error ('Network response failed');
  }
  const data = await response.json();
  return data;
}
