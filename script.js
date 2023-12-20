// jS output
// alert("I am learning javaScript");
// document.write("I am AKash");
// document.getElementById("output").innerHTML="My name is akash";
// console.log("This is in console");

// variable & user input
// var myName; 
// myName = prompt("Enter Your Name");
// document.write("Name = ", myName);
// const x = 20; declear as constant value
// console.log(x);

// task
// var cel = prompt("Enter a number");
// var result = 9/5*cel+32;
// alert("Farenheit: "+ result + " Degree");
// console.log("Task Complete");

// Array
// var countries = [];
// for(i=0;i<5;i++){
//   countries[i] = prompt("Enter your countries name");
// }
// console.log(countries);
// document.write(countries);

// If satement
// Find bigest number  of three numbers
// var num1 = prompt("Enter number 1");
// var num2 = prompt("Enter number 2");
// var num3 = prompt("Enter number 3");

// if(num1>num2 && num1>num3){
//   console.log("Biggest number is: "+num1);
// }else if(num2>num1 && num2>num3){
//   console.log("Biggest number is: "+num2);
// }else{
//   console.log("Biggest number is: "+num3);
// }

// Nested If-statement
// Find bigest number  of three numbers
// var a = parseInt(prompt("Enter number 1"));
// var b = parseInt(prompt("Enter number 2"));
// var c = parseInt(prompt("Enter number 3"));

// if(a>b){
//   if(a>c){
//     console.log("Result: "+a);
//   }else{
//     console.log("Result: "+c);
//   }
// }else{
//   if(b>c){
//     console.log("Result: "+b);
//   }else{
//     console.log("Result: "+c);
//   }
// }

// Excercise
// var num = prompt("Enter a number");

// if(num<=100 && num>=80){
//   console.log("Grade: A+");
// }else if(num<=79 && num>=70){
//   console.log("Grade: A")
// }else if(num<=69 && num>=60){
//   console.log("Grade: A-");
// }else if(num<=59 && num>=50){
//   console.log("Grade: B");
// }else if(num<=49 && num>=40){
//   console.log("Grade: C");
// }else if(num<=39 && num>=34){
//   console.log("Grade: D");
// }else if(num<34 && num>=0){
//   console.log("Grade: F");
// }else{
//   console.log("Invalid Input");
// }

// Simple Calculator using switch case
// console.log(`Select an option
//  1. Add
//  2. Substrac
//  3.Multiplication
//  4.Division`);
// var result = null;
// var n1 = parseInt(prompt("Enter First Number"));
// var n2 = parseInt(prompt("Enter Second Number"));
// var option = parseInt(prompt("Select Your Option"));
// if(isNaN(n1)||isNaN(n2)||isNaN(option)){
//   console.log("Invalid Input");
// }else{
//   switch(option){
//     case 1:
//       result = n1+n2;
//       break;
//     case 2:
//       result = n1 - n2;
//       break;
//     case 3:
//       result = n1*n2;
//       break;
//     case 4:
//       result = n1/n2;
//       break;
//   }
//   if(result==null){
//     console.log("No Result");
//   }else{
//     console.log("Result = "+result);
//   }
// }

// For Loop
// var sum = 0;
// for(var i=1;i<=10;i++){
//   sum = sum+i;
// }
// console.log("Result = "+sum);

//srting, array and object iteration using {(for of) and (for in)}
// let  str = "I love Banhgladesh";
// let bike = ["RTR-V2", "RTR-V3", "MT-15", "FZ-V2", "FZ-V3"];
// let info = {
//   name: "Akash",
//   address: "Kushtia",
//   mobile: "01760864356"
// };
// console.log(str[0]);
// console.log(str[2]);
// for
// for(var i=0;i<str.length;i++){
//   console.log(`index: ${i}; value: ${str[i]}`);
// }

// for in(Use in string/array/object)
// for(var x in bike){
//   console.log(`index: ${x} & value: ${bike[x]}`)
// }
// for(var x in info){
//   console.log(`Property: ${x} & value: ${info[x]}`);
// }

// for of(Use in string/array)
// for(var x of bike){
//   console.log(`${x}`);
// }

