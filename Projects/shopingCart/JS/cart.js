let showCart = document.querySelector('#cart');
let cartContainer = document.querySelector('#cartContainer');

class getCartItem{
  static getCartFromLs(){
    let lScart;
    if(localStorage.getItem('lScart') === null){
      lScart = [];
    }else{
      lScart = JSON.parse(localStorage.getItem('lScart'));
    }
    return lScart;
  }
  static addCart(){
    let carts = this.getCartFromLs();
    carts.forEach(cart => {
      this.dispalyCart(cart);
    });
  }
  static dispalyCart(cartItem){
    let div = document.createElement('div');
    div.className = "col-md-3 mb-2";
    div.innerHTML = `
    <div class="card">
      <img src="${cartItem.imgCart}" class="card-img-top" alt="Product">
      <div class="card-body">
        <p>${cartItem.titleCart}</p>
        <p>${cartItem.priceCart}</p>
        <button type="button" id="deletecartBtn" class="btn btn-primary deleteCartBtn">Delete From Cart</button>
      </div>
    </div>`;
    showCart.appendChild(div);
  }

  // Delete from LS
  static deleteFromLS(target){
    let carts = this.getCartFromLs();
    carts.forEach((cart, index) =>{
      if(cart.imgCart === target){
        carts.splice(index, 1);
      }
    });
    localStorage.setItem('lScart', JSON.stringify(carts));
  }
  static showalert(message, dlt){
    let div = document.createElement('div');
    div.className = `timeOut ${dlt}`;
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
  let cart = getCartItem.getCartFromLs();
  if(cart!=null){
    getCartItem.addCart();
  }
  cartContainer.addEventListener('click',(event)=>{
    // console.log(event.target.parentElement.parentElement);
    if(event.target.hasAttribute('type')){
      if(confirm('Are You Sure?')){
        let rem = event.target.parentElement.parentElement.parentElement;
        rem.remove();
        let re = event.target.parentElement.parentElement.firstChild.nextElementSibling.currentSrc;
        getCartItem.deleteFromLS(re);
        getCartItem.showalert('Cart Deleted', 'delete')
      }
    }
    // let titleFromP = event.target.parentElement.firstChild.nextElementSibling.textContent.trim();
    
  })
});
// document.addEventListener('DOMContentLoaded',(e)=>{
//   let deleteCart = document.querySelector('button');
//   deleteCart.addEventListener('click',deleteCat);
//   function deleteCat(e){
//     console.log(e.target);
//   }
// })

