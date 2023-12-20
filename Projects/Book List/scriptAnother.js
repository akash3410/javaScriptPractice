// // Define UI element
// let form = document.querySelector('#form');

// // Define Class
// class Books{
//   constructor(title, author, isbn){
//     this.title = title;
//     this.author = author;
//     this.isbn = isbn;
//   }
// }

// class UI{
//   constructor(){
//   }
//   addBookList(book){
//     let bookList = document.querySelector('#book_list');
//     let tr = document.createElement('tr');
//     tr.innerHTML = `
//     <td>${book.title}</td>
//     <td>${book.author}</td>
//     <td>${book.isbn}</td>
//     <td><a href="#" class="delete">X</a><td>`;
//     bookList.appendChild(tr);
//   }
//   clearField(){
//     document.querySelector('#title').value = '';
//     document.querySelector('#author').value = '';
//     document.querySelector('#isbn').value = '';
//   }
  
//   showAlert(aEliment){
//     let container = document.querySelector('.container');
//     container.insertBefore(aEliment.div, form);
//     setTimeout(function(){
//       document.querySelector('.alert').remove();
//     },3000);
//   }
// }
// class xyz{
//   constructor(){}
//   createAlertEliment(message,error){
//     let div = document.createElement('div');
//     div.className = `alert ${error}`;
//     div.appendChild(document.createTextNode(message));
//     return div;
//   }
// }
// // Add Event Litchener
// form.addEventListener('submit',addBook);

// // Define Functions
// function addBook(e){
//   let title = document.querySelector('#title').value,
//   author = document.querySelector('#author').value,
//   isbn = document.querySelector('#isbn').value;
//   let book = new Books(title, author, isbn);
//   let ui = new UI();
//   if(title==='' || author==='' || isbn===''){
//     let alertEliment = new xyz();
//     let x = alertEliment.createAlertEliment("Please fill all the field", "error");
//     ui.showAlert(x);
//   }else{
//     ui.addBookList(book);
//     ui.clearField();
//     let alertEliment = new xyz();
//     let x = alertEliment.createAlertEliment("Please fill all the field", "sucess");
//     ui.showAlert(x);
//   }
//   e.preventDefault();
  
//   // if(title===''|| author===''|| isbn===''){
//   //   ui.showAlert("Please fill all the field", "sucess");
//   // }else{

//   // }
  
//   // ui.showAlert("Book Added", "sucess");
// }



// Define UI element
let form = document.querySelector('#form');

// Define Class
class Books{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI{
  constructor(){
  }
  addBookList(book){
    let bookList = document.querySelector('#book_list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">X</a><td>`;
    bookList.appendChild(tr);
  }
  clearField(){
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
  showalert(alertClass){
    // let div = document.createElement('div');
    // div.className = `alert ${error}`;
    // div.appendChild(document.createTextNode(message));
    // if(book.title===''){
    //   // let labelx = document.querySelector('.labelx');
    //   // let x = document.querySelector('#x');
    //   // labelx.insertBefore(div, x);
    //   document.querySelector('.TItle').style.color = "Red";

    //   setTimeout(function(){
    //     document.querySelector('.alert').remove();
    //   },3000);
    // }else{
    //   let container = document.querySelector('.container');
    //   container.insertBefore(div, form);
    //   setTimeout(function(){
    //   document.querySelector('.alert').remove();
    // },3000);
    // }
    document.querySelector(`.${alertClass}`).style.color = "red";
    
  }
}

// Add Event Litchener
form.addEventListener('submit',addBook);

// Define Functions
function addBook(e){
  let title = document.querySelector('#title').value,
  author = document.querySelector('#author').value,
  isbn = document.querySelector('#isbn').value;
  let book = new Books(title, author, isbn);
  let ui = new UI();
  // if(title==='' || author==='' || isbn===''){
  //   ui.showalert("Please fill all the field", "error",book);
  // }else{
  //   ui.addBookList(book);
  //   ui.clearField();
  //  ui.showalert("Task Added","sucess",book);
  // }
  if(title===''){
    ui.showalert('Title');
  }
  if(author==''){
    ui.showalert('Author')
  }
  if(isbn===''){
    ui.showalert('Isbn')
  }
  e.preventDefault();
  
  // if(title===''|| author===''|| isbn===''){
  //   ui.showAlert("Please fill all the field", "sucess");
  // }else{

  // }
  
  // ui.showAlert("Book Added", "sucess");
}