// Excercise
// var len = parseInt(prompt("Enter how many number"));
// var sum = 0;
// var series = "";
// for(var i=1;i<=len;i++){
//   sum+=(i**2);
//   series+=(i**2).toString();
//   if(i==len){continue}
//   series+=" + "
// }
// console.log(`${series} = ${sum}`)

// Function
//Normal decleration
// function add(num1,num2){
//   return num1+num2;
// }
// console.log(add(2,5));

// Expression Function
// let multi = function(num1, num2){
//   return num1*num2;
// }
// console.log(multi(9,4));

// Arrow Function
// let divi = (n1,n2) =>{
//   return n1/n2;
// }
// console.log(divi(100,5));

// array iteration using map/forEach
let fruit = ["apple","mango","banana","pineapple"];
let num = [3, 5, 9, 3, 55, 22];

// // forEach
// let addString = function(p1, p2, p3){
//   console.log(`index: ${p2} & Item: ${p1}`);
//   console.log(p3);
// }
// fruit.forEach(addString); //function call

// map
// let addString = (itm) =>{
//   return `${itm} is my favourite`;
// }
// let newFruit = fruit.map(addString);
// console.log(newFruit);

// let square = (item) =>{
//   return item**2;
// }
// let newNum = num.map(square);
// console.log(newNum);

// let a = (name)=>{
//   return (age) =>{
//     console.log(name, age);
//   }
// }
// a("rahim")(25);

// class
// class Person{
//   constructor(fn, ln, db){
//     this.fName = fn;
//     this.lName = ln;
//     this.dob = db;
//   }
//   calAge(){
//     let birth = new Date(this.dob);
//     let dif = Date.now() - birth.getTime();
//     let age = new Date(dif);
//     return Math.abs(age.getFullYear()-1970);
//   }
//   fullName(){
//     return this.fName +" "+ this.lName;
//   }
// }

// let person1 = new Person("Arfuzzaman", "Akash", "08,09,2000");
// console.log(`Name: ${person1.fullName()} $ Age: ${person1.calAge()}`);

// single Selector
// let val;
// val = document.getElementById('h3id');
// document.getElementById('h3id').innerHTML = "<i>Write in javaScript</i>";
// document.getElementById('h3id').style = "background-color: #ddd; color: blue; text-align: center; padding: 10px";
// val.innerText = "New Heading";
// val.textContent = "Again new heading";
// document.querySelector('ol').style = "background-color: #ddd; padding: 30px";
// document.querySelector('li').style ="background-color: red;padding: 10px; color: white";
// document.querySelector('li:last-child').style = "color: blue";
// document.querySelector('li:nth-child(3)').style = "color: red";
// document.querySelector('li:nth-child(even)').style = "color: green";
// document.querySelector('#id'); //selectById
// document.querySelector('.className'); //selectByClass
// // console.log(val);

// MultiSelector
// let list = document.getElementsByClassName('sample-class');
// list[2].style.background = "green";
// console.log(list[4]);

// let list = document.getElementsByTagName('li');
// list = document.querySelector('ul').getElementsByTagName('a');
// let lis = Array.from(list);
// lis.forEach(function(item){
//   item.style.color = "red";
// })
// console.log(list);

// let list= document.querySelectorAll('ul li a');
// list.forEach(function(item){
//   item.style.color = "white";
// });

// let liOdd = document.querySelectorAll('li:nth-child(odd)');
// let liEven = document.querySelectorAll('li:nth-child(even)');
// liOdd.forEach(function(item){
//   item.style.background = "blue";
//   item.style.color = "white";
// });
// liEven.forEach(function(item){
//   item.style.background = "red";
//   item.style.color = "white";
// });

// Traversing the DOM
// let val;
// let list = document.querySelector('ul');
// let listItem = document.querySelector('ul li:last-child');

// // Get Child Nodes
// val = list;
// val = listItem;
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[1];
// val = list.childNodes[1].nodeName;
// val = list.childNodes[1].nodeType;
// //NODETYPE:  1 -> Element, 2 -> Attribute, 3-> textNode, 8 -> Comment, 9 -> documentItself, 10 -> doctype

