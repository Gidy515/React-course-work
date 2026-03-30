/*fetch("https://jsonplaceholder.typicode.com/todos").then((response) =>
  response.json().then((data) => console.log(data))
);*/

// Async/Await is a syntactic sugar built on top of promises. It allows us to write asynchronous code in a synchronous manner. The async keyword is used to declare an asynchronous function, and the await keyword is used to wait for a promise to resolve before moving on to the next line of code. This makes it easier to read and write asynchronous code without having to deal with nested .then() calls.

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  console.log(data);
}

getTodos();

console.log("Gidy");
