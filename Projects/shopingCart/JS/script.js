// Define UI Element
let form = document.querySelector('#prductFrom');
let productList = document.querySelector('#productList');

// Define Class
class Product{
  constructor(title, price, img){
    this.title = title;
    this.price = price;
    this.img = img;
  }
}

// User Interface class
class UI{
  // Add Product
  static addProduct(products){
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${products.title}</td>
    <td>${products.price}</td>
    <td>${products.img}</td>
    <td><a href="#" class="delete">X</a><td>`;
    productList.appendChild(tr);
  }

  // Clear Field
  static clearField(){
    document.querySelector('#title').value = '';
    document.querySelector('#productPrice').value = '';
    document.querySelector('#imageInput').value = '';
  }

  // Alert Show
  static showalert(message, error){
    let div = document.createElement('div');
    div.className = `timeOut ${error}`;
    div.appendChild(document.createTextNode(message));
    let alert = document.querySelector('.alertMessage');
    alert.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.timeOut').remove();
    },3000);
  }

  // Delete Product
  static deleteFromList(target){
    if(target.hasAttribute('href')){
      target.parentElement.parentElement.remove();
      Store.deleteFromLS(target.parentElement.previousElementSibling.textContent.trim());
      this.showalert('Product Deleted','error');
    }
  }
}

// Store in localStorage
class Store{
  static getProductFromLS(){
    let products;
    if(localStorage.getItem('products') === null){
      products = [];
    }else{
      products = JSON.parse(localStorage.getItem('products'));
    }
    return products;
  }

  static addInLS(products){
    let product = this.getProductFromLS();
    product.push(products);
    localStorage.setItem('products',JSON.stringify(product));
  }

  static DisplayProductFromLS(){
    let products = this.getProductFromLS();
    products.forEach(product =>{
      UI.addProduct(product);
    });
  }
  static deleteFromLS(img){
    let products = this.getProductFromLS();
    products.forEach((product, index)=>{
      if(product.img===img){
        products.splice(index, 1);
      }
    });
    localStorage.setItem('products', JSON.stringify(products));
  }
}

// Add eventLitchener
form.addEventListener('submit', getProduct);
productList.addEventListener('click',deleteProduct);
document.addEventListener('DOMContentLoaded',Store.DisplayProductFromLS());

// Define Functions
// Get Product
function getProduct(e){
  let title = document.querySelector('#title').value,
  price = document.querySelector('#productPrice').value,
  img = document.querySelector('#imageInput').value;
  let len = img.length;
  let imageName =  img.substring(12, len);
  console.log(imageName);

  let product = new Product(title,price,imageName);

  if(title===''|| price===''|| img === ''){
    UI.showalert("Please fill all the field", "error");
  }else{
    UI.addProduct(product);
    UI.clearField();
    UI.showalert("Product Added", "success");
    Store.addInLS(product);
  }
  e.preventDefault();
}

// Delete Product
function deleteProduct(e){
  UI.deleteFromList(e.target);
  e.preventDefault();
}