// // Get Child Nodes without Text
// val = list.children;
// val = list.children[0];
// val = list.children[1].children;
// val = list.children[1].children[0].href;
// val = list.childElementCount;
// val = list.firstChild;
// val = list.firstElementChild; //without text
// val = list.lastChild;
// val = list.lastElementChild; //without text
// val = listItem;
// val = list.parentElement;
// val = listItem.parentNode; //305 & 306 are same
// val = listItem.previousSibling; 
// val = listItem.previousElementSibling; //without text
// val = listItem.previousElementSibling.previousElementSibling;

// listItem = document.querySelector('ul li:first-child');
// val = listItem;
// val = listItem.nextSibling;
// val = listItem.nextElementSibling; //without text
// val = listItem.nextElementSibling.children;
// val = listItem.nextElementSibling.children[0].href;
// console.log(val);

// Adding Element to Dom
// let olItem = document.createElement('li'); //create Element
// olItem.className = "classNAme again more"; //Add class
// olItem.id = "idName"; //add id
// olItem.setAttribute('title', 'a title'); //add atribute
// olItem.appendChild(document.createTextNode("javaScript"));//add content
// document.querySelector('ol').appendChild(olItem); //add in ol
// // console.log(olItem);

// let ulItem = document.createElement('li');
// ulItem.className = "myClass";
// ulItem.id = "myId";

// // another example
// let linkItem = document.createElement('a');
// linkItem.setAttribute('href', 'https//www.telegram.com');
// linkItem.appendChild(document.createTextNode("Telegram"));
// ulItem.appendChild(linkItem);
// document.querySelector('ul').appendChild(ulItem);
// console.log(ulItem);
// console.log(linkItem);
// console.log(document.querySelector('ul'));

// // Repleasing Element
// let newItem = document.createElement('h1');
// newItem.appendChild(document.createTextNode("Create by javaScript"));
// let oldItem = document.querySelector('h3');
// let parent = document.querySelector('.container');
// parent.replaceChild(newItem, oldItem);

// console.log(newItem);

// // Remove Element
// let listItem = document.querySelectorAll('li');
// listItem[0].remove();
// listItem[5].remove();
// let list = document.querySelector('ul');
// list.removeChild(listItem[4]);

// // remove class & attributes
// list.classList.add('my-class', 'new-class');
// list.classList.remove('sample-class');
// list.setAttribute('title', 'a new title');
// list.setAttribute('name', 'a name');
// console.log(list.hasAttribute('name'));
// list.removeAttribute('name');

// console.log(listItem);
// console.log(list);

// Events
// document.getElementById('eventId').addEventListener('click',message);
// function message(){
//   alert("javaScript File Event");
// }

// more on Events
// document.querySelector('#eventId').addEventListener('mousemove',msg);
// document.querySelector('#eventId').style.background = "blue";
// function msg(e){
//   let val = e;
//   val =e.target;
//   val = e.target.id;
//   val = e.timeStamp;
//   val = e.type;
//   val = e.clientY;
//   val = e.clientX;
//   val = e.offsetX;
//   val = e.offsetY;
//   val = e.value;
//   this.style.background = `#${e.offsetX}`;
//   console.log(val);
// }

// document.getElementById('test').addEventListener('focus',demoFunctionx);
// function demoFunctionx(e){
//   this.style.background = "#ddd";
//   this.style.border = "1px solid black";
// }

// document.getElementById('test').addEventListener('keyup', demoFunction);
// function demoFunction(e){
//   document.getElementById('demo').innerText = `${this.value}`;
// }

// Regular Expression (is an pattern matching technique)
// exec() -> return result in array or null
// Literal Charecter
// let re = /hello/;
// re = /hello/i; //without case sensitive
// let str = "hello world";
// str = "world";
// let result = re.exec(str);
// console.log(re.source); //exsact regular expression
// console.log(result);

// // test() -> return true or false
// str = "Hello World";
// result = re.test(str);
// console.log(result);

// // match() -> return as exec() method
// str = "abcdef";
// str = "abcHellodef";
// result = str.match(re);
// console.log(result);

// // search() -> return index of first match
// str = "xyz hello abc hello zyf";
// result = str.search(re);
// console.log(result);

// // replace() -> return new string
// str = "My name is hello, Hello Everyone";
// result = str.replace(re,'AKash');
// console.log(result);

//Meta Chareecter
// let re;
// let str;
// re = /^hello/; //must start with this word
// re = /hello$/; //must ends with this word
// re = /^hello$/; //must start and ends with this word
// re = /h.llo/; //must have any word in this (.) dot point
// re = /h*llo/; //zero or more charecter in this (*) star point
// re = /he?llo/; //(Optional)->before (?) question mark character must be same or nothing. But not be any other charecter

