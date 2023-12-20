let form = document.querySelector('#form');
let btn = document.querySelector('#btn');
btn.addEventListener('click',(e)=>{
  let selectedExpression = document.querySelector('input[name="ExpressionGroup"]:checked');
  if(selectedExpression){
    let userString = prompt('Enter your Expression!');
    let expresionValue = selectedExpression.value;
    let re;
    let result = null;
    switch(expresionValue){
      case 'email':
        re =  /^([a-zA-Z0-9]\.?)+\@([a-zA-Z0-9]\.?)+$/;
        result = re.exec(userString);
        break;
      case 'phoneNumber':
        re = /^(\+)?(88)?01[0-9]{9}$/;
        result = re.exec(userString);
        break;
      case 'postCode':
        re = /^\d{4}$/;
        result = re.exec(userString);
        break;
    }
    if(result==null){
      showMessage('Invalid Expression!', 'invalid');
    }else{
      showMessage('Valid Expression.', 'valid');
    }
    e.preventDefault();
  }else{
    showMessage('Select a Expression!', 'invalid');
    e.preventDefault();
  }
})

function showMessage(message, cls){
  let div = document.createElement('div');
  div.className = `alert ${cls}`;
  div.appendChild(document.createTextNode(message));
  let container = document.querySelector('.container');
  container.insertBefore(div, form);
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}