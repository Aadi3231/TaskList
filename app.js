/*
let val;

val = document;
val = document.all;
val = document.all[47];
val = document.all.length;
val = document.head;
val = document.body;
val = document.doctype;
val = document.domain;
val = document.URL;
val = document.characterSet;
val = document.contentType;

let scripts = document.scripts;

scriptsArr = Array.from(scripts);

scriptsArr.forEach(function(script){
   console.log(script.getAttribute('src')); 
});

console.log(val); */

//////////////////////////////////////////////////////////////////////////
    
console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

document.getElementById('task-title').style.background = 'Black';
document.getElementById('task-title').style.color = 'white';
document.getElementById('task-title').style.padding = '5px'; 

document.getElementById('task-title').textContent = 'Task List';
document.getElementById('task-title').innerText = 'My Tasks';
document.getElementById('task-title').innerHTML = '<span style="color:red">My Tasks</span>';

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    