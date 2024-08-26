const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
    this.info = function() {
      return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read === 'true' ? 'has been read' : 'has not been read yet'}.`
    };
  }
let addBook = document.getElementById('addBook')

addBook.addEventListener('click', (addBook) => {
    addBookToLibrary()
    console.log(addBook)
})



function addBookToLibrary(addBook) {
    addBook.title = prompt('enter book title')
    addBook.author = prompt('enter book author')
    addBook.pages = prompt('enter book page length')
    addBook.read = prompt('enter true if read')
}