// str = "hello world";
// str = "my hello world";
// str = "world hello";
// str = "hello"; //442 only for this
// str = "hallo"; //443 --> true
// str = "hllo"; //443 --> false & 444 --> true
// str = "heaqllo"; //444 --> true
// str = "hxlo"; ///444 --> false
// str = "hllo"; //445 --> true
// str = "hallo"; //445 --> false

// // character set with brackets []
// re = /h[ea]llo/; //must be one of them inside brackets
// re = /h[^ea]llo/; //anything except those inside brackets
// re = /^[ha]llo/; //must start with h or a 
// re = /[a-z]llo/; //any character in a to z range
// re = /^[A-Z]/; //must start with A to Z
// re = /[^A-F]/; //anything start without those word
// re = /[A-Za-z]/;
// re = /[0-9]ello/; //any where one or more digit
// re = /^[0-9]ello/; //must start with one digit;
// re = /^[0-9][0-9][0-9]ello/; //must start with three charecter

// str = "hello"; //459 --> true
// str = "hllo"; //459 --> false
// str = "heallo"; //459 & 460 --> false
// str = "hxllo"; //460 --> true
// str = "hallo"; //461 --> false
// str = "hllo"; //461 & 462 --> true
// str = "Md Arifuzzaman"; //463 true
// str = "1Md Arifuzzaman"; //463 false
// str = "100"; //464 true
// str = "G"; //464 true
// str = "A"; //464 & 465 true
// str = "100"; //465 false
// str = "h5ello"; //466 true
// str = "1ello"; //467 true
// str = "123ello";

// // Braces{}->Quantifier --> how many times a expression work
// re = /hel{2}o/; //must be 2
// re = /hel{2,5}o/; //range 2 to 5
// re = /hel{2,}o/; // at least two

// str = "helo"; //487 false
// str = "hello"; //487 true
// str = "helllllo"; //487 true
// str = "hellllllo"; //487 false & 488 true

// re =/^([0-9]){2}/; //minimum 2, maximum no problem
// re = /^([0-9]){2}$/; //start anfd end with maximum 2 digit
// re = /^([0-9]xy){3}/; //one digit then xy, it run minimum 3 times, maximum no problem

// str = "1abc"; //496 false
// str = "123abc"; //496 true
// str = "123"; //497 false
// str = "12"; //497 true
// str = "1xy2xy"; //498 false
// str = "1xy2xy3xy4xy5xy"; //498 true

// // check bangladeshi phone number
// re = /^01([0-9]){9}$/;
// re = /^\+8801([0-9]){9}$/;
// str = "01760864356";
// str = "+8801760864356";

// // sort hand character
// re = /\w/; //word character(alphabet,numeric or _)
// re = /\w+/; //one or more word charecter
// re = /\W/; //non  word character
// re = /\W+/; //one or more non word character
// re = /\d/; //digit charecter
// re = /\d+/; //one or more digit charecter
// re = /\D/; //non digit character;
// re = /\D+/; //one or more non digit characterr
// re = /\s/; //match white space
// re = /\S/; //non match white character
// re = /hello\b/; //word boundary
// re = /\bhello\b/;
// re = /x(?=y)/; //Assertiion (matches x  only if x is followed by y)
// re = /x(?!y)/; //matches x only if x is not followed by y

// str = "abcd";
// str = "198";
// str = "(*&%";
// str = "(&*abc123";
// str = "Md Arifuzzaman Akash";
// str = "akash";
// str = "hello xyz";
// str = "abchello word";
// str = "helloabc world";
// str = "ahello world";
// str = "ahellob";
// str = "hello world";
// str = "hello worldxy";
// str = "hello worldxz";
// console.log(re.exec(str));
// reTest(re, str);
// function reTest(re, str){
//   if(re.test(str)){
//     console.log(`'${str}' matches '${re.source}'`);
//   }
//   else{
//     console.log(`'${str}' dosen't match '${re.source}'`)
//   }
// }

// Example of regular expression
// let re;
// let str;
// postal code(1200, 1201)
// re = /^[0-9]{4}$/;
// str = "1200";

