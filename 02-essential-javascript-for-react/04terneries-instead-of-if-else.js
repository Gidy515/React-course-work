const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// Destructuring Arrays
const book = getBook(2); // this book variable grabs the whole object of the book with id 2, which is "The Cyberiad"

//const title = book.title; // this title variable grabs only the title key from the book and the value of the title key is "The Cyberiad"
//title;

//const author = book.author; // this author variable grabs only the author key from the book and the value of the author key is "Stanislaw Lem"
//author;

const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
  book; // this is the destructuring assignment syntax, it allows us to extract multiple properties from an object and assign them to variables in a single statement. In this case, we are extracting the title and author properties from the book object and assigning them to variables with the same name.
title;
author;

console.log(title, author, genres);

// when destructuring, the variable names must be exactly the same as the property names in the object, otherwise it will not work. For example, for instance if we try to destructure the title property and assign it to a variable called bookTitle, it will not work because the variable name does not match the property name in the object.

// destructuring with arrays

// the rest operator: it is used to collect the remaining elements of an array into a new array. It is denoted by three dots (...). In this case, we are using the rest operator to collect the remaining genres in the genres array into a new array called otherGenres.
const [primaryGenre, secondaryGenre, ...otherGenres] = genres; // the ...otherGenres syntax is called the rest operator, it allows us to collect the remaining elements of the array into a new array. In this case, we are collecting the remaining genres into a new array called otherGenres.
console.log(primaryGenre, secondaryGenre, otherGenres); // this will log the primary genre, secondary genre, and the other genres in the genres array. The primary genre is "science fiction", the secondary genre is "humor", and the other genres are ["speculative fiction", "short stories", "fantasy"].

// the spread operator: it is used to spread the elements of an array into a new array. It is denoted by three dots (...). In this case, we are using the spread operator to spread the elements of the genres array into a new array called allGenres.
const newGenres = [...genres, "epic fantacy"]; // the ...genres syntax is called the spread operator, it allows us to spread the elements of the genres array into a new array. In this case, we are spreading the elements of the genres array into a new array called newGenres and adding a new genre "epic fantasy" to the end of the array.
newGenres;

const updatedBook = {
  ...book,

  // Adding a new property
  moviePublicationDate: "2001-12-19",

  // Overwriting an existing property
  pages: 1210,
};
updatedBook;

// template literals: these are es6 features that let us combine strings and variables inside of a string. They are denoted by backticks (`) and we can use the ${} syntax to insert variables into the string.
const summary = `${title}, a ${pages}-page long book, was written by ${author} and published in ${
  publicationDate.split("-")[0]
}. The book has ${hasMovieAdaptation ? "" : "not"} been adapted as a movie`; // this will create a summary string that includes the title, author, and publication date of the book. The ${} syntax allows us to insert the variables into the string.
summary;

// terneries: these are a shorthand way of writing an if-else statement. They are denoted by the ? and : symbols. The syntax is condition ? expressionIfTrue : expressionIfFalse.
const pagesRange = pages > 1000 ? "over a thousand" : "less than a thousand"; // this will check if the pages variable is greater than 1000, if it is, it will return "over a thousand", otherwise it will return "less than a thousand".
pagesRange;
console.log(`${title} is a book that has ${pagesRange} pages`);

const pager =
  updatedBook.pages > 1000 ? "over one thousand" : "less than one thousand"; // this will check if the pages property of the updatedBook object is greater than 1000, if it is, it will return "over a thousand", otherwise it will return "less than a thousand".
pager;
