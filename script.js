class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  books = [];

  add(title, author) {
    books.push(book);
  }

  remove(obj) {
    let localBooks = JSON.parse(localStorage.getItem('books'));
    localBooks = localBooks.filter((b) => b.title !== obj.title || b.author !== obj.author);
    localStorage.setItem('books', JSON.stringify(localBooks));
    books = localBooks;
  }



}
const bookContainer = document.querySelector('.book-container');
const addBtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');

const bk = new Books;

function displayBook(books) {
  books.forEach((book) => {
    const bookDiv = document.createElement('div');
    const hr = document.createElement('hr');
    bookDiv.className = 'book';
    const pTitle = document.createElement('p');
    const pAuthor = document.createElement('p');
    const removeBtn = document.createElement('button');
    pTitle.className = 'book-title';
    pAuthor.className = 'book-author';
    removeBtn.className = 'remove-btn';
    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(pTitle);
    bookDiv.appendChild(pAuthor);
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(hr);
    bookContainer.appendChild(bookDiv);
  });
}

addBtn.addEventListener('click', () => {
  const bk2 = new Books;
  bk2.add(titleInput.value, authorInput.value);
  const booksStr = JSON.stringify(books);
  localStorage.setItem('books', booksStr);
  window.location.reload();
});

if (localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}

displayBook(books);

const removeButton = document.querySelectorAll('.remove-btn');

removeButton.forEach((btn) => {
  btn.addEventListener('click', () => {
    const author = btn.previousElementSibling;
    const bookTitle = author.previousElementSibling;
    const obj = {
      title: bookTitle.textContent,
      author: author.textContent,
    };
    books = bk.remove(obj);
    const parent = btn.parentElement;
    parent.remove();
    window.location.reload();
  });
});
