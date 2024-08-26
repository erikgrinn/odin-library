const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
};

// add book to myLibrary array
function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
    displayLibrary();
}

// display each library book
function displayLibrary() {
    const library = document.getElementById('library');
    library.innerHTML = ''; // reset library div

    // create entry for each book in myLibrary array
    myLibrary.forEach((book, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-index', index);

        // template literal
        card.innerHTML = `
            <h3>${book.title}</h3>
            <p>by ${book.author}</p>
            <p>${book.pages} pages</p>
            <p>${book.read ? 'Read' : 'Not Read'}</p>
            <button class="toggleRead">Toggle Read Status</button>
            <button class="removeBook">Remove Book</button>
        `;

        library.appendChild(card);
    });

    // add event listeners for each remove and toggle button added into card
    document.querySelectorAll('.removeBook').forEach(button => {
        button.addEventListener('click', removeBook);
    });

    document.querySelectorAll('.toggleRead').forEach(button => {
        button.addEventListener('click', toggleReadStatus);
    });
}

// remove and toggle read status per index
function removeBook(event) {
    const index = event.target.parentElement.getAttribute('data-index');
    myLibrary.splice(index, 1);
    displayLibrary();
}

function toggleReadStatus(event) {
    const index = event.target.parentElement.getAttribute('data-index');
    myLibrary[index].toggleRead();
    displayLibrary();
}

// show book form on add new book
document.getElementById('newBookBtn').addEventListener('click', () => {
  document.getElementById('newBookBtn').style.display = 'none';
    document.getElementById('bookForm').style.display = 'block';
});

// submit form
document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); //prevent default form action because not using database



    // define inputs as variables and send to function
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
    addBookToLibrary(title, author, pages, read);

    // clear form and hide after submitting
    document.getElementById('bookForm').reset();
    document.getElementById('bookForm').style.display = 'none';
    document.getElementById('newBookBtn').style.display = 'block';
});