// // phone number
// // 01760864356, +8801760864356, 8801760864356
// re = /^(\+)?(88)?01[0-9]{9}$/;
// str = "+8801760864356";

// // E-mail (xyz.by.x7g@gmail.com)
// re = /^([a-zA-Z0-9]\.?)+\@([a-zA-Z0-9]\.?)+$/;
// str ="xyz.by.x7g@gmail.com";

// console.log(re.test(str));

// JSON (javaScript Object Notation)
// Js object
// var student = {
//   name: "Akash",
//   age: 23,
//   hometown: "Dhaka"
// };
// // JSON object (but hard code in js file it's look like jS object)
// var newStudent = {
//   "name": "Akash",
//   "age": 23,
//   "hometown": "Dhaka"
// };
// console.log(student);
// console.log(newStudent);
// var cJsonStudent = JSON.stringify(student); // js object to json Object
// var cJsStudent = JSON.parse(cJsonStudent); // json object to js objet
// console.log(cJsonStudent); //587
// console.log(cJsStudent); //588
// // JSON supported data types: string, array, number, boolean, null, onject(json object)
// // JSON not supported data types: undefined, date, function
// var personx = {
//   name: "AKash", //string
//   age: 23, //number
//   home: "Dhaka",
//   dob: 2000-8-9, //date
//   married: false, //boolean
//   testNull: null, //null
//   testUndef: undefined, //undefined
//   xyz: function(){ //function
//     console.log(`${this.name}`)
//   }
// };
// console.log(personx);
// var personJson = JSON.stringify(personx);
// console.log(personJson);

// bring data from external json file using(ajax code)
// var xmlhttp = new XMLHttpRequest();
// xmlhttp.onreadystatechange = function(){
//   if(this.readyState==4 && this.status==200){
//     var data = this.responseText;
//     // console.log(data);
//     jsonData(data); //call function
//   }
// }
// xmlhttp.open("GET", "data.json", true);
// xmlhttp.send();
// function jsonData(jsonObj){
//   // console.log(json_obj);
//   var jsObj = JSON.parse(jsonObj);
//   // console.log(jsObj);
//   for(x in jsObj.persons){
//     // console.log(x);
//     var persons = jsObj.persons;
//     // console.log(persons[x]);
//     for(y in persons[x]){
//       // console.log(y);
//       // console.log(persons[x][y]);
//       console.log(persons[x].name);
//     }
//   }
// }

// AJAX (Asynchronous JavaScript and XML(but we use json))
// document.getElementById('get_data').addEventListener('click',getData);
// function getData(){
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET','data.txt',true);
//   //onProgress function (using for showing loader/spinner)
//   xhr.onprogress = function(){
//     console.log("Loading...");
//   }
//   xhr.onload = function(){
//     if(this.status===200){
//       //Http statuses = 200: ok; 404: not found; 403: forbidden
//       // console.log(this.status);
//       // console.log(this.responseText);
//       document.getElementById('text').innerHTML = this.responseText;
//     }
//   }
//   //another oldest way for same work
//   // xhr.onreadystatechange = function(){
//   //   //readySTate values = 0: Request not initialized; 1: Server connection stablished; 2: Request received; 3: Processing request; 4: Request finished & response is ready
//   //   console.log(this.readyState);
//   //   if(this.readyState===4 && this.status===200){
//   //     console.log(this.responseText);
//   //   } 
//   // }
//   xhr.send();
//   // console.log(xhr);
// }

//get data from another website using ajax
//API -->need to read
//RESTful API --> need to read
// document.getElementById('get_jokes').addEventListener('click',loadJokes);
// function loadJokes(e){
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET',`https://api.chucknorris.io/jokes/random`,true);
//   xhr.onload = function(){
//     if(this.status===200){
//       let data = JSON.parse(this.responseText);
//       // console.log(data);
//       let jokes = data.value;
//       // console.log(jokes);
//       document.getElementById('output').innerHTML=jokes;
//     }
//   }
//   xhr.send();
// }

