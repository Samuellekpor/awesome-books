class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  books = [];

  add(title, author) {
    const book = new Books(title, author);
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
    const bookDiv = document.createElement('tr');
    bookDiv.className = 'book';
    const bookInfo = document.createElement('td');
    const removeBtn = document.createElement('button');
    bookInfo.className = 'book-info';
    removeBtn.className = 'remove-btn';
    bookInfo.innerHTML = '"<strong class = "book-title">' + book.title + '</strong>" by <strong class = "book-author">'+ book.author+'</strong>';
    removeBtn.textContent = 'Remove';
    bookDiv.appendChild(bookInfo);
    bookDiv.appendChild(removeBtn);
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
    const bookTitle = btn.previousElementSibling.firstElementChild;
    const author = bookTitle.nextElementSibling;
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
