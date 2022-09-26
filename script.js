let books = [
  {
    title: 'Lorem ipsum',
    author: 'testeroo Testyy'
  },
  {
    title: 'Second book',
    author: 'testeroo Testyy'
  }
];

let bookDiv = ""

let Book = function(title, author){
  this.title = title;
  this.author = author;

  this.add = function(title, author){
    let newbook = new Book(title, author);
    books.push(newbook);
  }

  this.remove = function(book){
    books = books.filter((abook)=> {
      return book.title !== abook.title && book.author !== abook.author;
    })
  }
}

let bookContainer = document.querySelector('.book-container')

function displayBook(books) {
  books.forEach((book) => {
    bookDiv +=
    ` <div class="book">
    <p class="book-title">${book.title}</p>
    <p class="book-author">${book.author}</p>
    <button class="button">Remove</button><hr>
  </div>`;
  });
  bookContainer.innerHTML = bookDiv;
} 

displayBook(books);