// callBack Function
// synchronocus way
// let persons = [
//   {firstName:"Akash",lastName:"Ali"},
//   {firstName:"Arifuzzaman",lastName:"AKash"}
// ]
// function createPerson(person){
//   setTimeout(function(){
//     persons.push(person);
//   },4000);
// }
// function getPerson(){
//   setTimeout(function(){
//     let output = '';
//     persons.forEach(function(itm){
//       output+=`<li>${itm.firstName} ${itm.lastName}</li>`;
//     });
//     document.getElementById('title').textContent="Synchronus way"
//     document.getElementById('synOutput').innerHTML=output;
//   },1000);
// }
// // createPerson({firstName:"Shovon",lastName:"Roy"});
// getPerson();

// Asynchronous way
// function createPerson(person,callback){
//   setTimeout(function(){
//     persons.push(person);
//     callback();
//   },4000);
// }
// function getPerson(){
//   setTimeout(function(){
//     let output = '';
//     persons.forEach(function(itm){
//       output+=`<li>${itm.firstName} ${itm.lastName}</li>`;
//     });
//     document.getElementById('title').textContent = "Asynchronous Way:";
//     document.getElementById('asynOutput').innerHTML = output;
//   },1000);
// }
// createPerson({firstName:"Shovon",lastName:"Roy"},getPerson);

// Promises
// function createePerson(person){
//   let prom = new Promise(function(resolve,reject){
//     persons.push(person);
//     resolve();
//   });
//   return prom;
// }
// function getPerson(){
//   let output = '';
//   persons.forEach(function(itm){
//     output+=`<li>${itm.firstName} ${itm.lastName}</li>`;
//   });
//   document.getElementById('title').textContent = "Promises Way";
//   document.getElementById('promOutput').innerHTML = output;
// }
// createePerson({firstName:"Shovon",lastName:"Roy"})
//   .then(getPerson);

// promises with eror
// function createPerson(person){
//   let prom = new Promise(function(resolve,reject){
//     persons.push(person);
//     let err = false; //or true(if true then eror)
//     if(!err){
//       resolve();
//     }else{
//       let error = reject("Something wrong!");
//     }
//   });
//   return prom;
// }
//  function getPerson(){
//   let output = '';
//   persons.forEach(function(itm){
//     output+=`<li>${itm.firstName} ${itm.lastName}</li>`;
//   });
//   document.getElementById('title').textContent = "Promises way with Eror";
//   document.getElementById('promOutput').innerHTML = output;
//  }
//  createPerson({firstName:"Shovon",lastName:"Roy"})
//   .then(getPerson);

// Fetch API
// document.getElementById('get_jokes').addEventListener('click',getJokes);
// function getJokes(e){
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(function(res){
//       // console.log(res); //get response
//       // console.log(res.text()); //get text data
//       // console.log(res.json()); //get object data
//       return res.json();
//     })
//     .then(function(data){
//       // console.log(data); //get ajax type data
//       console.log(data.value); 
//     })
//     .catch(function(err){
//       console.log(`error: ${err}`);
//     })
// }

// fetch api using arrow function
// document.getElementById('get_jokes').addEventListener('click',getData);
// function getData(e){
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(res => res.json())
//     .then(data => {console.log(data.value);})
//     .catch(err => {console.log(err);})
// }

// // Spread Operator (...)
// // Spread Operator in String
// let str = "AKash ALi";
// let newStr = [...str];
// console.log(newStr);

// // Spread Operator in Array
// let fruit1 = ["Apple", "Mango", "Pineapple"];
// let fruit2 = ["Banana", "Grape"];
// let newFruit = "Jackfruit";
// let newArr = [...fruit1, newFruit, ...fruit2];
// console.log(newArr);
// let newArrSpread = [...newArr[2]];
// console.log(newArrSpread);

// // Spread Operator in Object
// let person = {
//   fName: "Arifuzzaman",
//   lName: "Akash"
// }
// let newPerson = {...person, dob: "09-08-2000"};
// console.log(newPerson);
// let personX = {...newPerson.fName};
// console.log(personX);
// console.log(`Result: ${personX[5]}`);

// Spread Operator in Function
// let number = [1,23,34,-20];
// // console.log(Math.max(number)); //Math.max() dosen't work at Array
// console.log(Math.max(...number));

// let person = ["Arifuzzaman", "Akash","09-08-2000"];
// let test = (fName,lName,dob) => {
//   console.log(`Name: ${fName} ${lName}
// dob: ${dob}`);
// }
// test(...person);