let home = document.getElementById('home');

class GetProducts{
  static getProductFromLS(){
    let products;
    if(localStorage.getItem('products') === null){
      products = [];
    }else{
      products = JSON.parse(localStorage.getItem('products'));
    }
    return products;
  }
  static displayProduct(){
    let products = this.getProductFromLS();
    products.forEach(product =>{
      this.addProduct(product);
    });
  }
  static addProduct(p){
    let div = document.createElement('div');
    div.className = "col-md-3 mb-2";
    div.innerHTML = `
    <div class="card">
      <img src="image/${p.img}" class="card-img-top" alt="Product">
      <div class="card-body">
        <p>${p.title}</p>
        <p>${p.price} Tk.</p>
        <button type="button" id="cartBtn" class="btn btn-primary">Add TO Cart</button>
      </div>
    </div>`;
    home.appendChild(div);
  }
}

class GetCart{
  constructor(titleCart, priceCart, imgCart){
    this.titleCart = titleCart;
    this.priceCart = priceCart;
    this.imgCart = imgCart;
  }
}

class Cart{
  static getCartFromLs(){
    let lScart;
    if(localStorage.getItem('lScart') === null){
      lScart = [];
    }else{
      lScart = JSON.parse(localStorage.getItem('lScart'));
    }
    return lScart;
  }

  static addInLS(getCarts){
    let getCart = this.getCartFromLs();
    getCart.push(getCarts);
    localStorage.setItem('lScart',JSON.stringify(getCart));
  }

  static showalert(message, sucess){
    let div = document.createElement('div');
    div.className = `timeOut ${sucess}`;
    div.appendChild(document.createTextNode(message));
    let alert = document.querySelector('.alertMessage');
    let form = document.querySelector('.row');
    alert.insertBefore(div, form);
    setTimeout(function(){
      document.querySelector('.timeOut').remove();
    },3000);
  }
}

document.addEventListener('DOMContentLoaded',(e)=>{
  let x = GetProducts.getProductFromLS();
  if(x!=null){
    GetProducts.displayProduct();
  }

  home.addEventListener('click',(e)=>{
    let target = e.target;
    if(target.hasAttribute('type')){
      let priceCart = target.previousElementSibling.textContent.trim();
      let titleCart = target.previousElementSibling.previousElementSibling.textContent.trim();
      let imgCart = target.parentElement.previousElementSibling.src;
      let getCart = new GetCart(titleCart, priceCart,imgCart);
      if(titleCart!=''|| priceCart!=''|| imgCart!=''){
        Cart.addInLS(getCart);
        Cart.showalert('Adding cart successfully!','sucess');
      }
    }
  });
});