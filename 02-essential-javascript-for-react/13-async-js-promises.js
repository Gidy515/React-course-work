// Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states: pending, fulfilled, or rejected.
// // this will return a promise object, which is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. In this case, the fetch() function is used to make a network request to the specified URL and it returns a promise that resolves to the response of the request. We can use the .then() method to handle the resolved value of the promise and the .catch() method to handle any errors that may occur during the request.

fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
  response.json().then((data) => console.log(data))
);

console.log("Gidy");

// the then method is used to handle the resolved value of the promise. In this case, we are using the .then() method to handle the response of the fetch() request and we are calling the .json() method on the response object to parse the response as JSON. The .json() method also returns a promise that resolves to the parsed JSON data, so we can chain another .then() method to handle the parsed data.
