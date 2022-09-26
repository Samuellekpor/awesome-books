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