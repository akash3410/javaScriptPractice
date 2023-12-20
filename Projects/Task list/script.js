// Define UI Element
let form = document.querySelector('#task_form');
let inputTask = document.querySelector('#add_task');
let taskList = document.querySelector('ul');
let filter = document.querySelector('#filter_task');
let clearTaskBtn = document.querySelector('#clear_task');

// Add Event litchener
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearTaskBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
document.addEventListener('DOMContentLoaded',getTask);

// Functions
// Add Task
function addTask(e){
  if(inputTask.value === ''){
    alert("Add a Task");
  }else{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(inputTask.value + " "));
    let link = document.createElement('a');
    link.setAttribute('href','#');
    link.innerHTML = "X";
    li.appendChild(link);
    taskList.appendChild(li);
    storeTaskInLS(inputTask.value);
    inputTask.value = '';
  }
  e.preventDefault;
}

// Remove Task
function removeTask(e){
  if(e.target.hasAttribute('href')){
    if(confirm("Are you sure?")){
      re = e.target.parentElement;
      re.remove();
      removeTaskFromLS(re);
    }
  }
}

// Clear Task
function clearTask(e){
  if(confirm("Are You Sure?")){
    taskList.innerHTML = "";
  }
  localStorage.clear();
}

// Filter Task
function filterTask(e){
  let text = e.target.value.toLowerCase();
  document.querySelectorAll('li').forEach(task=>{
    let item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text)!= -1){
      task.style.display = 'block';
    }else{
      task.style.display = 'none';
    }
  });
}

// Store tasks in Local Storage
function storeTaskInLS(task){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.push(task);
  localStorage.setItem('tasks',JSON.stringify(tasks));
}

// Get tasks from local storage
function getTask(e){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  tasks.forEach(task=>{
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(task + " "));
    let link = document.createElement('a');
    link.setAttribute('href','#');
    link.innerHTML = "X";
    li.appendChild(link);
    taskList.appendChild(li);
  });
}

// Remove tasks from local storage
function removeTaskFromLS(listItem){
  let tasks;
  if(localStorage.getItem('tasks')===null){
    tasks = [];
  }else{
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }
  let li = listItem;
  li.removeChild(li.lastChild);
  tasks.forEach((task,index)=>{
    if(li.textContent.trim()===task){
      tasks.splice(index,1);
    }
  });
  localStorage.setItem('tasks',JSON.stringify(tasks));
}