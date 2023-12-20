// Define UI Element
let guessForm = document.querySelector('#guessForm');
let rangeBtn = document.querySelector('#rangeBtn');
let max = document.querySelector('#max');
let min = document.querySelector('#min');

// Add EventListener
document.addEventListener('DOMContentLoaded', guessNum);

// Set Functions
function guessNum(e){
  rangeBtn.addEventListener('click',ev=>{
    let maxValue = parseInt(max.value);
    let minValue = parseInt(min.value);
    if(isNaN(maxValue) || isNaN(maxValue)){
      alert('Set Your Range');
    }else{
      if(minValue<maxValue){
        guessForm.innerHTML = `
        <label for="userGuess" class="d-block fw-bold fs-3 fst-italic mt-4">Guess Your Number</label>
        <input type="number" id="userGuess" class="w-25 mt-2" name="numberGroup" value="userGues" placeholder="Your Guess">
        <input id="guessBtn" class="btn btn-primary btn-sm ms-1" type="submit" value="Submit">
        `
        let userGuess = document.querySelector('#userGuess');
        let guessBtn = document.querySelector('#guessBtn');

        guessBtn.addEventListener('click', eve => {
          let random = Math.floor(Math.random() * (maxValue - minValue)) + minValue;
          let guess = parseInt(userGuess.value);
          if(guess == random){
            showMessage('woh, You Win !', 'valid',);
          }else if(guess<random){
            showMessage(`My number is getter than ${guess}`, 'invalid');
          }else{
            showMessage(`My number is lower than ${guess}`, 'invalid');
          }
          eve.preventDefault();
        });

      }else{
        alert(`Minimum Number is getter than Maximum Number !
        Set Your Range Again.`);
      }
    }
    ev.preventDefault();
  })
}

function showMessage(message, cls){
  let div = document.createElement('div');
  div.className = `alert ${cls}`;
  div.appendChild(document.createTextNode(message));
  let container = document.querySelector('.container');
  let messages = document.querySelector('#message');
  container.insertBefore(div, messages);
  setTimeout(function(){
    document.querySelector('.alert').remove();
  },3000);
}