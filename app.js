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

console.log(val);