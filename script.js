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

  this.add = function(title,author){
   let book= new Book(title,author);
    books.push(book);
  }

  this.remove = function(book){
    books = books.filter((abook)=> {
      return book.title !== abook.title && book.author !== abook.author;
    })
  }
}

let bookContainer = document.querySelector('.book-container');
let addBtn = document.querySelector('.add-btn');
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');


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

addBtn.addEventListener('click', function(){
  let bk= new Book();
  bk.add("title","author");
  console.log(books);
});

console.log(books);
displayBook(books);