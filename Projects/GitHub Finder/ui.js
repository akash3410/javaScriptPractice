class UI{
  constructor(){
    this.profile = document.querySelector('#InformationForm');
  }
  showUser(data){
    // this.clearAlert();
    this.profile.innerHTML = `
    <div class="card card-body mb-3">
      <div class="row">
        <div class="col-md-3">
          <img class="img-fluid mb-2" src="${data.avatar_url}">
          <a href="${data.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
        </div>
        <div class="col-md-9">
          <span class="badge bg-primary">Public Repos: ${data.public_repos}</span>
          <span class="badge bg-secondary">Public Gists: ${data.public_gists}</span>
          <span class="badge bg-success">Followers: ${data.followers}</span>
          <span class="badge bg-info">Following: ${data.following}</span>
          <br><br>
          <ul class="list-group">
            <li class="list-group-item">Company: ${data.company}</li>
            <li class="list-group-item">Website/Blog: ${data.blog}</li>
            <li class="list-group-item">Location: ${data.location}</li>
            <li class="list-group-item">Member Since: ${data.created_at}</li>
          </ul>
        </div>
      </div>
    </div>
    `;
  }

  clearProfile(){
    this.profile.innerHTML = '';
  }

  showAlert(alert, message){
    this.clearProfile();
    // this.clearAlert();
    this.profile.innerHTML = '';
    let div = document.createElement('div');
    div.className = alert;
    div.appendChild(document.createTextNode(message));
    let container = document.querySelector('.searchContainers');
    let search = document.querySelector('.search');
    container.insertBefore(div, search);
    setTimeout(function(){
      document.querySelector('.alert').remove();
    },3000);
  }

  // clearAlert() {
  //   let currentAlert = document.querySelector('.alert');
  //   if(currentAlert) {
  //       currentAlert.remove();
  //   }
  // }
}