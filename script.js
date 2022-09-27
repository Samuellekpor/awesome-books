let books = [];

let Book = function (title, author) {
  this.title = title;
  this.author = author;

  this.add = function (title, author) {
    let book = new Book(title, author);
    books.push(book);
  };

  this.remove = function (obj) {
    let localBooks = JSON.parse(localStorage.getItem("books"));
    localBooks = localBooks.filter((abook) => {
      return abook.title !== obj.title || abook.author !== obj.author;
    });
    localStorage.setItem("books", JSON.stringify(localBooks));
    books = localBooks;
    console.log(books);
  };
};

let bookContainer = document.querySelector(".book-container");
let addBtn = document.querySelector(".add-btn");
let titleInput = document.querySelector("#title");
let authorInput = document.querySelector("#author");

let bk = new Book();

function displayBook(books) {
  books.forEach((book) => {
    let bookDiv = document.createElement("div");
    let hr = document.createElement("hr");
    bookDiv.className = "book";
    let pTitle = document.createElement("p");
    let pAuthor = document.createElement("p");
    let removeBtn = document.createElement("button");
    pTitle.className = "book-title";
    pAuthor.className = "book-author";
    removeBtn.className = "remove-btn";
    pTitle.textContent = book.title;
    pAuthor.textContent = book.author;
    removeBtn.textContent = "Remove";
    bookDiv.appendChild(pTitle);
    bookDiv.appendChild(pAuthor);
    bookDiv.appendChild(removeBtn);
    bookDiv.appendChild(hr);
    bookContainer.appendChild(bookDiv);
  });
}

addBtn.addEventListener("click", function () {
  let bk2 = new Book();
  bk2.add(titleInput.value, authorInput.value);
  let booksStr = JSON.stringify(books);
  localStorage.setItem("books", booksStr);
  window.location.reload();
});

if (localStorage.getItem("books") === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem("books"));
}

displayBook(books);

let removeButton = document.querySelectorAll(".remove-btn");

removeButton.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let author = btn.previousElementSibling;
    let bookTitle = author.previousElementSibling;
    let obj = {
      title: bookTitle.textContent,
      author: author.textContent,
    };
    books = bk.remove(obj);
    let parent = btn.parentElement;
    parent.remove();
    window.location.reload();
  });
});
