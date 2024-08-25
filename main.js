const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'has been read' : 'not read yet'}.`
    };
  }
const userBook = new Book
userBook.title = prompt('enter book title')
userBook.author = prompt('enter book author')
userBook.pages = prompt('enter book page length')
userBook.read = prompt('enter true if read, false if not read')

console.log(userBook.info())

function addBookToLibrary() {
  // do stuff here
}

