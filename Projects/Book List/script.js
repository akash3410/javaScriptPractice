// Define UI element
let form = document.querySelector('#form');
let bookList = document.querySelector('#book_list');

// Define Class
// Book Class
class Books{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// User Interface Class
class UI{
  static addBookList(book){
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a><td>`;
    bookList.appendChild(tr);
  }
  static clearField(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  static showalert(message,error){
    let div = document.createElement('div');
    div.className = `alert ${error}`;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.container');
    container.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }
  static deleteFromList(target){
    if(target.hasAttribute('href')){
      target.parentElement.parentElement.remove();
      Store.deleteBookFromLS(target.parentElement.previousElementSibling.textContent.trim());
      this.showalert('Book Deleted','error');
    }
  }
}

// Store in local Storage class
class Store{
  static getBooks(){
    let books;
    if(localStorage.getItem('books') === null){
      books = [];
    }else{
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }
  static addBookInLS(book){
    let books = this.getBooks();
    books.push(book);
    localStorage.setItem('books',JSON.stringify(books));
  }
  static displayBooks(){
    let books = this.getBooks();
    books.forEach(book => {
      UI.addBookList(book);
    });
  }
  static deleteBookFromLS(isbn){
    let books = this.getBooks();
    books.forEach((book, index) =>{
      if(book.isbn === isbn){
        books.splice(index, 1);
      }
    });
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// Add Event Litchener
form.addEventListener('submit',addBook);
bookList.addEventListener('click',deleteBook);
document.addEventListener('DOMContentLoaded',Store.displayBooks());

// Define Functions
function addBook(e){
  let title = document.querySelector('#title').value,
  author = document.querySelector('#author').value,
  isbn = document.querySelector('#isbn').value;
  let book = new Books(title, author, isbn);
  if(title==='' || author==='' || isbn===''){
    UI.showalert("Please fill all the field", "error");
  }else{
    UI.addBookList(book);
    UI.clearField();
    UI.showalert("Task Added","sucess");
    Store.addBookInLS(book);
  }
  e.preventDefault();
}
function deleteBook(e){
  UI.deleteFromList(e.target);
  e.preventDefault();
}