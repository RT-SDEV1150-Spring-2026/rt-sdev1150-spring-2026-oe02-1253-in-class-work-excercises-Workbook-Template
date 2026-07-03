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

// TODO: Add DELETE function here
