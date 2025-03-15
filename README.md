# odin-library

## Overview
This project is a simple library application that allows users to add, display, and manage books. It demonstrates several key coding concepts including object-oriented programming, DOM manipulation, event handling, and form handling.

## Key Coding Concepts

### Object-Oriented Programming (OOP)
The project uses OOP principles to create a `Book` constructor function. Each book is an instance of the `Book` object, which has properties like `title`, `author`, `pages`, and `read`. The `Book` prototype also includes a method to toggle the read status of a book.

```js
function Book(title, author, pages, read) {
  this.title = title;
  this.author = title;
  this.pages = pages;
  this.read = read;
}

Book.prototype.toggleRead = function () {
  this.read = !this.read;
};
```

### DOM Manipulation
The project dynamically updates the DOM to display the list of books in the library. It uses methods like document.createElement, element.innerHTML, and element.appendChild to create and insert elements into the DOM.

```js
function displayLibrary() {
  const library = document.getElementById("library");
  library.innerHTML = ""; // reset library div

  myLibrary.forEach((book, index) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-index", index);

    card.innerHTML = `
      <h3>${book.title}</h3>
      <p><em>by ${book.author}</em></p>
      <p>${book.pages} pages</p>
      <p>${book.read ? "Read" : "Not Read"}</p>
      <button class="toggleRead">Toggle Read Status</button>
      <button class="removeBook">Remove Book</button>
    `;

    library.appendChild(card);
  });
}
```

### Event Handling
Event listeners are used to handle user interactions such as adding a new book, removing a book, and toggling the read status. The project uses addEventListener to attach event handlers to buttons and form elements.

```js
document.querySelectorAll(".removeBook").forEach((button) => {
  button.addEventListener("click", removeBook);
});

document.querySelectorAll(".toggleRead").forEach((button) => {
  button.addEventListener("click", toggleReadStatus);
});

const newBookBtn = document.getElementById("newBookBtn");
newBookBtn.addEventListener("click", () => {
  dialog.showModal();
});

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const read = document.getElementById("read").checked;
  addBookToLibrary(title, author, pages, read);
  bookForm.reset();
  dialog.close();
});
```
### Form Handling
The project includes a form for adding new books. It uses form elements like input and button, and handles form submission to add new books to the library.

```js
<form id="bookForm" formmethod="dialog">
  <input type="text" id="title" placeholder="Title" required>
  <input type="text" id="author" placeholder="Author" required>
  <input type="number" id="pages" placeholder="Number of Pages" required>
  <label>
    <input type="checkbox" id="read">Read
  </label>
  <button type="submit">Add Book</button>
  <button type="button" id="cancel">Cancel</button>
</form>
```

### Conclusion
This project is a practical example of using JavaScript to create a dynamic and interactive web application. It covers essential coding concepts that are fundamental for building more complex applications. 