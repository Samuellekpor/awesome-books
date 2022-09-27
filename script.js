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
   let book= new Book(title, author);
    books.push(book);
  }

  this.remove = function(title, author){
    books = books.filter((abook)=> {
      return abook.title !== title && abook.author !== author;
    })
  }
}

let bookContainer = document.querySelector('.book-container');
let addBtn = document.querySelector('.add-btn');
let removeBtn = document.querySelector('.button');
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
  bk.add(titleInput.value,authorInput.value);
  let booksStr = JSON.stringify(books);
  localStorage.setItem('books', booksStr)
  window.location.reload();
});

removeBtn.addEventListener('click', function(){
  
})

if(localStorage.getItem('books') === null) {
  books = [];
} else {
  books = JSON.parse(localStorage.getItem('books'));
}
displayBook(books);