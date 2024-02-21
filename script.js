window.onload=function(){
var tasks=[];
let enableBut=document.getElementById("mytask");

function addToList(){
let mytask = document.getElementById("mytask").value;
let taskObject ={
taskItem:mytask
}
tasks.push(taskObject);
console.log(tasks);

var ul=document.getElementById('tasks');
var li=document.createElement('li');
li.appendChild(document.createTextNode(mytask));
ul.appendChild(li)

mytask.value = ' ';

button.disabled=true;

document.getElementById("mytask").value=" ";
}

function enablingButton(){
    button.disabled=false;
}

let button= document.getElementById("submit");
button.disabled = "true";
button.addEventListener ("click",addToList);
enableBut.addEventListener("input", enablingButton)
}