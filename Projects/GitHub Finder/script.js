// Define UI Element
let searchBtn = document.querySelector('#searchBtn');
let searchUser = document.querySelector('#searchUser');
let ui = new UI();

// Add EventLitchener
searchBtn.addEventListener('click', (e) =>{
  let userText = searchUser.value;
  if(userText != ''){
    fetch (`https://api.github.com/users/${userText}`)
      .then(result => result.json())
      .then(data => {
        if(data.message == 'Not Found'){
          // ShowAler
          ui.showAlert('alert', 'User Not Found');
        }else{
          ui.showUser(data);
          // ShowUser
        }
      })
  }else{  
    // showAlert
    ui.showAlert('alert', 'SearchBox are empty!');
  }
});